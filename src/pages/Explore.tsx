import { useMemo, useState } from "react";
import { useStore } from "../store";
import NodeCard from "../ui/NodeCard";
import type { Theme } from "../types";

const THEMES: { key: Theme | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "career", label: "Career" },
  { key: "location", label: "Where to live" },
  { key: "relationship", label: "Relationships" },
  { key: "education", label: "Education" },
  { key: "other", label: "Other" },
];

export default function Explore() {
  const nodes = useStore((s) => s.nodes);
  const signedIn = useStore((s) => s.signedIn);
  const [theme, setTheme] = useState<Theme | "all">("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    let l = nodes.filter((n) => n.source !== "user" || signedIn);
    if (theme !== "all") l = l.filter((n) => n.theme === theme);
    if (q.trim()) {
      const s = q.toLowerCase();
      l = l.filter(
        (n) =>
          n.situation.toLowerCase().includes(s) ||
          n.reason.toLowerCase().includes(s) ||
          n.options.some((o) => o.label.toLowerCase().includes(s))
      );
    }
    return l.sort((a, b) => b.resonances - a.resonances);
  }, [nodes, theme, q, signedIn]);

  return (
    <div className="wrap fade-in">
      <h1 className="page-title" style={{ marginTop: 22 }}>
        Explore
      </h1>
      <p className="page-sub">
        Every card is a real crossroads. Filter by the kind of decision you're facing.
      </p>

      <input
        placeholder="Search situations, reasons, options…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ marginBottom: 14 }}
      />

      <div className="tabs">
        {THEMES.map((t) => (
          <button
            key={t.key}
            className={"tab" + (theme === t.key ? " active" : "")}
            onClick={() => setTheme(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="empty">Nothing matches that yet. Try another theme or keyword.</div>
      ) : (
        list.map((n) => <NodeCard key={n.id} node={n} />)
      )}
    </div>
  );
}