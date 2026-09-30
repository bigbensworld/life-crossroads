import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useStore, isResolved, THEME_LABELS } from "../store";
import { Avatar, Stars, ThemePill, SourcePill, timeAgo } from "../ui/bits";
import { useAuthGate } from "../ui/authGate";
import { voteCounts } from "../ui/NodeCard";

export default function NodeDetail() {
  const { id = "" } = useParams();
  const nav = useNavigate();
  const gate = useAuthGate();
  const node = useStore((s) => s.nodes.find((n) => n.id === id));
  const me = useStore((s) => s.me);
  const signedIn = useStore((s) => s.signedIn);
  const toggleResonance = useStore((s) => s.toggleResonance);
  const toggleCheer = useStore((s) => s.toggleCheer);
  const toggleBookmark = useStore((s) => s.toggleBookmark);
  const toggleFollow = useStore((s) => s.toggleFollow);
  const vote = useStore((s) => s.vote);
  const likeDissent = useStore((s) => s.likeDissent);
  const addDissent = useStore((s) => s.addDissent);
  const likeComment = useStore((s) => s.likeComment);
  const addComment = useStore((s) => s.addComment);
  const bookmarks = useStore((s) => s.bookmarks);
  const allNodes = useStore((s) => s.nodes);

  const [votedId, setVotedId] = useState<string | null>(null);
  const [dissentText, setDissentText] = useState("");
  const [dissentOpen, setDissentOpen] = useState(false);
  const [commentText, setCommentText] = useState("");

  if (!node)
    return (
      <div className="wrap">
        <div className="empty">
          This card doesn't exist.
          <br />
          <Link to="/" style={{ color: "var(--accent)" }}>
            Back home
          </Link>
        </div>
      </div>
    );

  const resolved = isResolved(node);
  const mine = node.handle === me.handle;
  const following = me.following.includes(node.handle);
  const { counts, total } = voteCounts(node);
  const sortedDissents = [...node.dissents].sort((a, b) => b.likes - a.likes);
  const topDissentId = sortedDissents[0]?.id;
  const prev = node.prevNodeId ? allNodes.find((n) => n.id === node.prevNodeId) : null;
  const followUpNodes = node.followUps
    .map((fid) => allNodes.find((n) => n.id === fid))
    .filter(Boolean);

  return (
    <div className="wrap fade-in" style={{ paddingTop: 22 }}>
      <button className="btn btn-ghost btn-sm" onClick={() => nav(-1)} style={{ marginBottom: 14 }}>
        ← Back
      </button>

      <div className="card-head" style={{ marginBottom: 16 }}>
        <Avatar handle={node.handle} />
        <div className="meta">
          <Link to={`/u/${node.handle}`} className="handle">
            @{node.handle}
            {mine && <span className="sub"> · you</span>}
          </Link>
          <div className="sub">
            {node.structured.ageBand} · {node.structured.citySize} ·{" "}
            {node.structured.occupation}
          </div>
        </div>
        <SourcePill source={node.source} />
        {!mine && (
          <button
            className={"btn btn-sm" + (following ? "" : " btn-primary")}
            onClick={() => gate(() => toggleFollow(node.handle), "follow")}
          >
            {following ? "Following" : "Follow"}
          </button>
        )}
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
        <ThemePill theme={node.theme} />
        {node.historyAt && (
          <span className="pill">{new Date(node.historyAt).getFullYear()}</span>
        )}
        <span className="pill">{timeAgo(node.createdAt)}</span>
        {resolved ? (
          <span className="pill pill-accent">resolved</span>
        ) : (
          <span className="pill pill-amber">waiting for an ending</span>
        )}
      </div>

      <div className="section-title">The situation</div>
      <p className="situation" style={{ fontSize: 17 }}>
        {node.situation}
      </p>

      <div className="section-title">The options on the table</div>
      {node.options.map((o, i) => (
        <div
          key={o.id}
          className={"option-row" + (o.id === node.chosenOptionId ? " chosen" : "")}
        >
          <div className="option-badge">{String.fromCharCode(65 + i)}</div>
          <div className="option-label">{o.label}</div>
          {o.id === node.chosenOptionId && <div className="chosen-tag">their choice</div>}
        </div>
      ))}

      {node.crowdNote && (
        <p className="hint" style={{ marginTop: 12, fontSize: 13 }}>
          At the time: {node.crowdNote}
        </p>
      )}

      <div className="section-title">Why they chose it</div>
      <p className="reason-full" style={{ marginBottom: 4 }}>
        {node.reason}
      </p>

      {resolved ? (
        <>
          <div className="section-title">How it turned out</div>
          {node.reviews.map((r) => (
            <div className="ending" key={r.id}>
              <div className="ending-head">
                <span className="ending-label">{r.label ?? "later"}</span>
                <Stars value={r.regret} />
              </div>
              <p className="ending-result">{r.result}</p>
              {r.lesson && <p className="ending-lesson">{r.lesson}</p>}
            </div>
          ))}
          <p className="hint" style={{ marginTop: -4, marginBottom: 18 }}>
            {5 - Math.round(node.reviews.reduce((a, b) => a + b.regret, 0) / node.reviews.length)}{" "}
            of 5 on the regret scale — roughly{" "}
            {Math.round(
              ((5 - node.reviews.reduce((a, b) => a + b.regret, 0) / node.reviews.length) / 5) * 100
            )}
            % "would do it again".
          </p>
        </>
      ) : (
        <div className="open-slot" style={{ marginTop: 22 }}>
          The ending isn't written yet.
          <div className="hint" style={{ marginTop: 4 }}>
            {node.cheers} people are waiting for it.
          </div>
        </div>
      )}

      <div className="section-title">What would you have chosen?</div>
      <div className="vote-block">
        <div className="vote-title">
          <span>{total} anonymous votes</span>
          {mine && <span className="sub">you can't vote on your own</span>}
        </div>
        {counts.map(({ option, count }) => {
          const pct = total ? Math.round((count / total) * 100) : 0;
          const picked = votedId === option.id;
          return (
            <div key={option.id} className={"vote-bar-row" + (picked ? " picked" : "")}>
              <div className="vote-bar-label">
                <span className="lbl">{option.label}</span>
                <span className="pct">
                  {pct}% · {count}
                </span>
              </div>
              <div className="vote-track">
                <div className="vote-fill" style={{ width: `${pct}%` }} />
              </div>
              {!mine && !votedId && (
                <button
                  className="vote-btn"
                  onClick={() => gate(() => { vote(node.id, option.id); setVotedId(option.id); }, "vote")}
                >
                  I'd choose this
                </button>
              )}
              {picked && <div className="vote-btn" style={{ color: "var(--accent)" }}>your pick</div>}
            </div>
          );
        })}
      </div>

      <div className="interbar" style={{ borderTop: "none", marginTop: 0, paddingTop: 0 }}>
        <button
          className={"ibtn" + (node.resonatedByMe ? " on" : "")}
          onClick={() => gate(() => toggleResonance(node.id), "resonate")}
        >
          ♥ {node.resonances} resonated
        </button>
        <button
          className={"ibtn" + (bookmarks.includes(node.id) ? " on-purple" : "")}
          onClick={() => gate(() => toggleBookmark(node.id), "bookmark")}
        >
          ⌘ {bookmarks.includes(node.id) ? "in your case collection" : "save to case collection"}
        </button>
        {!resolved && (
          <button
            className={"ibtn" + (node.cheeredByMe ? " on-purple" : "")}
            onClick={() => gate(() => toggleCheer(node.id), "cheer")}
          >
            ⏳ {node.cheers} waiting for the ending
          </button>
        )}
        {mine && !resolved && (
          <button
            className="ibtn"
            style={{ color: "var(--accent)" }}
            onClick={() => nav(`/n/${node.id}/review`)}
          >
            → write the ending
          </button>
        )}
      </div>

      <div className="section-title">
        Dissents — disagreement, but you have to say why
      </div>
      {mine && !resolved && (
        <p className="hint" style={{ marginTop: -6, marginBottom: 14 }}>
          People can push back here. When you write your ending, the strongest dissent will sit
          right next to it — and ask what you were thinking at the time.
        </p>
      )}
      {sortedDissents.length === 0 && (
        <div className="empty" style={{ padding: "26px 20px" }}>
          No dissents yet. {resolved ? "" : "Be the first to push back — with an argument."}
        </div>
      )}
      {sortedDissents.map((d) => (
        <div key={d.id} className={"dissent" + (d.id === topDissentId ? " top" : "")}>
          <div className="dissent-head">
            <Avatar handle={d.authorHandle} size="sm" />
            <span className="handle" style={{ fontSize: 13 }}>
              @{d.authorHandle}
            </span>
            {d.id === topDissentId && <span className="top-badge">most agreed</span>}
            <span style={{ flex: 1 }} />
            <span className="sub">{timeAgo(d.at)}</span>
          </div>
          <p className="dissent-body">{d.reason}</p>
          <div className="dissent-foot">
            <button
              className={"ibtn" + (d.likedByMe ? " on" : "")}
              style={{ padding: "2px 6px" }}
              onClick={() => gate(() => likeDissent(node.id, d.id), "dissent")}
            >
              ▲ {d.likes} agree
            </button>
          </div>
        </div>
      ))}

      {!mine && (
        <div style={{ marginTop: 14 }}>
          {!dissentOpen ? (
            <button className="btn btn-block" onClick={() => gate(() => setDissentOpen(true), "dissent")}>
              I disagree with this choice
            </button>
          ) : (
            <div className="card" style={{ margin: 0 }}>
              <label className="label">
                Your dissent <span className="req">*</span>
              </label>
              <textarea
                rows={4}
                value={dissentText}
                onChange={(e) => setDissentText(e.target.value)}
                placeholder="Say why this was the wrong call. Point at what they missed — not at them."
              />
              <p className="hint">
                {dissentText.trim().length < 20
                  ? `${20 - dissentText.trim().length} more characters needed`
                  : `${dissentText.length} characters — good.`}{" "}
                Reasons with an argument get ranked to the top; one-word objections don't.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                <button className="btn" style={{ flex: 1 }} onClick={() => setDissentOpen(false)}>
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  disabled={dissentText.trim().length < 20}
                  onClick={() => {
                    addDissent(node.id, dissentText.trim());
                    setDissentText("");
                    setDissentOpen(false);
                  }}
                >
                  Post dissent
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="section-title">{node.comments.length} comments</div>
      {signedIn ? (
        <div style={{ marginBottom: 16 }}>
          <textarea
            rows={3}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value.slice(0, 200))}
            placeholder="Add something useful — a similar experience, a caveat, a question."
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <span className="hint">{commentText.length}/200</span>
            <button
              className="btn btn-primary btn-sm"
              disabled={!commentText.trim()}
              onClick={() => {
                addComment(node.id, commentText.trim());
                setCommentText("");
              }}
            >
              Comment
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-block"
          style={{ marginBottom: 16 }}
          onClick={() => gate(() => {}, "comment")}
        >
          Sign in to comment
        </button>
      )}
      {node.comments.map((c) => (
        <div className="comment" key={c.id}>
          <Avatar handle={c.authorHandle} size="sm" />
          <div className="comment-body">
            <div className="comment-meta">
              @{c.authorHandle} · {timeAgo(c.at)}
            </div>
            <p className="comment-text">{c.text}</p>
            <button
              className={"ibtn" + (c.likedByMe ? " on" : "")}
              style={{ padding: "2px 6px" }}
              onClick={() => gate(() => likeComment(node.id, c.id), "comment")}
            >
              ♥ {c.likes}
            </button>
          </div>
        </div>
      ))}

      {(prev || followUpNodes.length > 0) && (
        <>
          <div className="section-title">The chain of decisions</div>
          {prev && (
            <div className="connector">
              ↑ came after:{" "}
              <Link to={`/n/${prev.id}`} style={{ color: "var(--accent)" }}>
                {prev.situation.slice(0, 70)}…
              </Link>
            </div>
          )}
          {followUpNodes.map((f) => (
            <div className="connector" key={f!.id}>
              ↓ led to:{" "}
              <Link to={`/n/${f!.id}`} style={{ color: "var(--accent)" }}>
                {f!.situation.slice(0, 70)}…
              </Link>
            </div>
          ))}
        </>
      )}

      {node.bioSource && (
        <p className="disclaimer" style={{ marginTop: 28 }}>
          <strong style={{ color: "var(--text-2)" }}>Source:</strong> {node.bioSource}
          {node.celebrityName ? ` · drawn from the life of ${node.celebrityName}` : ""}
          <br />
          Curated for the cold start. Handles are fictional; the decisions are real.
        </p>
      )}
    </div>
  );
}