import type { Theme, Source } from "../types";

export interface RawNode {
  key: string;
  handle: string;
  theme: Theme;
  source: Source;
  situation: string;
  structured: [string, string, string];
  options: string[];
  chosen: number;
  reason: string;
  historyAt?: string;
  celebrityName?: string;
  bioSource?: string;
  crowdNote?: string;
  cheers?: number;
  votesTotal?: number;
  resonances?: number;
  reviews?: { result: string; regret: number; lesson: string; label: string; daysAgo: number }[];
  dissentSeed?: { handle: string; reason: string; likes: number }[];
  commentSeed?: { handle: string; text: string; likes: number }[];
  prevNodeKey?: string;
  followUpKeys?: string[];
}