import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, AGE_BANDS, CITY_SIZES, THEME_LABELS, isResolved } from "../store";
import type { Theme, Node, AskSession } from "../types";
import NodeCard from "../ui/NodeCard";
import { Avatar, Stars } from "../ui/bits";
import { useAuthGate } from "../ui/authGate";

const themeKeys = Object.keys(THEME_LABELS) as Theme[];

const SAFETY = /(suicid|kill myself|self.harm|end it all|overdose|abuse|assault|divorce lawyer|custody|immigration law|deport|diagnos|cancer|medication)/i;

const STOP = new Set([
  "the","a","an","and","or","but","i","my","me","to","of","in","on","for","with","is","am","are",
  "was","were","be","been","that","this","it","as","at","so","if","not","do","did","have","has",
  "had","would","could","should","about","from","they","them","their","there","then","than","when",
  "what","who","how","why","just","very","really","im","ive","dont","cant","get","got","go","going",
  "one","two","years","year","time","like","now","still","more","most","much","also","because",
]);

function tokenize(s: string): Set<string> {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w))
  );
}

function score(a: Set<string>, b: Set<string>) {
  let hits = 0;
  a.forEach((w) => {
    if (b.has(w)) hits++;
  });
  return hits;
}

export default function AskPage() {
  const nav = useNavigate();
  const gate = useAuthGate();
  const nodes = useStore((s) => s.nodes);
  const asks = useStore((s) => s.asks);
  const pushAsk = useStore((s) => s.pushAsk);
  const me = useStore((s) => s.me);

  const [stage, setStage] = useState<"form" | "loading" | "result">("form");
  const [loadingMsg, setLoadingMsg] = useState("");
  const [theme, setTheme] = useState<Theme>("career");
  const [ageBand, setAgeBand] = useState("25-34");
  const [citySize, setCitySize] = useState("city");
  const [situation, setSituation] = useState("");

  const lastAsk = asks[0];
  const isSafety = SAFETY.test(situation);
  const canSubmit = situation.trim().length >= 30;

  const matched = useMemo(() => {
    if (!lastAsk) return [] as Node[];
    const a = tokenize(lastAsk.situation);
    return nodes
      .filter((n) => n.id !== "__none")
      .map((n) => {
        const b = tokenize(n.situation + " " + n.reason + " " + n.options.map((o) => o.label).join(" "));
        let s = score(a, b) * 3;
        if (n.theme === lastAsk.theme) s += 4;
        if (n.structured.ageBand === lastAsk.ageBand) s += 2;
        if (n.structured.citySize === lastAsk.citySize) s += 1;
        if (isResolved(n)) s += 1.5;
        return { n, s };
      })
      .sort((x, y) => y.s - x.s)
      .slice(0, 5)
      .map((x) => x.n);
  }, [lastAsk, nodes]);

  const crowdedSplit = useMemo(() => {
    if (!matched.length) return [];
    const tally = new Map<string, number>();
    matched.forEach((n) => {
      const label = n.options.find((o) => o.id === n.chosenOptionId)?.label ?? "Other";
      tally.set(label, (tally.get(label) ?? 0) + 1);
    });
    return [...tally.entries()]
      .map(([optionLabel, count]) => ({ optionLabel, count }))
      .sort((a, b) => b.count - a.count);
  }, [matched]);

  const keywords = useMemo(() => {
    const freq = new Map<string, number>();
    matched.forEach((n) => {
      tokenize(n.reason).forEach((w) => freq.set(w, (freq.get(w) ?? 0) + 1));
    });
    return [...freq.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([w]) => w);
  }, [matched]);

  const resolvedCount = matched.filter(isResolved).length;
  const avgRegret =
    matched.length
      ? matched.reduce((a, n) => {
          if (!n.reviews.length) return a;
          return a + n.reviews.reduce((x, r) => x + r.regret, 0) / n.reviews.length;
        }, 0) / Math.max(1, resolvedCount)
      : 0;

  const submit = () => {
    setStage("loading");
    const msgs = [
      "Reading your situation…",
      "Searching for people who stood exactly here…",
      "Pulling the endings they wrote…",
      "Tallying what the crowd chose…",
    ];
    msgs.forEach((m, i) => setTimeout(() => setLoadingMsg(m), i * 700));
    setTimeout(() => {
      const session: AskSession = {
        id: `ask_${Date.now()}`,
        situation: situation.trim(),
        theme,
        ageBand,
        citySize,
        createdAt: Date.now(),
        matchedNodeIds: [],
        crowdedSplit: [],
        reasonKeywords: [],
        advice: "",
        disclaimer: "",
      };
      pushAsk(session);
      setStage("result");
    }, 3000);
  };

  if (stage === "loading")
    return (
      <div className="wrap fade-in" style={{ paddingTop: 60, textAlign: "center" }}>
        <div style={{ marginBottom: 20 }}>
          <span className="spinner" />
        </div>
        <p style={{ color: "var(--text-2)" }}>{loadingMsg}</p>
      </div>
    );

  if (stage === "result" && lastAsk)
    return (
      <div className="wrap fade-in" style={{ paddingTop: 22 }}>
        <button className="btn btn-ghost btn-sm" onClick={() => setStage("form")} style={{ marginBottom: 12 }}>
          ← Ask something else
        </button>

        {isSafety && (
          <div className="safety-banner">
            This looks like it touches on health, legal, or safety matters. Life Crossroads can show
            you how others handled similar situations, but it can't advise you — please talk to a
            qualified professional. If you're in crisis, in the US you can call or text 988 (Suicide
            &amp; Crisis Lifeline); in the UK, Samaritans at 116 123.
          </div>
        )}

        <h1 className="page-title">Here's what we found.</h1>
        <p className="page-sub">
          Based on {matched.length} similar crossroads in the case library
          {resolvedCount > 0 ? `, ${resolvedCount} of which have a written ending` : ""}.
        </p>

        <div className="ask-block">
          <div className="ask-block-title">1 · People who stood where you stand</div>
          {matched.map((n) => {
            const theirPick = n.options.find((o) => o.id === n.chosenOptionId)?.label;
            const avg = n.reviews.length
              ? n.reviews.reduce((a, r) => a + r.regret, 0) / n.reviews.length
              : 0;
            return (
              <div className="match-row" key={n.id} onClick={() => nav(`/n/${n.id}`)}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className="match-sit">
                    {n.situation.length > 130 ? n.situation.slice(0, 130) + "…" : n.situation}
                  </p>
                  <p className="match-out">
                    Chose: <strong style={{ color: "var(--text)" }}>{theirPick}</strong>
                    {n.reviews.length > 0 ? (
                      <>
                        {" · "}
                        <Stars value={Math.round(avg)} />{" "}
                        <span style={{ color: "var(--text-3)" }}>
                          {avg <= 2
                            ? "would do it again"
                            : avg === 3
                            ? "mixed"
                            : "would not repeat it"}
                        </span>
                      </>
                    ) : (
                      <span style={{ color: "var(--amber)" }}> · ending not written yet</span>
                    )}
                  </p>
                </div>
                <span className="sub" style={{ alignSelf: "center" }}>
                  →
                </span>
              </div>
            );
          })}
          {matched.length === 0 && (
            <p className="hint">No close matches yet — the library is still growing.</p>
          )}
        </div>

        <div className="ask-block">
          <div className="ask-block-title">2 · How the crowd split</div>
          <div className="diverge">
            <div className="diverge-col">
              {crowdedSplit.map((s) => {
                const pct = Math.round((s.count / matched.length) * 100);
                return (
                  <div className="vote-bar-row" key={s.optionLabel}>
                    <div className="vote-bar-label">
                      <span className="lbl">{s.optionLabel}</span>
                      <span className="pct">{pct}%</span>
                    </div>
                    <div className="vote-track">
                      <div className="vote-fill" style={{ width: `${pct}%`, background: "var(--accent)" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <div className="ask-block-title" style={{ marginBottom: 8 }}>
              What they cared about most
            </div>
            {keywords.map((k) => (
              <span className="kw" key={k}>
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="ask-block">
          <div className="ask-block-title">3 · What the endings suggest</div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text)", marginTop: 0 }}>
            {matched.length === 0 ? (
              "Not enough comparable cases to say anything useful yet. Try describing the decision in a different way."
            ) : (
              <>
                Among the {resolvedCount} people who came back and wrote an ending,{" "}
                {avgRegret <= 2.5 ? (
                  <>
                    most <strong style={{ color: "var(--accent)" }}>did not regret</strong> the choice
                    they made — even when it looked reckless at the time.
                  </>
                ) : avgRegret <= 3.5 ? (
                  <>
                    the reactions were <strong style={{ color: "var(--amber)" }}>genuinely mixed</strong>{" "}
                    — this is the kind of call where either path costs you something real.
                  </>
                ) : (
                  <>
                    a majority{" "}
                    <strong style={{ color: "var(--danger)" }}>wished they had chosen differently</strong>
                    .
                  </>
                )}{" "}
                Read the ones below before you decide — especially the dissents, which tend to age
                better than the confident takes.
              </>
            )}
          </p>
          <p className="disclaimer">
            This is a summary of anonymous anecdotes and model reasoning, not advice. Based on{" "}
            {matched.length} cases and {keywords.length} recurring themes. For anything involving
            health, law, or money you can't afford to lose, talk to a professional.
          </p>
        </div>

        <button
          className="btn btn-primary btn-block"
          style={{ padding: 12 }}
          onClick={() => gate(() => nav(`/n/${matched[0]?.id ?? ""}`), "ask")}
        >
          Turn this into my own decision
        </button>
        <p className="hint" style={{ textAlign: "center", marginTop: 10 }}>
          You'll get the same 4-step form, pre-filled with what you just told us.
        </p>
      </div>
    );

  return (
    <div className="wrap fade-in" style={{ paddingTop: 22 }}>
      <h1 className="page-title">Ask the system</h1>
      <p className="page-sub">
        Describe a decision you're facing. We'll find people who stood in the same place — and show
        you how it turned out for them.
      </p>

      {asks.length > 0 && stage === "form" && (
        <div style={{ marginBottom: 22 }}>
          <div className="section-title">Your previous questions</div>
          {asks.slice(0, 3).map((a) => (
            <div
              className="card"
              key={a.id}
              style={{ cursor: "pointer", padding: 14 }}
              onClick={() => {
                setSituation(a.situation);
                setTheme(a.theme);
                setStage("result");
              }}
            >
              <div style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>
                {a.situation.slice(0, 120)}…
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="ask-block">
        <div className="field">
          <label className="label">The kind of decision</label>
          <div className="tabs" style={{ marginBottom: 0, paddingBottom: 0 }}>
            {themeKeys.map((t) => (
              <button
                key={t}
                className={"tab" + (theme === t ? " active" : "")}
                onClick={() => setTheme(t)}
              >
                {THEME_LABELS[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <div className="grid-3">
            <div>
              <label className="label">Age</label>
              <select value={ageBand} onChange={(e) => setAgeBand(e.target.value)}>
                {AGE_BANDS.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Where you live</label>
              <select value={citySize} onChange={(e) => setCitySize(e.target.value)}>
                {CITY_SIZES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="field" style={{ marginBottom: 4 }}>
          <label className="label">
            Describe your situation <span className="req">*</span>
          </label>
          <textarea
            rows={6}
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="I'm 38 and just got offered a promotion that means relocating across the country. My kids are settled here and my partner's career is finally taking off…"
          />
          <p className="hint">
            {situation.trim().length < 30
              ? `${30 - situation.trim().length} more characters to search on.`
              : `${situation.length} characters — ready.`}
          </p>
        </div>
      </div>

      <button
        className="btn btn-primary btn-block"
        style={{ padding: 12 }}
        disabled={!canSubmit}
        onClick={() => gate(submit, "ask")}
      >
        Find similar crossroads
      </button>
      <p className="hint" style={{ textAlign: "center", marginTop: 10 }}>
        Anonymous. Nothing you type here is published unless you choose to post it.
      </p>
    </div>
  );
}