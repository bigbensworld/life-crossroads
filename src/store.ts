import { create } from "zustand";
import type {
  Node,
  Theme,
  Notification,
  Profile,
  AskSession,
  Review,
  Dissent,
  Comment,
} from "./types";
import { CELEBRITIES } from "./data/celebrities";
import { SMALL_CHOICES } from "./data/smallChoices";
import { OPEN_NODES } from "./data/openNodes";
import type { RawNode } from "./data/rawType";

const LS_KEY = "lc_state_v1";
const DAY = 86400000;

const AVATAR_KINDS = [
  "circle",
  "triangle",
  "square",
  "hexagon",
  "diamond",
  "pentagon",
  "octagon",
  "star",
];

export const avatarFor = (handle: string) => {
  let h = 0;
  for (let i = 0; i < handle.length; i++) h = (h * 31 + handle.charCodeAt(i)) >>> 0;
  return { kind: AVATAR_KINDS[h % AVATAR_KINDS.length], hue: h % 360 };
};

const keyToId = (key: string) => `n_${key}`;

const buildNode = (raw: RawNode, index: number): Node => {
  const now = Date.now();
  const id = keyToId(raw.key);
  const votes: Node["votes"] = [];
  const total = raw.votesTotal ?? 0;
  if (total > 0) {
    const weights = raw.options.map((_, i) => (i === raw.chosen ? 0.45 : 0.27));
    const sum = weights.reduce((a, b) => a + b, 0);
    raw.options.forEach((o, i) => {
      const count = Math.round((weights[i] / sum) * total);
      for (let k = 0; k < count; k++) {
        votes.push({ optionId: `${id}_o${i}`, at: now - (k % 30) * DAY });
      }
    });
  }
  return {
    id,
    handle: raw.handle,
    avatar: raw.handle,
    theme: raw.theme,
    source: raw.source,
    situation: raw.situation,
    structured: {
      ageBand: raw.structured[0],
      citySize: raw.structured[1],
      occupation: raw.structured[2],
    },
    options: raw.options.map((label, i) => ({ id: `${id}_o${i}`, label })),
    chosenOptionId: `${id}_o${raw.chosen}`,
    reason: raw.reason,
    createdAt: now - (raw.reviews?.length ? raw.reviews[raw.reviews.length - 1].daysAgo * DAY + 30 * DAY : 20 * DAY),
    historyAt: raw.historyAt ? Date.parse(raw.historyAt + "-01-01") : undefined,
    crowdNote: raw.crowdNote,
    votes,
    dissents: (raw.dissentSeed ?? []).map((d, i) => ({
      id: `${id}_d${i}`,
      authorHandle: d.handle,
      authorAvatar: d.handle,
      reason: d.reason,
      likes: d.likes,
      likedByMe: false,
      at: now - (3 + i) * DAY,
    })),
    comments: (raw.commentSeed ?? []).map((c, i) => ({
      id: `${id}_c${i}`,
      authorHandle: c.handle,
      authorAvatar: c.handle,
      text: c.text,
      likes: c.likes,
      likedByMe: false,
      at: now - (2 + i) * DAY,
    })),
    cheers:
      raw.cheers !== undefined
        ? raw.cheers
        : raw.reviews && raw.reviews.length
        ? Math.floor((raw.votesTotal ?? 100) / 12)
        : 23,
    cheeredByMe: false,
    resonances: raw.resonances ?? 120,
    resonatedByMe: false,
    reviews: (raw.reviews ?? []).map((r, i) => ({
      id: `${id}_r${i}`,
      result: r.result,
      regret: r.regret,
      lesson: r.lesson,
      label: r.label,
      at: now - r.daysAgo * DAY,
    })),
    followUps: [],
    celebrityName: raw.celebrityName,
    bioSource: raw.bioSource,
  };
};

const CELEB_NODES = CELEBRITIES.map(buildNode);
const SMALL_NODES = SMALL_CHOICES.map(buildNode);
const OPEN_BUILT = OPEN_NODES.map(buildNode);

