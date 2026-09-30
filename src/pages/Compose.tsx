import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, AGE_BANDS, CITY_SIZES, THEME_LABELS } from "../store";
import type { Theme } from "../types";
import { Avatar } from "../ui/bits";

const themeKeys = Object.keys(THEME_LABELS) as Theme[];

export default function Compose({ onClose }: { onClose: () => void }) {
  const nav = useNavigate();
  const me = useStore((s) => s.me);
  const nodes = useStore((s) => s.nodes);
  const addNode = useStore((s) => s.addNode);

  const [step, setStep] = useState(1);
  const [theme, setTheme] = useState<Theme>("career");
  const [ageBand, setAgeBand] = useState<string>("25-34");
  const [citySize, setCitySize] = useState<string>("city");
  const [occupation, setOccupation] = useState("");
  const [situation, setSituation] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [chosen, setChosen] = useState(0);
  const [reason, setReason] = useState("");
  const [reminderMonths, setReminderMonths] = useState(6);
  const [prevNodeId, setPrevNodeId] = useState("");

  const myNodes = nodes.filter((n) => n.handle === me.handle);
  const validOptions = options.filter((o) => o.trim());
  const piiWarning =
    /(?:at|works? (?:at|for)|joined)\s+[A-Z][a-z]+/.test(situation) ||
    /\b\d{1,3}\s+[A-Z][a-z]+\s+(?:Street|St|Avenue|Ave|Road|Rd)\b/.test(situation);

  const canNext =
    step === 1
      ? situation.trim().length >= 40 && occupation.trim()
      : step === 2
      ? validOptions.length >= 2
      : step === 3
      ? reason.trim().length >= 30
      : true;

  const publish = () => {
    const id = addNode({
      situation: situation.trim(),
      structured: { ageBand, citySize, occupation: occupation.trim() },
      options: validOptions,
      chosenIndex: Math.min(chosen, validOptions.length - 1),
      reason: reason.trim(),
      theme,
      prevNodeId: prevNodeId || undefined,
      reviewAfterDays: Math.round(reminderMonths * 30),
    });
    onClose();
    nav(`/n/${id}`);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="step-dots">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={"step-dot" + (s <= step ? " done" : "")} />
          ))}
        </div>

        {step === 1 && (
          <>
            <h2 className="modal-title">What's the situation?</h2>
            <p className="modal-sub">
              Write it like you'd tell a friend at 1am — concrete, not polished. This is what other
              people will search for when they're stuck in the same spot.
            </p>
            <div className="field">
              <label className="label">The kind of crossroads</label>
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
                <div>
                  <label className="label">What you do</label>
                  <input
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    placeholder="e.g. nurse, founder"
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">
                Describe the situation <span className="req">*</span>
              </label>
              <textarea
                rows={6}
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                placeholder="I'm 34, been at the same company eight years. Last week a startup offered me 20% more but no stability. My partner just found out she's pregnant…"
              />
              <p className="hint">
                {situation.trim().length < 40
                  ? `${40 - situation.trim().length} more characters — give it enough detail to be useful.`
                  : `${situation.length} characters.`}
              </p>
            </div>
            {piiWarning && (
              <div className="safety-banner">
                Heads up — this reads like it might identify you (a specific employer or address).
                You're anonymous here; consider trimming names before publishing.
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="modal-title">What were the real options?</h2>
            <p className="modal-sub">
              Not the tidy version — the ones you actually weighed. Include the one you almost took
              but didn't.
            </p>
            {options.map((o, i) => (
              <div className="field" key={i} style={{ marginBottom: 12 }}>
                <label className="label">
                  Option {String.fromCharCode(65 + i)}
                  {chosen === i && <span style={{ color: "var(--accent)" }}> · this is your choice</span>}
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    value={o}
                    onChange={(e) => {
                      const next = [...options];
                      next[i] = e.target.value;
                      setOptions(next);
                    }}
                    placeholder={
                      i === 0 ? "Stay where I am" : i === 1 ? "Take the offer" : "Another path…"
                    }
                  />
                  <button
                    className={"btn btn-sm" + (chosen === i ? " btn-primary" : "")}
                    onClick={() => setChosen(i)}
                    title="Mark as my choice"
                  >
                    {chosen === i ? "✓ mine" : "mine"}
                  </button>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 10 }}>
              {options.length < 4 && (
                <button className="btn btn-sm" onClick={() => setOptions([...options, ""])}>
                  + Add option
                </button>
              )}
              {options.length > 2 && (
                <button
                  className="btn btn-sm"
                  onClick={() => {
                    setOptions(options.slice(0, -1));
                    setChosen((c) => Math.min(c, options.length - 2));
                  }}
                >
                  Remove last
                </button>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="modal-title">Why did you choose it?</h2>
            <p className="modal-sub">
              This is the most valuable thing you'll write. Not the polished reason — the real one.
              What you were afraid of, what you gave up, what you told yourself at 3am.
            </p>
            <div className="field">
              <textarea
                rows={8}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Everyone told me to take it. But the money wasn't the point — I was scared that if I didn't go now I never would, and I'd spend the next decade wondering. I told myself I could always come back…"
              />
              <p className="hint">
                {reason.trim().length < 30
                  ? `${30 - reason.trim().length} more characters. Six months from now you'll be glad you wrote it down.`
                  : `${reason.length} characters.`}
              </p>
            </div>
            {myNodes.length > 0 && (
              <div className="field">
                <label className="label">Did this follow another decision? (optional)</label>
                <select value={prevNodeId} onChange={(e) => setPrevNodeId(e.target.value)}>
                  <option value="">No — this stands alone</option>
                  {myNodes.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.situation.slice(0, 60)}…
                    </option>
                  ))}
                </select>
                <p className="hint">
                  Linking them builds your chain — "this happened, so then I had to decide this."
                </p>
              </div>
            )}
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="modal-title">When should we bring you back?</h2>
            <p className="modal-sub">
              The choice is only half the story. The ending is the part nobody else has. We'll nudge
              you when it's time — you decide whether to write it.
            </p>
            <div className="field">
              <label className="label">Remind me in</label>
              <div className="tabs" style={{ marginBottom: 0, paddingBottom: 0 }}>
                {[1, 3, 6, 12, 24, 60].map((m) => (
                  <button
                    key={m}
                    className={"tab" + (reminderMonths === m ? " active" : "")}
                    onClick={() => setReminderMonths(m)}
                  >
                    {m < 12 ? `${m} month${m > 1 ? "s" : ""}` : `${m / 12} year${m > 12 ? "s" : ""}`}
                  </button>
                ))}
              </div>
              <p className="hint" style={{ marginTop: 12 }}>
                Most people pick 6 months. Pick whatever matches when you'll actually know something.
              </p>
            </div>

            <div className="ask-block" style={{ background: "var(--surface-2)" }}>
              <div className="ask-block-title">Preview</div>
              <div className="card-head" style={{ marginBottom: 10 }}>
                <Avatar handle={me.handle} size="sm" />
                <div className="meta">
                  <div className="handle">@{me.handle}</div>
                  <div className="sub">just now</div>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 10 }}>
                {situation.slice(0, 130)}
                {situation.length > 130 ? "…" : ""}
              </p>
              <div className="option-row chosen">
                <div className="option-badge">{String.fromCharCode(65 + chosen)}</div>
                <div className="option-label">{validOptions[chosen] || validOptions[0]}</div>
              </div>
              <p className="reason-text" style={{ fontSize: 13, marginTop: 10 }}>
                {reason.slice(0, 120)}…
              </p>
            </div>

            <button className="btn btn-primary btn-block" style={{ padding: 12 }} onClick={publish}>
              Publish my crossroads
            </button>
          </>
        )}

        <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
          {step > 1 ? (
            <button className="btn" style={{ flex: 1 }} onClick={() => setStep(step - 1)}>
              Back
            </button>
          ) : (
            <button className="btn" style={{ flex: 1 }} onClick={onClose}>
              Cancel
            </button>
          )}
          {step < 4 && (
            <button
              className="btn btn-primary"
              style={{ flex: 2 }}
              disabled={!canNext}
              onClick={() => setStep(step + 1)}
            >
              Continue
            </button>
          )}
        </div>
        <p className="hint" style={{ textAlign: "center", marginTop: 12 }}>
          Draft saved locally · Step {step} of 4
        </p>
      </div>
    </div>
  );
}