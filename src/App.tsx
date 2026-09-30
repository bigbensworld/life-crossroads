import { Routes, Route, useLocation, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStore } from "./store";
import { AuthGateProvider, useAuthGate } from "./ui/authGate";
import { Avatar } from "./ui/bits";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AskPage from "./pages/Ask";
import Following from "./pages/Following";
import Me from "./pages/Me";
import NodeDetail from "./pages/NodeDetail";
import ProfilePage from "./pages/Profile";
import Compose from "./pages/Compose";
import ReviewFlow from "./pages/Review";
import Settings from "./pages/Settings";

function Shell() {
  const me = useStore((s) => s.me);
  const signedIn = useStore((s) => s.signedIn);
  const notifs = useStore((s) => s.notifications);
  const nav = useNavigate();
  const loc = useLocation();
  const gate = useAuthGate();
  const [composeOpen, setComposeOpen] = useState(false);
  const unread = notifs.filter((n) => !n.read).length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand" onClick={() => nav("/")} style={{ cursor: "pointer" }}>
            <div className="brand-mark">⇄</div>
            <span className="full">Life Crossroads</span>
          </div>
          <nav className="nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/ask">Ask</NavLink>
            <NavLink to="/following">
              Following
              {unread > 0 && (
                <span
                  style={{
                    marginLeft: 5,
                    background: "var(--accent)",
                    color: "#06251a",
                    borderRadius: 9,
                    padding: "0 5px",
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  {unread}
                </span>
              )}
            </NavLink>
            <NavLink to="/me">Me</NavLink>
          </nav>
          <div className="topbar-right">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => gate(() => setComposeOpen(true), "publish")}
            >
              + Share a choice
            </button>
            {signedIn && (
              <div onClick={() => nav("/me")} style={{ cursor: "pointer" }}>
                <Avatar handle={me.handle} size="sm" />
              </div>
            )}
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/ask" element={<AskPage />} />
        <Route path="/following" element={<Following />} />
        <Route path="/me" element={<Me />} />
        <Route path="/n/:id" element={<NodeDetail />} />
        <Route path="/u/:handle" element={<ProfilePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/n/:id/review" element={<ReviewFlow />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {composeOpen && <Compose onClose={() => setComposeOpen(false)} />}

      <footer
        style={{
          borderTop: "1px solid var(--border-soft)",
          marginTop: 50,
          padding: "26px 16px 40px",
          textAlign: "center",
          fontSize: 12,
          color: "var(--text-3)",
          lineHeight: 1.8,
        }}
      >
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          Life Crossroads — an anonymous timeline of real decisions. Nothing here is professional
          advice.
          <br />
          Curated accounts draw on published biography. Everything else is written by anonymous
          people like you.
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <AuthGateProvider>
      <Shell />
    </AuthGateProvider>
  );
}