// wire follow-up links
const allSeed = [...CELEBRITIES, ...SMALL_CHOICES, ...OPEN_NODES];
const allBuilt = [...CELEB_NODES, ...SMALL_NODES, ...OPEN_BUILT];
allSeed.forEach((raw) => {
  if (!raw.followUpKeys?.length) return;
  const node = allBuilt.find((n) => n.id === keyToId(raw.key));
  if (!node) return;
  node.followUps = raw.followUpKeys.map(keyToId);
});
allSeed.forEach((raw) => {
  if (!raw.prevNodeKey) return;
  const node = allBuilt.find((n) => n.id === keyToId(raw.key));
  if (node) node.prevNodeId = keyToId(raw.prevNodeKey);
});

const SEED_NODES: Node[] = [...OPEN_BUILT, ...CELEB_NODES, ...SMALL_NODES];

const seedProfiles = (): Record<string, Profile> => {
  const map: Record<string, Profile> = {};
  SEED_NODES.forEach((n) => {
    if (!map[n.handle]) {
      map[n.handle] = {
        handle: n.handle,
        avatar: n.avatar,
        bio: "",
        joinedAt: Date.now() - 400 * DAY,
        following: [],
      };
    }
  });
  return map;
};

const seedNotifications = (): Notification[] => [
  {
    id: "seed_n1",
    kind: "ending",
    text: "@quiet_forge wrote the ending to a choice you were following",
    nodeId: keyToId("live-founder-runway"),
    handle: "quiet_forge",
    at: Date.now() - 2 * DAY,
    read: false,
  },
  {
    id: "seed_n2",
    kind: "cheer",
    text: "14 people are waiting for the ending to your choice",
    at: Date.now() - 5 * DAY,
    read: false,
  },
  {
    id: "seed_n3",
    kind: "follow",
    text: "salt_and_iron started following you",
    handle: "salt_and_iron",
    at: Date.now() - 6 * DAY,
    read: true,
  },
  {
    id: "seed_n4",
    kind: "dissent",
    text: "Someone disagreed with a choice you made and wrote why",
    at: Date.now() - 8 * DAY,
    read: true,
  },
];

interface State {
  nodes: Node[];
  profiles: Record<string, Profile>;
  me: Profile;
  signedIn: boolean;
  notifications: Notification[];
  asks: AskSession[];
  bookmarks: string[];

  ensureSignedIn: (handle?: string) => void;
  setHandle: (handle: string) => void;
  toggleFollow: (handle: string) => void;
  toggleResonance: (nodeId: string) => void;
  toggleCheer: (nodeId: string) => void;
  toggleBookmark: (nodeId: string) => void;
  vote: (nodeId: string, optionId: string) => void;
  likeDissent: (nodeId: string, dissentId: string) => void;
  addDissent: (nodeId: string, reason: string) => void;
  likeComment: (nodeId: string, commentId: string) => void;
  addComment: (nodeId: string, text: string) => void;
  addNode: (payload: {
    situation: string;
    structured: { ageBand: string; citySize: string; occupation: string };
    options: string[];
    chosenIndex: number;
    reason: string;
    theme: Theme;
    prevNodeId?: string;
    reviewAfterDays: number;
  }) => string;
  addReview: (nodeId: string, review: Omit<Review, "id" | "at">) => void;
  pushAsk: (session: AskSession) => void;
  markAllRead: () => void;
  reset: () => void;
}

const defaultMe = (): Profile => ({
  handle: "",
  avatar: "",
  bio: "",
  joinedAt: Date.now(),
  following: [],
});

const load = (): Partial<State> | null => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const persisted = load();

