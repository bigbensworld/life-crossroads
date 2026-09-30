import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { useStore } from "../store";

const ACTIONS: Record<string, string> = {
  vote: "Vote on how others should choose",
  resonate: "Save what resonates",
  cheer: "Ask for the ending",
  comment: "Join the conversation",
  dissent: "Write a dissent",
  follow: "Follow this timeline",
  publish: "Publish your own choice",
  ask: "Ask the system about your situation",
  bookmark: "Add to your case collection",
};

type GateFn = (fn: () => void, action: string) => void;

const GateCtx = createContext<GateFn>(() => {});

export function useAuthGate() {
  return useContext(GateCtx);
}

const AVATAR_WORDS = [
  "wanderer", "drifter", "quiet", "salt", "iron", "midnight", "harbor",
  "lantern", "north", "paper", "ember", "tide", "ridge", "copper",
];
const NOUNS = ["kite", "fox", "stone", "river", "moth", "wolf", "crane", "ash", "pine", "fern"];

function suggestHandle() {
  const w = AVATAR_WORDS[Math.floor(Math.random() * AVATAR_WORDS.length)];
  const n = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const num = Math.floor(Math.random() * 90 + 10);
  return `${w}_${n}${num}`;
}

export function AuthGateProvider({ children }: { children: ReactNode }) {
  const signedIn = useStore((s) => s.signedIn);
  const ensureSignedIn = useStore((s) => s.ensureSignedIn);
  const setHandle = useStore((s) => s.setHandle);
  const [pending, setPending] = useState<{ fn: () => void; action: string } | null>(null);
  const [modal, setModal] = useState(false);
  const [handle, setHandleInput] = useState("");
  const [err, setErr] = useState("");

  const gate = useCallback<GateFn>(
    (fn, action) => {
      if (useStore.getState().signedIn) {
        fn();
        return;
      }
      setPending({ fn, action });
      setHandleInput(suggestHandle());
      setErr("");
      setModal(true);
    },
    []
  );

  const submit = () => {
    const h = handle.trim();
    if (h.length < 3) {
      setErr("At least 3 characters.");
      return;
    }
    if (!/^[a-z0-9_]+$/i.test(h)) {
      setErr("Letters, numbers and underscore only.");
      return;
    }
    setHandle(h);
    setModal(false);
    const fn = pending?.fn;
    setPending(null);
    if (fn) setTimeout(fn, 60);
  };

  return (
    <GateCtx.Provider value={gate}>
      {children}
      {modal && (
        <div className="overlay" onClick={() => setModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{ACTIONS[pending?.action ?? ""] ?? "Sign in to continue"}</h2>
            <p className="modal-sub">
              Life Crossroads is anonymous. Your real identity is never shown — pick an alias and
              start sharing. Your intent is saved; you'll pick up exactly where you left off.
            </p>

            <button
              className="btn btn-block"
              style={{ marginBottom: 14, padding: "11px" }}
              onClick={() => {
                const h = handle.trim() || suggestHandle();
                setHandle(h);
                setModal(false);
                const fn = pending?.fn;
                setPending(null);
                if (fn) setTimeout(fn, 60);
              }}
            >
              <GoogleMark /> Continue with Google
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                margin: "0 0 14px",
                fontSize: 12,
                color: "var(--text-3)",
              }}
            >
              <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
              opt-in alias
              <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
            </div>

            <label className="label">Your anonymous handle</label>
            <input
              value={handle}
              onChange={(e) => setHandleInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="e.g. quiet_harbor42"
              autoFocus
            />
            {err && <p className="hint" style={{ color: "var(--danger)" }}>{err}</p>}
            <p className="hint">
              You can change this later in Settings (once every 30 days). Browsing never requires an
              account.
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button className="btn" style={{ flex: 1 }} onClick={() => setModal(false)}>
                Keep browsing
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={submit}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </GateCtx.Provider>
  );
}

function GoogleMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

export { suggestHandle };