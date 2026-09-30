import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useStore } from "../store";
import { Avatar, Stars } from "../ui/bits";
import { voteCounts } from "../ui/NodeCard";

export default function ReviewFlow() {
  const { id = "" } = useParams();
  const nav = useNavigate();
  const node = useStore((s) => s.nodes.find((n) => n.id === id));
  const addReview = useStore((s) => s.addReview);
  const [act, setAct] = useState(1);
  const [result, setResult] = useState("");
  const [regret, setRegret] = useState(0);
  const [lesson, setLesson] = useState("");
  const [dissentNote, setDissentNote] = useState("");

  if (!node)
    return (
      <div className="wrap">
        <div className="empty">Not found.</div>
      </div>
    );

  const { counts, total } = voteCounts(node);
  const sortedDissents = [...node.dissents].sort((a, b) => b.likes - a.likes);
  const top = sortedDissents[0];
  const majority = counts.reduce((a, b) => (b.count > a.count ? b : a), counts[0]);
  const majorityPct = total ? Math.round((majority.count / total) * 100) : 0;
  const theyAgreedWithYou = majority.option.id === node.chosenOptionId;

  const finish = () => {
    addReview(node.id, {
      result: result.trim(),
      regret,
      lesson: lesson.trim(),
      label: "later",
    });
    nav(`/n/${node.id}`);
  };

  return (
    <div className="wrap fade-in" style={{ paddingTop: 24 }}>
      <div className="step-dots">
        {[1, 2, 3].map((s) => (
          <div key={s} className={"step-dot" + (s <= act ? " done" : "")} />
        ))}
      </div>
      <p className="sub" style={{ marginBottom: 20 }}>
        Act {act} of 3 · writing the ending
      </p>

      {act === 1 && (
        <>
          <h1 className="page-title">Let's go back to that moment.</h1>
          <p className="page-sub">
            Here's what you wrote. Read it as the person you were then.
          </p>

          <div className="card">
            <p className="situation">{node.situation}</p>
            {node.options.map((o, i) => (
              <div
                key={o.id}
                className={"option-row" + (o.id === node.chosenOptionId ? " chosen" : "")}
              >
                <div className="option-badge">{String.fromCharCode(65 + i)}</div>
                <div className="option-label">{o.label}</div>
              </div>
            ))}
            <div className="section-title" style={{ marginTop: 18 }}>
              Why you chose it
            </div>
            <p className="reason-full" style={{ fontSize: 15 }}>
              {node.reason}
            </p>
          </div>

          <div className="ask-block" style={{ background: "var(--surface-2)" }}>
            <div className="ask-block-title">What the crowd thought</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              {total} people voted on your choice.{" "}
              {theyAgreedWithYou ? (
                <>
                  <strong style={{ color: "var(--accent)" }}>{majorityPct}%</strong> picked the same
                  path you did.
                </>
              ) : (
                <>
                  <strong style={{ color: "var(--amber)" }}>{majorityPct}%</strong> would have gone
                  the other way — they thought you should choose "
                  {majority.option.label}".
                </>
              )}
            </p>
          </div>

          <p className="hint" style={{ marginBottom: 18 }}>
            {node.cheers} people asked to be told how this turned out.
          </p>
          <button className="btn btn-primary btn-block" style={{ padding: 12 }} onClick={() => setAct(2)}>
            I remember. Next →
          </button>
        </>
      )}

      {act === 2 && (
        <>
          <h1 className="page-title">Someone pushed back.</h1>
          <p className="page-sub">
            When you published this, one dissent got the most agreement. Here it is again — now that
            you know how it went.
          </p>

          {top ? (
            <div className="dissent top" style={{ marginBottom: 18 }}>
              <div className="dissent-head">
                <Avatar handle={top.authorHandle} size="sm" />
                <span className="handle" style={{ fontSize: 13 }}>
                  @{top.authorHandle}
                </span>
                <span style={{ flex: 1 }} />
                <span className="top-badge">{top.likes} agreed</span>
              </div>
              <p className="dissent-body">{top.reason}</p>
            </div>
          ) : (
            <div className="empty">Nobody dissented on this one.</div>
          )}

          <div className="field">
            <label className="label">
              Looking back — were they right, partly right, or wrong? (optional)
            </label>
            <textarea
              rows={4}
              value={dissentNote}
              onChange={(e) => setDissentNote(e.target.value)}
              placeholder="They had a point about the money. But I'd make the same call again because…"
            />
            <p className="hint">
              This will sit next to your ending. The strongest content on this site is a person
              facing the argument they ignored — and answering it.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn" style={{ flex: 1 }} onClick={() => setAct(1)}>
              Back
            </button>
            <button
              className="btn btn-primary"
              style={{ flex: 2 }}
              onClick={() => {
                if (dissentNote.trim()) {
                  setLesson(dissentNote.trim());
                }
                setAct(3);
              }}
            >
              Next →
            </button>
          </div>
        </>
      )}

      {act === 3 && (
        <>
          <h1 className="page-title">Now the part only you know.</h1>
          <p className="page-sub">
            Three sentences is enough. Be honest — this is what makes the whole thing worth reading,
            and it's what someone in the same spot will actually use.
          </p>

          <div className="field">
            <label className="label">
              How did it actually turn out? <span className="req">*</span>
            </label>
            <textarea
              rows={5}
              value={result}
              onChange={(e) => setResult(e.target.value)}
              placeholder="Two years in: the money was worse than promised, but I've never been this good at anything. We moved twice. I don't regret it, though I'd tell my past self to negotiate harder."
            />
            <p className="hint">
              {result.trim().length < 30
                ? `${30 - result.trim().length} more characters.`
                : `${result.length} characters.`}
            </p>
          </div>

          <div className="field">
            <label className="label">
              If you could do it over, would you? <span className="req">*</span>
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setRegret(n)}
                    style={{
                      fontSize: 26,
                      color: n <= regret ? "var(--amber)" : "var(--border)",
                      padding: 0,
                      lineHeight: 1,
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>
              <span className="sub">
                {regret === 0
                  ? "pick a rating"
                  : regret <= 2
                  ? "would do it again"
                  : regret === 3
                  ? "mixed feelings"
                  : "would not do it again"}
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">One line you'd tell the next person (optional)</label>
            <input
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
              placeholder="e.g. Take the leap, but negotiate the safety net first."
            />
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn" style={{ flex: 1 }} onClick={() => setAct(2)}>
              Back
            </button>
            <button
              className="btn btn-primary"
              style={{ flex: 2 }}
              disabled={result.trim().length < 30 || regret === 0}
              onClick={finish}
            >
              Publish the ending
            </button>
          </div>
        </>
      )}

      <p className="hint" style={{ textAlign: "center", marginTop: 16 }}>
        <Link to={`/n/${node.id}`} style={{ color: "var(--text-3)" }}>
          Leave without writing it
        </Link>
      </p>
    </div>
  );
}