export const useStore = create<State>((set, get) => ({
  nodes: SEED_NODES,
  profiles: seedProfiles(),
  me: defaultMe(),
  signedIn: false,
  notifications: seedNotifications(),
  asks: [],
  bookmarks: [],

  ensureSignedIn: (handle) => {
    const h = handle ?? get().me.handle;
    if (!h) return;
    const profiles = { ...get().profiles };
    const existing = profiles[h];
    profiles[h] = existing
      ? { ...existing, handle: h }
      : { handle: h, avatar: h, bio: "", joinedAt: Date.now(), following: [] };
    set({ signedIn: true, me: { ...profiles[h] } , profiles });
  },

  setHandle: (handle) =>
    set((s) => {
      const old = s.me.handle;
      const profiles = { ...s.profiles };
      delete profiles[old];
      profiles[handle] = { ...s.me, handle, avatar: handle };
      const nodes = old
        ? s.nodes.map((n) => (n.handle === old ? { ...n, handle, avatar: handle } : n))
        : s.nodes;
      return { me: { ...s.me, handle, avatar: handle }, profiles, nodes, signedIn: !!handle };
    }),

  toggleFollow: (handle) =>
    set((s) => {
      if (!s.signedIn || handle === s.me.handle) return {};
      const following = s.me.following.includes(handle)
        ? s.me.following.filter((h) => h !== handle)
        : [...s.me.following, handle];
      return { me: { ...s.me, following } };
    }),

  toggleResonance: (nodeId) =>
    set((s) => ({
      nodes: s.nodes.map((n) =>
        n.id === nodeId
          ? {
              ...n,
              resonatedByMe: !n.resonatedByMe,
              resonances: n.resonances + (n.resonatedByMe ? -1 : 1),
            }
          : n
      ),
    })),

  toggleCheer: (nodeId) =>
    set((s) => ({
      nodes: s.nodes.map((n) =>
        n.id === nodeId
          ? { ...n, cheeredByMe: !n.cheeredByMe, cheers: n.cheers + (n.cheeredByMe ? -1 : 1) }
          : n
      ),
    })),

  toggleBookmark: (nodeId) =>
    set((s) => ({
      bookmarks: s.bookmarks.includes(nodeId)
        ? s.bookmarks.filter((b) => b !== nodeId)
        : [...s.bookmarks, nodeId],
    })),

  vote: (nodeId, optionId) =>
    set((s) => ({
      nodes: s.nodes.map((n) =>
        n.id === nodeId ? { ...n, votes: [...n.votes, { optionId, at: Date.now() }] } : n
      ),
    })),

  likeDissent: (nodeId, dissentId) =>
    set((s) => ({
      nodes: s.nodes.map((n) =>
        n.id !== nodeId
          ? n
          : {
              ...n,
              dissents: n.dissents.map((d) =>
                d.id === dissentId
                  ? { ...d, likedByMe: !d.likedByMe, likes: d.likes + (d.likedByMe ? -1 : 1) }
                  : d
              ),
            }
      ),
    })),

  addDissent: (nodeId, reason) =>
    set((s) => {
      if (!s.signedIn) return {};
      const d: Dissent = {
        id: `d_${Date.now()}`,
        authorHandle: s.me.handle,
        authorAvatar: s.me.handle,
        reason,
        likes: 0,
        likedByMe: false,
        at: Date.now(),
      };
      return {
        nodes: s.nodes.map((n) => (n.id === nodeId ? { ...n, dissents: [...n.dissents, d] } : n)),
      };
    }),

  likeComment: (nodeId, commentId) =>
    set((s) => ({
      nodes: s.nodes.map((n) =>
        n.id !== nodeId
          ? n
          : {
              ...n,
              comments: n.comments.map((c) =>
                c.id === commentId
                  ? { ...c, likedByMe: !c.likedByMe, likes: c.likes + (c.likedByMe ? -1 : 1) }
                  : c
              ),
            }
      ),
    })),

  addComment: (nodeId, text) =>
    set((s) => {
      if (!s.signedIn) return {};
      const c: Comment = {
        id: `c_${Date.now()}`,
        authorHandle: s.me.handle,
        authorAvatar: s.me.handle,
        text,
        likes: 0,
        likedByMe: false,
        at: Date.now(),
      };
      return {
        nodes: s.nodes.map((n) => (n.id === nodeId ? { ...n, comments: [c, ...n.comments] } : n)),
      };
    }),

  addNode: (payload) => {
    const id = `n_user_${Date.now()}`;
    const me = get().me;
    const opts = payload.options.map((label, i) => ({ id: `${id}_o${i}`, label }));
    const node: Node = {
      id,
      handle: me.handle || "you",
      avatar: me.handle || "you",
      theme: payload.theme,
      source: "user",
      situation: payload.situation,
      structured: payload.structured,
      options: opts,
      chosenOptionId: `${id}_o${payload.chosenIndex}`,
      reason: payload.reason,
      createdAt: Date.now(),
      prevNodeId: payload.prevNodeId,
      votes: [],
      dissents: [],
      comments: [],
      cheers: 0,
      cheeredByMe: false,
      resonances: 0,
      resonatedByMe: false,
      reviews: [],
      followUps: [],
    };
    set((s) => ({
      nodes: [node, ...s.nodes],
      notifications: [
        {
          id: `notif_${Date.now()}`,
          kind: "cheer",
          text: `Your choice is live. We'll remind you in ${Math.round(
            payload.reviewAfterDays / 30
          )} months to write the ending.`,
          nodeId: id,
          at: Date.now(),
          read: false,
        },
        ...s.notifications,
      ],
    }));
    // apply prev link
    if (payload.prevNodeId) {
      set((s) => ({
        nodes: s.nodes.map((n) =>
          n.id === payload.prevNodeId ? { ...n, followUps: [...n.followUps, id] } : n
        ),
      }));
    }
    return id;
  },

  addReview: (nodeId, review) =>
    set((s) => ({
      nodes: s.nodes.map((n) =>
        n.id === nodeId
          ? {
              ...n,
              reviews: [
                ...n.reviews,
                { ...review, id: `r_${Date.now()}`, at: Date.now() },
              ],
            }
          : n
      ),
    })),

  pushAsk: (session) => set((s) => ({ asks: [session, ...s.asks] })),

  markAllRead: () =>
    set((s) => ({ notifications: s.notifications.map((n) => ({ ...n, read: true })) })),

  reset: () => {
    localStorage.removeItem(LS_KEY);
    set({
      nodes: SEED_NODES,
      profiles: seedProfiles(),
      me: defaultMe(),
      signedIn: false,
      notifications: seedNotifications(),
      asks: [],
      bookmarks: [],
    });
  },
}));

