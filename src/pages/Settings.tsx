import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { Avatar } from "../ui/bits";
import { suggestHandle } from "../ui/authGate";

export default function Settings() {
  const nav = useNavigate();
  const me = useStore((s) => s.me);
  const setHandle = useStore((s) => s.setHandle);
  const reset = useStore((s) => s.reset);
  const nodes = useStore((s) => s.nodes);
  const profiles = useStore((s) => s.profiles);
  const bookmarks = useStore((s) => s.bookmarks);
  const asks = useStore((s) => s.asks);

  const [newHandle, setNewHandle] = useState(me.handle);
  const [msg, setMsg] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const save = () => {
    const h = newHandle.trim();
    if (h.length < 3 || !/^[a-z0-9_]+$/i.test(h)) {
      setMsg("Handles need 3+ characters: letters, numbers, underscore.");
      return;
    }
    setHandle(h);
    setMsg("Handle updated. Your old handle stays reachable for 30 days.");
  };

  const exportData = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      profile: me,
      crossroads: nodes.filter((n) => n.handle === me.handle),
      bookmarks,
      askHistory: asks,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `life-crossroads-${me.handle}-export.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!me.handle)
    return (
      <div className="wrap">
        <div className="empty">
          You're not signed in.
          <br />
          <button className="btn btn-ghost btn-sm" onClick={() => nav("/me")} style={{ marginTop: 12 }}>
            Go sign in
          </button>
        </div>
      </div>
    );

  const myNodes = nodes.filter((n) => n.handle === me.handle);

  return (
    <div className="wrap fade-in" style={{ paddingTop: 22 }}>
      <button className="btn btn-ghost btn-sm" onClick={() => nav("/me")} style={{ marginBottom: 14 }}>
        ← Back to my timeline
      </button>
      <h1 className="page-title">Settings</h1>
      <p className="page-sub">
        Anonymous by design. What we hold is your alias, your words, and a hashed sign-in — nothing
        that points back at you.
      </p>

      <div className="ask-block">
        <div className="ask-block-title">Your identity</div>
        <div className="card-head" style={{ marginBottom: 16 }}>
          <Avatar handle={me.handle} size="lg" />
          <div className="meta">
            <div className="handle">@{me.handle}</div>
            <div className="sub">
              {myNodes.length} crossroads posted · following {me.following.length}
            </div>
          </div>
        </div>

        <label className="label">Change your handle</label>
        <div style={{ display: "flex", gap: 8 }}>
          <input value={newHandle} onChange={(e) => setNewHandle(e.target.value)} />
          <button className="btn" onClick={() => setNewHandle(suggestHandle())}>
            Random
          </button>
          <button className="btn btn-primary" onClick={save} disabled={newHandle === me.handle}>
            Save
          </button>
        </div>
        <p className="hint">
          Once every 30 days. Old links keep working for 30 days after a change, so the people
          following you won't lose you.
        </p>
        {msg && <p className="hint" style={{ color: "var(--accent)" }}>{msg}</p>}
      </div>

      <div className="ask-block">
        <div className="ask-block-title">Notifications</div>
        {[
          ["An ending lands on someone you follow", true],
          ["Someone asks for the ending to your open choice", true],
          ["It's time to write your own ending", true],
          ["Someone dissents on your choice", true],
          ["New comments on your cards", false],
        ].map(([label, on]) => (
          <div
            key={label as string}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "11px 0",
              borderBottom: "1px solid var(--border-soft)",
            }}
          >
            <span style={{ fontSize: 14, color: "var(--text-2)" }}>{label as string}</span>
            <span
              className="pill"
              style={
                on
                  ? { background: "var(--accent-soft)", color: "var(--accent)", borderColor: "transparent" }
                  : undefined
              }
            >
              {on ? "on" : "off"}
            </span>
          </div>
        ))}
        <p className="hint" style={{ marginTop: 12 }}>
          Delivered in-app and by browser push. We never email you — we don't have your email.
        </p>
      </div>

      <div className="ask-block">
        <div className="ask-block-title">Your data</div>
        <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65, marginTop: 0 }}>
          Under GDPR and CCPA you can take everything with you or have it erased. No questions, no
          retention period, no "contact support".
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          <button className="btn" onClick={exportData}>
            Export everything (JSON)
          </button>
          <button
            className="btn"
            style={{ color: "var(--danger)", borderColor: "rgba(217,83,79,0.4)" }}
            onClick={() => setConfirmDelete(true)}
          >
            Delete my account
          </button>
        </div>
        <p className="hint" style={{ marginTop: 12 }}>
          Currently holding: {myNodes.length} crossroads, {Object.keys(profiles).length} profile
          records, {bookmarks.length} saved cards, {asks.length} questions. Export works anytime — try
          it, it's your data.
        </p>
      </div>

      {confirmDelete && (
        <div className="overlay" onClick={() => setConfirmDelete(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Delete everything?</h2>
            <p className="modal-sub">
              Your {myNodes.length} crossroads, every ending, every dissent you wrote, and every
              comment will be gone. Cards you already interacted with stay in the library but become
              fully anonymous. This cannot be undone.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn" style={{ flex: 1 }} onClick={() => setConfirmDelete(false)}>
                Keep my account
              </button>
              <button
                className="btn"
                style={{ flex: 1, color: "var(--danger)", borderColor: "rgba(217,83,79,0.4)" }}
                onClick={() => {
                  reset();
                  nav("/");
                }}
              >
                Delete permanently
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="disclaimer">
        Life Crossroads is not a professional advice service. If a decision involves health, law, or
        safety, please also talk to a qualified person. In the US you can call or text 988; in the UK,
        Samaritans at 116 123.
      </p>
    </div>
  );
}