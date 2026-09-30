import { useParams, useNavigate } from "react-router-dom";
import { useStore, isResolved } from "../store";
import NodeCard from "../ui/NodeCard";
import { Avatar } from "../ui/bits";
import { useAuthGate } from "../ui/authGate";

export default function ProfilePage() {
  const { handle = "" } = useParams();
  const nav = useNavigate();
  const gate = useAuthGate();
  const me = useStore((s) => s.me);
  const signedIn = useStore((s) => s.signedIn);
  const nodes = useStore((s) => s.nodes);
  const profiles = useStore((s) => s.profiles);
  const toggleFollow = useStore((s) => s.toggleFollow);

  const profile = profiles[handle];
  const theirNodes = nodes
    .filter((n) => n.handle === handle)
    .sort((a, b) => b.createdAt - a.createdAt);

  if (theirNodes.length === 0)
    return (
      <div className="wrap">
        <div className="empty">
          @{handle} hasn't shared anything yet.
          <br />
          <button className="btn btn-ghost btn-sm" onClick={() => nav(-1)} style={{ marginTop: 12 }}>
            ← Back
          </button>
        </div>
      </div>
    );

  const isMine = handle === me.handle;
  const following = me.following.includes(handle);
  const resolvedCount = theirNodes.filter(isResolved).length;

  return (
    <div className="wrap fade-in" style={{ paddingTop: 22 }}>
      <div className="card-head" style={{ marginBottom: 18 }}>
        <Avatar handle={handle} size="lg" />
        <div className="meta">
          <div style={{ fontSize: 19, fontWeight: 500 }}>@{handle}</div>
          <div className="sub">
            {theirNodes.length} crossroads · {resolvedCount} ending
            {resolvedCount === 1 ? "" : "s"}
            {profile?.joinedAt ? ` · here since ${new Date(profile.joinedAt).getFullYear()}` : ""}
          </div>
        </div>
        {!isMine && (
          <button
            className={"btn btn-sm" + (following ? "" : " btn-primary")}
            onClick={() => gate(() => toggleFollow(handle), "follow")}
          >
            {following ? "Following" : "Follow"}
          </button>
        )}
        {isMine && (
          <button className="btn btn-sm" onClick={() => nav("/me")}>
            My timeline
          </button>
        )}
      </div>

      <p className="page-sub">
        Every card below is a fork in their road. Follow to be told when an ending is written.
      </p>

      <div className="spine">
        {theirNodes.map((n) => (
          <div className="spine-item" key={n.id}>
            <div className={"spine-dot" + (isResolved(n) ? " resolved" : "")}>
              <div className="spine-dot-in" />
            </div>
            <NodeCard node={n} />
          </div>
        ))}
      </div>

      {!signedIn && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button className="btn btn-primary" onClick={() => gate(() => {}, "follow")}>
            Sign in to follow @{handle}
          </button>
        </div>
      )}
    </div>
  );
}