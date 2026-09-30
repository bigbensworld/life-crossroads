import { avatarFor } from "../store";

export function Avatar({ handle, size = "md" }: { handle: string; size?: "sm" | "md" | "lg" }) {
  const { kind, hue } = avatarFor(handle || "anon");
  const cls = size === "sm" ? "avatar avatar-sm" : size === "lg" ? "avatar avatar-lg" : "avatar";
  const bg = `hsl(${hue} 24% 17%)`;
  const fg = `hsl(${hue} 55% 62%)`;
  return (
    <div className={cls} style={{ background: bg }} aria-hidden="true">
      <svg viewBox="0 0 40 40">
        {kind === "circle" && <circle cx="20" cy="20" r="10" fill={fg} />}
        {kind === "square" && <rect x="11" y="11" width="18" height="18" rx="3" fill={fg} />}
        {kind === "triangle" && <polygon points="20,10 31,29 9,29" fill={fg} />}
        {kind === "hexagon" && <polygon points="20,9 29.5,14.5 29.5,25.5 20,31 10.5,25.5 10.5,14.5" fill={fg} />}
        {kind === "diamond" && <polygon points="20,9 31,20 20,31 9,20" fill={fg} />}
        {kind === "pentagon" && <polygon points="20,9 30.5,17 26.5,30 13.5,30 9.5,17" fill={fg} />}
        {kind === "octagon" && <polygon points="14,10 26,10 31,15 31,27 26,32 14,32 9,27 9,15" fill={fg} />}
        {kind === "star" && (
          <polygon
            points="20,9 23.5,16.5 31,17.5 25.5,23 27,31 20,27 13,31 14.5,23 9,17.5 16.5,16.5"
            fill={fg}
          />
        )}
      </svg>
    </div>
  );
}

export function Stars({ value }: { value: number }) {
  return (
    <span className="stars" title={`${value} / 5`}>
      {"★".repeat(value)}
      <span style={{ opacity: 0.25 }}>{"★".repeat(5 - value)}</span>
    </span>
  );
}

export function ThemePill({ theme }: { theme: string }) {
  const map: Record<string, string> = {
    career: "Career",
    location: "Where to live",
    relationship: "Relationships",
    education: "Education",
    other: "Other",
  };
  return <span className="pill">{map[theme] ?? theme}</span>;
}

export function SourcePill({ source }: { source: string }) {
  if (source === "celebrity")
    return (
      <span className="pill pill-purple" title="Curated account — story drawn from published biography">
        curated
      </span>
    );
  if (source === "curated") return <span className="pill">curated</span>;
  return null;
}

export function timeAgo(ts: number) {
  const diff = Date.now() - ts;
  const d = Math.floor(diff / 86400000);
  if (d < 1) return "today";
  if (d === 1) return "yesterday";
  if (d < 30) return `${d}d ago`;
  const m = Math.floor(d / 30);
  if (m < 12) return `${m}mo ago`;
  return `${Math.floor(m / 12)}y ago`;
}

export function Spinner() {
  return <span className="spinner" />;
}

export function Toast({ msg }: { msg: string }) {
  return <div className="toast">{msg}</div>;
}