// persist
useStore.subscribe((s) => {
  try {
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({
        nodes: s.nodes,
        profiles: s.profiles,
        me: s.me,
        signedIn: s.signedIn,
        notifications: s.notifications,
        asks: s.asks,
        bookmarks: s.bookmarks,
      })
    );
  } catch {
    /* ignore */
  }
});

if (persisted?.me) {
  // Seed content is always re-read from source, so publishers can update cards
  // without users having to clear their cache. The user's OWN cards are merged
  // back on top — otherwise every refresh would silently delete their work.
  const savedNodes = (persisted.nodes as Node[]) ?? [];
  const mine = savedNodes.filter((n) => n.source === "user");
  const seedIds = new Set(SEED_NODES.map((n) => n.id));
  const nodes = [...mine.filter((n) => !seedIds.has(n.id)), ...SEED_NODES];
  const validIds = new Set(nodes.map((n) => n.id));
  // Never keep a saved state pointing at cards that no longer exist — that turns
  // a stale cache into a dead end for the user.
  useStore.setState({
    nodes,
    me: persisted.me as Profile,
    signedIn: !!persisted.signedIn,
    profiles: (persisted.profiles as Record<string, Profile>) ?? seedProfiles(),
    notifications: ((persisted.notifications as Notification[]) ?? seedNotifications()).filter(
      (n) => !n.nodeId || validIds.has(n.nodeId)
    ),
    asks: (persisted.asks as AskSession[]) ?? [],
    bookmarks: ((persisted.bookmarks as string[]) ?? []).filter((b) => validIds.has(b)),
  });
}

export const THEME_LABELS: Record<Theme, string> = {
  career: "Career",
  location: "Where to live",
  relationship: "Relationships",
  education: "Education",
  other: "Other",
};

export const AGE_BANDS = ["18-24", "25-34", "35-44", "45-54", "55+"] as const;
export const CITY_SIZES = ["rural", "suburb", "city", "megacity"] as const;

export const findNode = (id: string) => useStore.getState().nodes.find((n) => n.id === id);
export const isResolved = (n: Node) => n.reviews.length > 0;