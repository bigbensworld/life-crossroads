import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import NodeCard from "../ui/NodeCard";
import { Avatar, timeAgo } from "../ui/bits";

type Tab = "feed" | "notifications";

export default function Following() {
  const nav = useNavigate();
  const me = useStore((s) => s.me);
  const nodes = useStore((s) => s.nodes);
  const notifs = useStore((s) => s.notifications);
  const markAllRead = useStore((s) => s.markAllRead);
  const [tab, setTab] = useState<Tab>("feed");

  const feed = nodes
    .filter((n) => me.following.includes(n.handle))
    .sort((a, b) => b.createdAt - a.createdAt);

  const nodeIds = new Set(nodes.map((n) => n.id));
  const unread = notifs.filter((n) => !n.read).length;

  return (
    <div className="wrap fade-in">
      <div className="tabs" style={{ marginTop: 22 }}>
        <button className={"tab" + (tab === "feed" ? " active" : "")} onClick={() => setTab("feed")}>
          Feed ({feed.length})
        </button>
        <button
          className={"tab" + (tab === "notifications" ? " active" : "")}
          onClick={() => setTab("notifications")}
        >
          Notifications {unread > 0 ? `(${unread})` : ""}
        </button>
      </div>

      {tab === "feed" && (
        <>
          {feed.length === 0 ? (
            <div className="empty">
              You're not following anyone yet.
              <br />
              When you find someone whose crossroads look like yours, tap Follow — you'll be told the
              moment their ending lands.
              <br />
              <br />
              <button className="btn btn-primary" onClick={() => nav("/explore")}>
                Find people to follow
              </button>
            </div>
          ) : (
            <>
              <p className="page-sub">
                The moment anyone you follow writes an ending or faces a new crossroads, it shows up
                here. This is the whole reason to come back.
              </p>
              {feed.map((n) => (
                <NodeCard key={n.id} node={n} />
              ))}
            </>
          )}
        </>
      )}

      {tab === "notifications" && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <p className="page-sub" style={{ margin: 0 }}>
              Five kinds of nudge — and nothing else. No spam, no digests.
            </p>
            {unread > 0 && (
              <button className="btn btn-ghost btn-sm" onClick={markAllRead}>
                Mark all read
              </button>
            )}
          </div>
          {notifs.map((n) => {
            const icons: Record<string, [string, string]> = {
              ending: ["✓", "var(--accent-soft)"],
              follow: ["＋", "var(--purple-soft)"],
              cheer: ["⏳", "var(--amber-soft)"],
              comment: ["💬", "var(--surface-2)"],
              dissent: ["▲", "rgba(217,83,79,0.15)"],
            };
            const [ic, bg] = icons[n.kind] ?? ["•", "var(--surface-2)"];
            const reachable = n.nodeId && nodeIds.has(n.nodeId);
            return (
              <div
                className={"notif" + (n.read ? "" : " unread")}
                key={n.id}
                style={{ cursor: reachable ? "pointer" : "default" }}
                onClick={() => reachable && nav(`/n/${n.nodeId}`)}
              >
                <div className="notif-icon" style={{ background: bg }}>
                  {ic}
                </div>
                <div style={{ flex: 1 }}>
                  <p className="notif-text">{n.text}</p>
                  <div className="sub">{timeAgo(n.at)}</div>
                </div>
                {!n.read && (
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      marginTop: 9,
                    }}
                  />
                )}
              </div>
            );
          })}
          {notifs.length === 0 && <div className="empty">Nothing yet.</div>}
        </>
      )}

      {tab === "feed" && me.following.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <div className="section-title">People you follow ({me.following.length})</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {me.following.map((h) => (
              <button
                key={h}
                className="btn btn-sm"
                onClick={() => nav(`/u/${h}`)}
                style={{ display: "flex", gap: 7, alignItems: "center" }}
              >
                <Avatar handle={h} size="sm" />@{h}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}