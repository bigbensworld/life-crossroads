import type { RawNode } from "./rawType";

// Follow-lines and live threads — deliberately NO reviews yet.
// This is the heartbeat: "N people are waiting for the ending."
export const OPEN_NODES: RawNode[] = [
  {
    key: "live-founder-runway",
    handle: "quiet_forge",
    theme: "career",
    source: "curated",
    bioSource: "Curated composite — not a real individual",
    situation:
      "I quit a $180k job six months ago to build something of my own. I have a mortgage, a partner who agreed to support me for one year (not two), and no users yet. Lately I can't tell if this is courage or ego.",
    structured: ["35-44", "city", "founder"],
    options: [
      "Go back now and take the first decent offer",
      "Give it the full year, then decide honestly",
      "Take a part-time contract to stretch the runway",
    ],
    chosen: 1,
    reason:
      "The offer I'd get today would be a slightly worse version of the job I left. That's not a plan, it's a retreat. But I also can't pretend the money doesn't matter, so I set a hard date and promised my partner I'd honor it. If I'm still at zero users by then, I go back without drama. That's the deal I made with myself.",
    crowdNote: "Everyone who cares about me has advised taking the safety net.",
    votesTotal: 612,
    resonances: 388,
    cheers: 141,
    dissentSeed: [
      {
        handle: "burn_rate_bill",
        reason:
          "The romantic framing hides the arithmetic. You have a mortgage and a one-year window someone else pays for. Every month you don't have revenue, you're spending your partner's patience as capital, and that's a debt with brutal interest.",
        likes: 267,
      },
    ],
    commentSeed: [
      {
        handle: "second_time_founder",
        text: "Set the date and actually honor it. The founders I've watched burn out are the ones who kept moving the deadline because moving it felt like hope.",
        likes: 118,
      },
    ],
  },
  {
    key: "live-relocation-marriage",
    handle: "salt_and_iron",
    theme: "location",
    source: "curated",
    bioSource: "Curated composite — not a real individual",
    situation:
      "My wife got a job offer in another country that she's wanted for a decade. If we go, I leave a career I've built for twelve years and start from nothing at 41. If we stay, she gives up the one thing she's never stopped talking about.",
    structured: ["35-44", "suburb", "manager"],
    options: [
      "Move with her and rebuild from zero",
      "Stay, and ask her to turn it down",
      "Try long distance for a year first",
    ],
    chosen: 0,
    reason:
      "I did the math on both versions of the next twenty years. Staying means one of us quietly resents the other, and I know which one of us would be better at swallowing it — me. That's not a noble reason, it's just true. I'd rather be the one who moved than the one who got moved past.",
    crowdNote: "Her colleagues assumed he would never actually go.",
    votesTotal: 934,
    resonances: 1204,
    cheers: 88,
    dissentSeed: [
      {
        handle: "still_the_breadwinner",
        reason:
          "Look at the actual power balance before applauding. He frames it as sacrifice, but he's the one giving up income and status in a country where he may not even have a work permit. Ask how that feels in year three, not week one.",
        likes: 203,
      },
    ],
    commentSeed: [
      {
        handle: "moved_for_love",
        text: "I did this. The first year is wonderful and the second year is when you find out who you are without your job. Start building something new before you land.",
        likes: 164,
      },
    ],
  },
  {
    key: "live-back-to-school",
    handle: "north_of_thirty",
    theme: "education",
    source: "curated",
    bioSource: "Curated composite — not a real individual",
    situation:
      "I'm 44, a nurse of eighteen years, and I've applied to medical school. My kids are in high school. My colleagues think it's a midlife crisis and my savings would be gone by the time I finish residency at 55.",
    structured: ["45-54", "city", "nurse"],
    options: [
      "Withdraw the application and stay in nursing",
      "Go, and accept being broke at 55",
      "Defer one year and think it through properly",
    ],
    chosen: 1,
    reason:
      "Everyone keeps saying 'but you'll be 55 when you finish' like it's an argument. I'm going to be 55 anyway — the only question is whether I'm a doctor then or a nurse who spent eleven years wondering. My kids watched me fill out that application. That's worth more than a retirement number.",
    crowdNote: "Her ward assumed she'd talk herself out of it.",
    votesTotal: 748,
    resonances: 892,
    cheers: 176,
    dissentSeed: [
      {
        handle: "maths_first",
        reason:
          "You will be 55 either way, true — but you'll also be $200k in debt at 55 with a decade of earning capacity left, and residency hours that will collide with your kids' last four years at home. 'I'd be 55 anyway' is a slogan, not a financial plan.",
        likes: 311,
      },
    ],
    commentSeed: [
      {
        handle: "late_starter_doc",
        text: "Started at 42. The hours were worse than anyone warned and the first two years were brutal. I'd still do it again. Nobody in my cohort regrets the delay — they regret the decade of waiting.",
        likes: 247,
      },
    ],
  },
  {
    key: "live-startup-vs-stay",
    handle: "paper_lantern",
    theme: "career",
    source: "curated",
    bioSource: "Curated composite — not a real individual",
    situation:
      "A startup wants me as their first designer. Equity and a title, but 30% less salary than my current government job which I can hold until retirement. My father took the safe road his whole life and told me on his deathbed that he wished he hadn't.",
    structured: ["25-34", "city", "designer"],
    options: [
      "Stay, and keep the pension",
      "Take the startup and bet on the equity",
      "Go, but negotiate for a salary floor",
    ],
    chosen: 2,
    reason:
      "I'm not brave enough to go for the gamble and I'm not honest enough to pretend the pension is enough for me. So I did the thing that felt like neither: I asked for a floor. If they won't guarantee me enough to live on, that tells me what the equity is worth. If they will, I've removed the one fear that would have made me bitter.",
    crowdNote: "His father's friends all told him to keep the job.",
    votesTotal: 521,
    resonances: 445,
    cheers: 63,
    dissentSeed: [
      {
        handle: "equity_is_hope",
        reason:
          "A salary floor just means they'll manage you out when it suits them. In a first-design-hire role the equity is usually worth nothing and the title is worth less. If you're going to take a 30% cut, take it for the experience, not for a promise about future paper.",
        likes: 178,
      },
    ],
    commentSeed: [
      {
        handle: "wmf_missed",
        text: "The part nobody tells you: the regret isn't about the money. It's about the eight years you spend being quietly sure you could have been something else.",
        likes: 133,
      },
    ],
  },
  {
    key: "live-stay-for-kids",
    handle: "ember_watch",
    theme: "relationship",
    source: "curated",
    bioSource: "Curated composite — not a real individual",
    situation:
      "My marriage has been over for three years. We're polite, we're roommates, we're good parents. Our daughter is eleven. I've met someone who makes me feel like a person again, and I don't know whether staying for her childhood is love or cowardice.",
    structured: ["35-44", "suburb", "teacher"],
    options: [
      "Stay until she's eighteen",
      "Separate now, and co-parent properly",
      "Stay, but stop pretending it's a marriage",
    ],
    chosen: 1,
    reason:
      "I've spent three years telling myself I was staying for her. Then she asked me why Dad and I never laugh anymore. She already knows. I was the only one still pretending — that's not protection, it's a lie with a child in the room. I'd rather she sees two honest households than one comfortable performance.",
    crowdNote: "Everyone in her family told her to wait until the daughter graduates.",
    votesTotal: 1360,
    resonances: 2140,
    cheers: 302,
    dissentSeed: [
      {
        handle: "wait_for_graduation",
        reason:
          "You've already waited three years, so waiting seven more is not the same sacrifice you're describing — it's a smaller increment. Meanwhile a different man may or may not still be there, and your daughter will spend her last seven years at home with a mother who is visibly leaving. Measure it as her decade, not your life sentence.",
        likes: 402,
      },
    ],
    commentSeed: [
      {
        handle: "child_of_quiet_war",
        text: "I was that eleven-year-old. I knew. What I needed wasn't two parents under one roof, it was two parents who weren't lying to me. The divorce wasn't the hard part — the pretending was.",
        likes: 518,
      },
    ],
  },
  {
    key: "sm-start-conversation",
    handle: "tide_notes",
    theme: "relationship",
    source: "curated",
    bioSource: "Curated composite — not a real individual",
    situation:
      "My best friend of fifteen years said something casually cruel about my career at a dinner party. Everyone laughed. I've been replaying it for four days and I can't tell if I'm being sensitive or if this has been building for a while.",
    structured: ["25-34", "city", "designer"],
    options: [
      "Let it go — it was a joke",
      "Message her tonight and say it stung",
      "Wait and see if it happens again",
    ],
    chosen: 1,
    reason:
      "I counted the jokes from the last year and there were six. That's not a joke, that's a pattern with plausible deniability. If I say nothing now, the next one I'll swallow too, and then one day I'll just stop texting back and she'll never know why. Better to be a little awkward tonight than to quietly vanish in a year.",
    votesTotal: 430,
    resonances: 276,
    cheers: 0,
  },
];