import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, isResolved, THEME_LABELS } from "../store";
import type { Theme } from "../types";
import NodeCard from "../ui/NodeCard";
import { Avatar } from "../ui/bits";
import { useAuthGate } from "../ui/authGate";

const themeKeys = Object.keys(THEME_LABELS) as Theme[];

export default function Me() {
  const nav = useNavigate();
  const gate = useAuthGate();
  const signedIn = useStore((s) => s.signedIn);
  const me = useStore((s) => s.me);
  const nodes = useStore((s) => s.nodes);
  const bookmarks = useStore((s) => s.bookmarks);
  const [axis, setAxis] = useState<Theme | "all">("all");

  if (!signedIn)
    return (
      <div className="wrap fade-in">
        <div className="empty" style={{ paddingTop: 80 }}>
          <div style={{ fontSize: 15, color: "var(--text-2)", marginBottom: 16 }}>
            Your timeline lives here — every crossroads you've posted, and every ending you've come
            back to write.
          </div>
          <button className="btn btn-primary" onClick={() => gate(() => {}, "publish")}>
            Sign in anonymously
          </button>
          <p className="hint" style={{ marginTop: 12 }}>
            Takes one tap. You get an alias; we never show who you are.
          </p>
        </div>
      </div>
    );

  const mine = nodes.filter((n) => n.handle === me.handle).sort((a, b) => b.createdAt - a.createdAt);
  const filtered = axis === "all" ? mine : mine.filter((n) => n.theme === axis);
  const resolvedCount = mine.filter(isResolved).length;
  const openCount = mine.length - resolvedCount;
  const saved = nodes.filter((n) => bookmarks.includes(n.id));

  const usedThemes = [...new Set(mine.map((n) => n.theme))];

  return (
    <div className="wrap fade-in" style={{ paddingTop: 22 }}>
      <div className="card-head" style={{ marginBottom: 18 }}>
        <Avatar handle={me.handle} size="lg" />
        <div className="meta">
          <div style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.01em" }}>
            @{me.handle}
          </div>
          <div className="sub">
            {mine.length} crossroads · {resolvedCount} with an ending · following {me.following.length}
          </div>
        </div>
        <button className="btn btn-sm" onClick={() => nav("/settings")}>
          Settings
        </button>
      </div>

      {mine.length === 0 ? (
        <div className="empty">
          <div style={{ marginBottom: 14, color: "var(--text-2)" }}>
            Your first entry starts with the thing you're actually chewing on right now.
          </div>
          <button className="btn btn-primary" onClick={() => gate(() => {}, "publish")}>
            Start your first crossroads
          </button>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {[
              [String(openCount), "waiting for an ending"],
              [String(resolvedCount), "endings written"],
              [
                String(
                  mine.reduce((a, n) => a + n.reviews.reduce((x, r) => x + r.regret, 0), 0)
                ),
                "total regret points",
              ],
            ].map(([v, l]) => (
              <div className="card" key={l} style={{ margin: 0, padding: 14 }}>
                <div style={{ fontSize: 22, fontWeight: 500 }}>{v}</div>
                <div className="sub">{l}</div>
              </div>
            ))}
          </div>

          {usedThemes.length > 1 && (
            <div className="tabs">
              <button
                className={"tab" + (axis === "all" ? " active" : "")}
                onClick={() => setAxis("all")}
              >
                All
              </button>
              {usedThemes.map((t) => (
                <button
                  key={t}
                  className={"tab" + (axis === t ? " active" : "")}
                  onClick={() => setAxis(t)}
                >
                  {THEME_LABELS[t]}
                </button>
              ))}
            </div>
          )}

          <div className="spine">
            {filtered.map((n) => (
              <div className="spine-item" key={n.id}>
                <div className={"spine-dot" + (isResolved(n) ? " resolved" : "")}>
                  <div className="spine-dot-in" />
                </div>
                <NodeCard node={n} />
              </div>
            ))}
          </div>

          <div className="open-slot" style={{ marginTop: 6 }}>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => gate(() => {}, "publish")}
            >
              + Add the next chapter
            </button>
            <div className="hint" style={{ marginTop: 8 }}>
              If a new crossroads came out of an old choice, link them — that's what makes a timeline
              a story.
            </div>
          </div>
        </>
      )}

      {saved.length > 0 && (
        <>
          <div className="section-title" style={{ marginTop: 40 }}>
            Your case collection ({saved.length})
          </div>
          <p className="hint" style={{ marginTop: -6, marginBottom: 14 }}>
            Cards you saved. They also feed the system when you ask about your own situation.
          </p>
          {saved.map((n) => (
            <NodeCard key={n.id} node={n} compact />
          ))}
        </>
      )}
    </div>
  );
}