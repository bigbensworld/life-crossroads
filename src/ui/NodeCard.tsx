import { useNavigate } from "react-router-dom";
import type { Node } from "../types";
import { useStore } from "../store";
import { Avatar, ThemePill, SourcePill, timeAgo } from "./bits";
import { useAuthGate } from "../ui/authGate";
import { useState } from "react";

interface Props {
  node: Node;
  compact?: boolean;
}

export function voteCounts(node: Node) {
  const counts = node.options.map((o) => ({
    option: o,
    count: node.votes.filter((v) => v.optionId === o.id).length,
  }));
  const total = counts.reduce((a, b) => a + b.count, 0);
  return { counts, total };
}

export default function NodeCard({ node, compact }: Props) {
  const nav = useNavigate();
  const me = useStore((s) => s.me);
  const toggleResonance = useStore((s) => s.toggleResonance);
  const toggleCheer = useStore((s) => s.toggleCheer);
  const vote = useStore((s) => s.vote);
  const gate = useAuthGate();
  const [votedId, setVotedId] = useState<string | null>(null);

  const { counts, total } = voteCounts(node);
  const resolved = node.reviews.length > 0;
  const mine = node.handle === me.handle;
  const topDissent = node.dissents.length
    ? node.dissents.reduce((a, b) => (b.likes > a.likes ? b : a))
    : null;

  const doVote = (e: React.MouseEvent, optId: string) => {
    e.stopPropagation();
    gate(() => {
      vote(node.id, optId);
      setVotedId(optId);
    }, "vote");
  };

  return (
    <article className="card" onClick={() => nav(`/n/${node.id}`)} style={{ cursor: "pointer" }}>
      <div className="card-head">
        <Avatar handle={node.handle} size="sm" />
        <div className="meta">
          <div className="handle">
            @{node.handle}
            {mine && <span className="sub"> · you</span>}
          </div>
          <div className="sub">
            {node.source === "celebrity" && node.historyAt
              ? `${new Date(node.historyAt).getFullYear()} · `
              : ""}
            {timeAgo(node.createdAt)}
          </div>
        </div>
        <SourcePill source={node.source} />
        <ThemePill theme={node.theme} />
        {resolved ? (
          <span className="pill pill-accent">resolved</span>
        ) : (
          <span className="pill pill-amber">open</span>
        )}
      </div>

      <p className="situation" style={compact ? { fontSize: 15 } : undefined}>
        {compact && node.situation.length > 160
          ? node.situation.slice(0, 160) + "…"
          : node.situation}
      </p>

      <div style={{ marginBottom: 12 }}>
        {node.options.map((o, i) => (
          <div key={o.id} className={"option-row" + (o.id === node.chosenOptionId ? " chosen" : "")}>
            <div className="option-badge">{String.fromCharCode(65 + i)}</div>
            <div className="option-label">{o.label}</div>
            {o.id === node.chosenOptionId && <div className="chosen-tag">their choice</div>}
          </div>
        ))}
      </div>

      {!compact && (
        <p className="reason-text">
          {node.reason.length > 220 ? node.reason.slice(0, 220) + "…" : node.reason}
        </p>
      )}

      {resolved && topDissent && (
        <div className="dissent top" style={{ marginTop: 13 }}>
          <div className="dissent-head">
            <span className="top-badge">top dissent</span>
            <span className="sub">{topDissent.likes} people agreed</span>
          </div>
          <p className="dissent-body" style={{ marginBottom: 0 }}>
            {topDissent.reason.length > 150
              ? topDissent.reason.slice(0, 150) + "…"
              : topDissent.reason}
          </p>
        </div>
      )}

      <div className="vote-block">
        <div className="vote-title">
          <span>What would you have chosen?</span>
          <span className="sub">{total} votes</span>
        </div>
        {counts.map(({ option, count }) => {
          const pct = total ? Math.round((count / total) * 100) : 0;
          const picked = votedId === option.id;
          return (
            <div key={option.id} className={"vote-bar-row" + (picked ? " picked" : "")}>
              <div className="vote-bar-label">
                <span className="lbl">{option.label}</span>
                <span className="pct">{pct}%</span>
              </div>
              <div className="vote-track">
                <div className="vote-fill" style={{ width: `${pct}%` }} />
              </div>
              <button
                className="vote-btn"
                disabled={!!votedId || mine}
                onClick={(e) => doVote(e, option.id)}
              >
                {picked ? "your pick" : votedId ? "" : mine ? "" : "choose this"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="interbar">
        <button
          className={"ibtn" + (node.resonatedByMe ? " on" : "")}
          onClick={(e) => {
            e.stopPropagation();
            gate(() => toggleResonance(node.id), "resonate");
          }}
        >
          <Heart filled={node.resonatedByMe} /> {node.resonances}
        </button>
        <span className="ibtn" style={{ cursor: "default" }}>
          Dissents {node.dissents.length}
        </span>
        {!resolved ? (
          <button
            className={"ibtn" + (node.cheeredByMe ? " on-purple" : "")}
            onClick={(e) => {
              e.stopPropagation();
              gate(() => toggleCheer(node.id), "cheer");
            }}
          >
            {node.cheers} waiting for the ending
          </button>
        ) : (
          <span className="ibtn" style={{ cursor: "default" }}>
            {node.reviews.length} ending{node.reviews.length > 1 ? "s" : ""}
          </span>
        )}
        <span style={{ flex: 1 }} />
        <span className="ibtn" style={{ cursor: "default" }}>
          {node.comments.length} comments
        </span>
      </div>
    </article>
  );
}

function Heart({ filled }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}