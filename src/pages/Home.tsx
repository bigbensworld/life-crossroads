import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, isResolved } from "../store";
import NodeCard from "../ui/NodeCard";
import { useAuthGate } from "../ui/authGate";

type Sort = "recent" | "open" | "resolved" | "discussed";

export default function Home() {
  const nodes = useStore((s) => s.nodes);
  const signedIn = useStore((s) => s.signedIn);
  const gate = useAuthGate();
  const nav = useNavigate();
  const [sort, setSort] = useState<Sort>("recent");

  const feed = useMemo(() => {
    const list = nodes.filter((n) => n.source !== "user" || signedIn);
    if (sort === "open") return list.filter((n) => !isResolved(n));
    if (sort === "resolved") return list.filter(isResolved);
    if (sort === "discussed")
      return [...list].sort(
        (a, b) =>
          b.dissents.length + b.comments.length - (a.dissents.length + a.comments.length)
      );
    return [...list].sort((a, b) => b.createdAt - a.createdAt);
  }, [nodes, sort, signedIn]);

  if (!signedIn) {
    return (
      <div className="wrap-wide fade-in">
        <section className="hero">
          <h1>
            At life's crossroads,
            <br />
            see how others chose — and how it turned out.
          </h1>
          <p>
            An anonymous timeline of real decisions. What was the situation, what did they pick,
            why — and months later, how did it actually go?
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => gate(() => nav("/me"), "publish")}>
              Share your crossroads
            </button>
            <button className="btn" onClick={() => nav("/explore")}>
              Browse anonymously
            </button>
          </div>
        </section>

        <div className="blur-lock">
          {feed.slice(0, 3).map((n) => (
            <NodeCard key={n.id} node={n} compact />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: -30, position: "relative", zIndex: 5 }}>
          <button
            className="btn btn-primary"
            onClick={() => gate(() => nav("/me"), "publish")}
          >
            Sign in to keep reading
          </button>
          <p className="hint" style={{ marginTop: 10 }}>
            Free · anonymous · no email shown. You pick an alias, we never show who you are.
          </p>
        </div>

        <div style={{ marginTop: 60 }}>
          <h2 style={{ fontSize: 17, fontWeight: 500, marginBottom: 6 }}>
            What you'll find here
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14 }}>
            {[
              ["Share", "Write your situation, your options, what you picked and the honest reason why."],
              ["Follow", "Track people whose crossroads look like yours. Get pinged when their ending lands."],
              ["Ask the system", "Describe a decision you're facing. See what similar people chose — and what happened."],
              ["Wait for the ending", "The point isn't the choice. It's how it turned out. Come back and write it."],
            ].map(([t, d]) => (
              <div className="card" key={t} style={{ margin: 0 }}>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>{t}</div>
                <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.65 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap fade-in">
      <div className="tabs" style={{ marginTop: 20 }}>
        {(
          [
            ["recent", "Latest"],
            ["open", "Waiting for an ending"],
            ["resolved", "Resolved"],
            ["discussed", "Most debated"],
          ] as [Sort, string][]
        ).map(([k, label]) => (
          <button
            key={k}
            className={"tab" + (sort === k ? " active" : "")}
            onClick={() => setSort(k)}
          >
            {label}
          </button>
        ))}
      </div>
      {feed.map((n) => (
        <NodeCard key={n.id} node={n} />
      ))}
    </div>
  );
}