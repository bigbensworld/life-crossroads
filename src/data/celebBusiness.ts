import type { RawNode } from "./rawType";

// Celebrity cases — batch 1 (business / career)
export const CELEB_BUSINESS: RawNode[] = [
  {
    key: "jobs-calligraphy",
    handle: "wanderer_88",
    theme: "education",
    source: "celebrity",
    celebrityName: "Steve Jobs",
    bioSource: "Stanford Commencement (2005); Isaacson, Steve Jobs (2011)",
    situation:
      "I dropped out of an expensive college six months in. My working-class parents spent their savings on tuition and I was taking classes I had no interest in. So I stopped paying. Then I still had to figure out what to do with my days.",
    structured: ["18-24", "suburb", "student"],
    options: [
      "Take a normal, useful degree and graduate on time",
      "Stay dropped out and audit only classes I find beautiful",
      "Go home and get a job to repay my parents",
    ],
    chosen: 1,
    reason:
      "The tuition was eating my parents alive for a degree I didn't believe in. But I wasn't ready to stop learning, I just wanted to stop paying for credentials. So I stayed on campus and followed pure curiosity. Calligraphy looked beautiful and useless and cost me nothing. That was the whole test: if it's free and it interests me, why not.",
    historyAt: "1972",
    crowdNote: "Most classmates would have said this was throwing away a real degree for a hobby.",
    votesTotal: 1840,
    resonances: 4280,
    reviews: [
      {
        label: "10 years later",
        result:
          "The Mac shipped with beautiful typography, the first personal computer with proportional fonts. That useless calligraphy class was the most leveraged free thing I ever did.",
        regret: 1,
        lesson: "You cannot connect the dots looking forward. Only backward.",
        daysAgo: 3800,
      },
      {
        label: "30 years later",
        result:
          "The design sensibility built there became Apple's identity and shaped the entire smartphone era.",
        regret: 1,
        lesson: "Trust the dots will connect, but only if you collect dots that genuinely interest you.",
        daysAgo: 1200,
      },
    ],
    dissentSeed: [
      {
        handle: "pragmatic_pete",
        reason:
          "Beautiful in hindsight, but this is survivorship bias. For every person who dropped out and followed curiosity, thousands ended up broke. Romantic and dangerous.",
        likes: 812,
      },
    ],
    commentSeed: [
      {
        handle: "first_gen",
        text: "As a first-gen student whose parents paid everything, this hits hard. I never had the courage to stop paying.",
        likes: 226,
      },
    ],
  },
];