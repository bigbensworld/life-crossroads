export type Theme = "career" | "location" | "relationship" | "education" | "other";

export type Source = "user" | "celebrity" | "curated";

export interface Option {
  id: string;
  label: string;
  chosen?: boolean;
}

export interface Vote {
  optionId: string;
  at: number;
}

export interface Dissent {
  id: string;
  authorHandle: string;
  authorAvatar: string;
  reason: string;
  likes: number;
  likedByMe?: boolean;
  at: number;
}

export interface Comment {
  id: string;
  authorHandle: string;
  authorAvatar: string;
  text: string;
  likes: number;
  likedByMe?: boolean;
  at: number;
  replyTo?: string;
}

export interface Review {
  id: string;
  result: string;
  regret: number; // 1-5 stars
  lesson: string;
  at: number;
  label?: string; // "6 months later" / "2 years later"
}

export interface Node {
  id: string;
  handle: string;
  avatar: string;
  theme: Theme;
  source: Source;
  situation: string;
  structured: {
    ageBand: string;
    citySize: string;
    occupation: string;
  };
  options: Option[];
  chosenOptionId: string;
  reason: string;
  createdAt: number;
  historyAt?: number; // for celebrity: when the decision happened
  prevNodeId?: string;
  /** what the crowd would have chosen — for celebrity cases, the note */
  crowdNote?: string;
  votes: Vote[];
  dissents: Dissent[];
  comments: Comment[];
  cheers: number; // "N waiting for the ending"
  cheeredByMe?: boolean;
  resonances: number;
  resonatedByMe?: boolean;
  reviews: Review[];
  followUps: string[]; // node ids that came after
  celebrityName?: string; // only visible in a subtle "source" tooltip
  bioSource?: string;
}

export interface Notification {
  id: string;
  kind: "ending" | "follow" | "cheer" | "comment" | "dissent";
  text: string;
  nodeId?: string;
  handle?: string;
  at: number;
  read: boolean;
}

export interface Timeline {
  handle: string;
  avatar: string;
  bio: string;
  theme: Theme;
  nodeIds: string[];
}

export interface Profile {
  handle: string;
  avatar: string;
  bio: string;
  joinedAt: number;
  following: string[];
}

export interface AskSession {
  id: string;
  situation: string;
  theme: Theme;
  ageBand: string;
  citySize: string;
  createdAt: number;
  matchedNodeIds: string[];
  crowdedSplit: { optionLabel: string; count: number }[];
  reasonKeywords: string[];
  advice: string;
  disclaimer: string;
}