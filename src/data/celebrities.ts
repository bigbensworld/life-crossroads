import type { RawNode } from "./rawType";

// Celebrity cases — batch 2 (business/tech · art/sport · history/philosophy · curated)
// Exactly 19 nodes covering 19 individuals. Some nodes form "storylines":
// they are chained with prevNodeKey / followUpKeys, so the timeline reads
// as one road leading to the next crossroads.
export const CELEB_REST: RawNode[] = [
  {
    key: "bezos-quit-hedgefund",
    handle: "quiet_forge",
    theme: "career",
    source: "celebrity",
    celebrityName: "Jeff Bezos",
    bioSource: "Bezos, Invent and Wander (2020); Stone, The Everything Store (2013)",
    situation:
      "I had the best job a 30-year-old in New York could ask for: senior VP at a hedge fund, the bonus already banked, and a boss who could make me a partner inside a few years. Then I read a number — web usage growing 2,300% a year — and I could not stop thinking about it. I walked into his office and told him I was going to quit and sell books online.",
    structured: ["25-34", "megacity", "finance professional"],
    options: [
      "Stay and push for partner, keep the bonus",
      "Quit and start the bookstore out of a garage",
      "Ask for a leave of absence and test the idea over one summer",
    ],
    chosen: 1,
    reason:
      "My boss took me for a long walk and gave me the smartest argument against it: this would be a better idea for someone who did not already have a good job. I understood him. I had a wife, real rent, and everything to lose. So I stopped doing the math on money and started doing the math on regret. I was 30, not 60. If this failed, I would be a 32-year-old whose resume still said senior VP. If I never tried, I would be 80, telling myself the story of the one thing I was too comfortable to attempt. I asked which version of that old man I could live with. That was the entire calculation, and it was not about odds. I picked a date, July 5th, and I quit. I think the reason people call this brave is that they imagine the courage came first. It did not. The regret math came first, over weeks, and the courage was just the last five minutes of acting on arithmetic I had already done.",
    historyAt: "1994",
    crowdNote: "Everyone at the fund said the same thing: keep the job and build it on weekends.",
    votesTotal: 3120,
    resonances: 5210,
    reviews: [
      {
        label: "2 years later",
        result:
          "The dot-com bust hit. The stock fell from just over $100 to about $6 in a year. I kept telling my wife the company would be fine while privately not being sure I believed it.",
        regret: 3,
        lesson:
          "Betting on a real trend does not spare you from a crash. It only means the crash is survivable if you built something people actually use.",
        daysAgo: 3600,
      },
      {
        label: "6 years later",
        result:
          "The company posted its first real annual profit, and the thing we built out of a garage had become something nobody could ignore.",
        regret: 1,
        lesson: "Cash flow, not applause, is the test of whether a garage idea is real.",
        daysAgo: 2400,
      },
    ],
    dissentSeed: [
      {
        handle: "burn_rate_betty",
        reason:
          "This is survivorship bias with a good publicist. Thousands of people opened online bookstores in 1995 and you only hear about the one that lived. And his 'bounded downside' is a lie when you have a spouse and rent — his downside was a bonus, yours might be eviction.",
        likes: 940,
      },
      {
        handle: "mba_ghost",
        reason:
          "Notice he never had to ask anyone for permission. A hedge fund VP can walk away in 1994 and still eat. That is not courage, that is a safety net with a comma in it.",
        likes: 512,
      },
    ],
    followUpKeys: ["oprah-own-show"],
    commentSeed: [
      {
        handle: "night_shift_dad",
        text: "I read this at 1am after a shift. I have about four months of runway. Hopeful and nauseous at the same time.",
        likes: 244,
      },
    ],
  },
  {
    key: "musk-2008-last-money",
    handle: "salt_and_iron",
    theme: "career",
    source: "celebrity",
    celebrityName: "Elon Musk",
    bioSource: "Vance, Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future (2015)",
    situation:
      "Three things are failing at once. SpaceX blew up its first three launches. Tesla is weeks from payroll and the credit crisis has frozen every lender. I have already put everything from the PayPal sale into both. What is left is my house. My wife is watching me decide whether to bet the last of it too.",
    structured: ["25-34", "megacity", "founder"],
    options: [
      "Split what is left between the two, saving nothing for myself",
      "Save the house and let one company die cleanly",
      "Take a rescue deal that costs me control of the vision",
    ],
    chosen: 0,
    reason:
      "People imagine this was some grand gesture. It was arithmetic and nausea. If I kept the house and both companies died, I would have saved a house and lost the entire reason I did any of this. Then I stopped looking at it as two bets and saw one bet — that humans could still be ambitious when everything was collapsing. The third launch was the last one we had parts for, and I found the money the same week the fourth went up. I did not know it would work. I only knew I would rather be ruined having tried the whole thing than comfortable having tried half of it. What I never say publicly is that I was not calm. I checked the account balances every night, I fought with people I loved about money, and I promised things I was not sure I could deliver. The decision looked decisive from outside and felt like falling the entire time.",
    historyAt: "2008",
    crowdNote: "Anyone on the outside said he was gambling his family's future on pride.",
    votesTotal: 4080,
    resonances: 6650,
    reviews: [
      {
        label: "4 months later",
        result:
          "The fourth launch reached orbit. NASA awarded a contract worth $1.6 billion. Without it, both companies were gone inside a month.",
        regret: 1,
        lesson: "Sometimes the whole company is decided by one week you cannot plan for.",
        daysAgo: 2900,
      },
      {
        label: "3 years later",
        result:
          "The house was gone and the marriage ended. The companies survived. Both things happened in the same year and both are true.",
        regret: 2,
        lesson: "You can win the bet and still lose things that were never on the sheet.",
        daysAgo: 1900,
      },
    ],
    dissentSeed: [
      {
        handle: "risk_analyst_rae",
        reason:
          "He had already cashed out PayPal. 'Betting the last money' still left him millions of soft landing. Most people betting their last money lose their kids' health insurance. Framing a wealthy man's risk as universal courage is dishonest.",
        likes: 1102,
      },
      {
        handle: "patient_capital",
        reason:
          "The flip side nobody says: his employees' paychecks, rents, and families were riding this too. An employee cannot diversify away from a founder's gut call.",
        likes: 476,
      },
    ],
    commentSeed: [
      {
        handle: "launch_pad_lena",
        text: "I worked near the pad then. Nobody slept that week. Reading this I still feel the floor hum.",
        likes: 301,
      },
    ],
  },
  {
    key: "buffett-omaha",
    handle: "midnight_ink",
    theme: "location",
    source: "celebrity",
    celebrityName: "Warren Buffett",
    bioSource: "Lowenstein, Buffett: The Making of an American Capitalist (1995)",
    situation:
      "I am back home after school in New York, and every smart person I know is telling me I am wasting my career. The big money, the deal flow, the important men — all of it is in Manhattan. My mentors are there. I have a small investing shop here and a life I actually like.",
    structured: ["25-34", "small city", "investor"],
    options: [
      "Move to New York and be at the center of the action",
      "Stay and run the money from a small city",
      "Split time between both and hedge the decision",
    ],
    chosen: 1,
    reason:
      "The argument for New York was that proximity equals information. But I had noticed something: the more people I was around, the more I borrowed their opinions instead of thinking. What I needed was not more input, it was fewer distractions and a longer attention span. And there was a quieter factor — the friends and routines here that kept me sane and kept me honest. A move to the center of the world would have made me busier and, I suspected, a worse investor. I did not choose this city out of nostalgia. I chose it because it let me read for six hours a day without someone asking me to lunch. I chose boring on purpose. There was a real cost I should name: for the first few years I felt like a man watching a party he had declined, believing he was right and unable to prove it. The proof took about a decade to arrive, and in the meantime it was just a quiet conviction and a short commute.",
    historyAt: "1956",
    crowdNote: "The consensus was that staying outside the capital was a career mistake.",
    votesTotal: 2260,
    resonances: 3980,
    reviews: [
      {
        label: "20 years later",
        result:
          "The partnership compounded for decades from an office with no ticker tape and, for a long time, one phone line.",
        regret: 1,
        lesson: "The crowd trades energy for edge. Sometimes refusing the energy is the edge.",
        daysAgo: 5200,
      },
      {
        label: "40 years later",
        result:
          "The same house, the same city, the same habits. The address never became the story — the temperament did.",
        regret: 1,
        lesson: "Environment is a tool. Familiarity can be an asset, not a trap.",
        daysAgo: 2100,
      },
    ],
    dissentSeed: [
      {
        handle: "field_researcher",
        reason:
          "Being told to 'think independently' while sitting in a bath of other people's ideas is a privilege. Most investors outside a hub do not develop an independent view — they develop an isolated one, and quietly lose for years.",
        likes: 693,
      },
      {
        handle: "hustle_historian",
        reason:
          "Easy to call hustle noise when you already have the capital and the track record. For someone with neither, the network IS the asset.",
        likes: 350,
      },
    ],
    followUpKeys: ["van-gogh-painter"],
    commentSeed: [
      {
        handle: "small_town_broker",
        text: "I moved home from the city two years ago and everyone said it was a step back. Needed to read this today.",
        likes: 189,
      },
    ],
  },
  {
    key: "naval-angel",
    handle: "compound_light",
    theme: "career",
    source: "celebrity",
    celebrityName: "Naval Ravikant",
    bioSource: "Ravikant, How to Get Rich (2018); Earley, The Almanack of Naval Ravikant (2020)",
    situation:
      "I have a title, equity, and a company that is doing fine. My friends are all building something with a giant number attached. And I am about to give up the operating job to write small cheques into other people's companies, which sounds like a demotion to almost everyone I know.",
    structured: ["25-34", "city", "startup founder"],
    options: [
      "Stay and run the company, collect the salary and the prestige",
      "Step out and write small cheques into founders I believe in",
      "Take a bigger, safer role at a large company and park the ambition",
    ],
    chosen: 1,
    reason:
      "Running something means I trade my hours one-for-one for its outcome, and my hours are the one thing I truly own. Writing a cheque is different: the money works while I sleep, my downside is capped at the cheque, and the upside rides anyone who does something extraordinary. Yes, it looks like I am stepping off the ladder. But I have started to think the ladder is the trap — you climb into a job so big that the job owns you, and you call it success because the title got longer. I would rather be a small owner of many things than a big employee of one thing. The fear was not starving. It was being boring at dinner parties for two years while my friends raised rounds. I decided that was a price I could pay to keep my time. It helped that I had already built and sold something once, so this was not faith, it was a second attempt with better information about myself. Still, the identity part was the hard part — there is no business card for 'person who writes cheques and thinks.'",
    historyAt: "2010",
    crowdNote: "Everyone said the interesting job was the one with the title, not the one with the cheques.",
    votesTotal: 1980,
    resonances: 3620,
    reviews: [
      {
        label: "3 years later",
        result:
          "A handful of cheques became the earliest money in companies that grew into household names. A few others went to zero, exactly as expected.",
        regret: 1,
        lesson: "Diversify your bets and concentrate your attention.",
        daysAgo: 2800,
      },
      {
        label: "1 year later",
        result:
          "The lonely part was real. For a year I had no team, no standups, no one to complain to, and I worried I had simply gotten worse at life.",
        regret: 3,
        lesson: "Optionality is expensive in a currency nobody warns you about: daily company.",
        daysAgo: 3200,
      },
    ],
    dissentSeed: [
      {
        handle: "no_warm_intros",
        reason:
          "Angel investing as a lifestyle is only open if you already have money and a network from a previous exit. For someone with neither, 'write small cheques' means 'you cannot play at all.' This is advice from the top of the ladder telling you to get off it.",
        likes: 866,
      },
      {
        handle: "base_rate_bob",
        reason:
          "Most angels lose money. The ones who don't usually get deal flow from a company they already built. He is quoting you returns from a position you cannot buy.",
        likes: 442,
      },
    ],
    commentSeed: [
      {
        handle: "left_the_title",
        text: "I quit my VP job to consult two years ago and nobody at dinner gets it. Reading this felt like being told I am not crazy.",
        likes: 208,
      },
    ],
  },
  {
    key: "blakely-spanx",
    handle: "lace_and_grit",
    theme: "career",
    source: "celebrity",
    celebrityName: "Sara Blakely",
    bioSource: "Blakely, interviews with NPR and Forbes (2012–2014)",
    situation:
      "I am 27, selling fax machines door to door in Florida, wearing pantyhose in the heat because that is the dress code. My legs are always a little too hot and a little too pale. One night I cut the feet off a pair of tights to wear under white pants and change how my body looked. I do not have money, a manufacturer, or a single contact in apparel.",
    structured: ["25-34", "suburb", "salesperson"],
    options: [
      "Keep grinding the sales job and forget the idea",
      "Spend two years and $5,000 inventing and selling a product nobody has asked for",
      "Pitch the idea to a big hosiery company and let them make it while I keep my job",
    ],
    chosen: 1,
    reason:
      "I had no business starting a company. I had $5,000 in savings, and I had to spend months cold-calling mill after mill because the ones run by men hung up when I said 'hosiery' and assumed I was a crank. What kept me going was not belief in a big opportunity. It was that every woman I described it to made the same face — relief. That face was my market research. I wrote my own patent from a textbook in the public library because lawyers wanted money I did not have. I gave myself a hard stop: two years, and if it did not work, I would go back to selling fax machines with a strange story. I was not brave. I was just unable to un-see the product once I had lived without it. What made me hesitate was not fear of failing but the arithmetic of the $5,000: if I spent it and lost, that was not just money, it was the evidence that the person who took me seriously had been wrong about me.",
    historyAt: "2000",
    crowdNote: "Everyone who loved her told her to keep the paycheck and pitch it to the big players.",
    votesTotal: 2740,
    resonances: 4710,
    reviews: [
      {
        label: "1 year later",
        result:
          "The first orders came from friends, then a department store buyer found me at a trade show. For two more years I still ran the whole thing out of my apartment.",
        regret: 2,
        lesson: "Early traction is quiet. It looks like nothing right up until it looks like everything.",
        daysAgo: 3400,
      },
      {
        label: "12 years later",
        result:
          "The product made me a self-made billionaire and I never took outside money. The two years of no salary, though, nearly broke my nerve.",
        regret: 1,
        lesson: "Iterating in the dark is survivable only if you set the clock before you start.",
        daysAgo: 1600,
      },
    ],
    dissentSeed: [
      {
        handle: "launch_lean",
        reason:
          "Everyone loves the ending and nobody mentions the $5,000 and the two years. Most people who cut their tights end up with ruined tights and a reminder that 'belief in a product' is not the same as a market.",
        likes: 501,
      },
      {
        handle: "patent_pragmatist",
        reason:
          "Writing your own patent from a library book worked for her, but it usually produces a weak claim. Advising people to skip counsel because she gambled and won is prescribing the lottery to a hopeful crowd.",
        likes: 262,
      },
    ],
    commentSeed: [
      {
        handle: "she_left_to_build",
        text: "I am still selling fax-machine-adjacent things for someone else. This is the push I needed to spend my evenings on the idea, not just my lunch break.",
        likes: 147,
      },
    ],
  },
  {
    key: "chesky-cereal",
    handle: "scrap_rafter",
    theme: "career",
    source: "celebrity",
    celebrityName: "Brian Chesky",
    bioSource: "Chesky, interviews; Airbnb 'Cereal Box' story, How I Built This (2017)",
    situation:
      "It is 2008 and my roommates and I are broke. We rented out air mattresses to strangers to pay rent, and now we are maxing out credit cards to keep the site alive. This month we literally launched a novelty cereal — special-election-themed boxes at $40 each — to raise money. It is a little humiliating and it is working.",
    structured: ["25-34", "city", "founder"],
    options: [
      "Give up on the rental site and get real jobs",
      "Sell collectible cereal to fund one more year of building",
      "Take investors' money early and give away control",
    ],
    chosen: 1,
    reason:
      "When your company is funded by selling three boxes of cereal, you learn what you actually believe. Somebody asked me: if you are embarrassed by this, why do you keep doing it? Because the thing underneath — strangers trusting each other enough to sleep in each other's homes — had started to feel like a real shift in how people travel, not a weekend hack. I was not brave enough to bet my career on it, so I did something smaller and more honest: I bet one more month, and then one more, on whatever strange thing kept the lights on. Cereal was humiliating and cereal worked. I stopped asking whether the idea was respectable and started asking whether it was still alive. It was. So I kept it alive one more week. The part I rarely admit: I was not confident, I was stubborn. Confident people fund the company and then sleep. I funded it with cereal and then lay awake running the same nervous loop, and the only thing that got me through was that quitting felt more expensive than continuing.",
    historyAt: "2008",
    crowdNote: "Almost everyone advised them to shelve it and apply for jobs while they still could.",
    votesTotal: 2670,
    resonances: 4890,
    reviews: [
      {
        label: "1 year later",
        result:
          "Cereal money and a seed round got us to a platform that started to grow on its own. By 2010 the growth was something we could not keep up with.",
        regret: 1,
        lesson: "Your first believers are often your first customers, not your first investors.",
        daysAgo: 3100,
      },
      {
        label: "6 years later",
        result:
          "The idea had become a global habit and a culture war at once. Success scaled the criticism along with the bookings.",
        regret: 2,
        lesson: "If it grows, so does every problem you papered over while surviving.",
        daysAgo: 1700,
      },
    ],
    dissentSeed: [
      {
        handle: "credit_card_ghost",
        reason:
          "Maxing out personal credit cards to fund a startup is sold here as scrappy grit. For most people it is simply debt that outlives the company and follows them into their thirties. The cereal was cute; the card statements still arrive.",
        likes: 634,
      },
    ],
    commentSeed: [
      {
        handle: "bootstrapped_mo",
        text: "I paid for my company's server bill with plasma donations for a year. Weird funding is still funding. Solidarity.",
        likes: 176,
      },
    ],
  },
  {
    key: "oprah-own-show",
    handle: "golden_hour_44",
    theme: "career",
    source: "celebrity",
    celebrityName: "Oprah Winfrey",
    bioSource: "Winfrey, What I Know For Sure (2014); early-career interviews (1983–1986)",
    situation:
      "I have a safe job as a news anchor in a good market, with a contract and a health plan, and everyone I work with thinks I am making a mistake. The offer on the table is a morning talk show in a bigger city with a smaller audience, a worse time slot, and less money. It could end my career in eighteen months.",
    structured: ["25-34", "city", "broadcaster"],
    options: [
      "Keep the anchor job and the security",
      "Take the failing talk show and rebuild it around being myself",
      "Ask for the anchor job in a larger market instead",
    ],
    chosen: 1,
    reason:
      "The anchor job was respectable and I was good at it, and that was the problem — good enough that I never had to risk anything. When I read copy written by someone else, I felt like a stranger doing a competent impression. The talk show scared me because it had no script and no safety: if it failed, it failed as me, not as a badly written segment. My father told me to take the safe route and I understood the logic. But I had already noticed that every time I tried to sound like the serious news woman, my voice went flat, and every time I went off-script and actually asked people things, I woke up. So the one calculation that mattered was: could I live with being safe and small? I decided I would rather fail as myself than succeed as a costume. The cost I accepted in advance was specific: if it failed, it failed in public, on my real name, with the story being 'she tried to be herself and it was not enough.' That was the sentence I had to be willing to hear before I could say yes.",
    historyAt: "1983",
    crowdNote: "Colleagues and family said taking a smaller, failing show was career suicide.",
    votesTotal: 3410,
    resonances: 5980,
    reviews: [
      {
        label: "3 years later",
        result:
          "The show went from last in its slot to first in the market, and then to the top of national syndication.",
        regret: 1,
        lesson: "Being yourself is a strategy, not a personality trait.",
        daysAgo: 4300,
      },
      {
        label: "10 years later",
        result:
          "The intimacy that made the show work also meant my personal life was public and picked apart for years. The job and the exposure came as one package.",
        regret: 2,
        lesson: "Every authentic thing you build costs you some privacy you cannot get back.",
        daysAgo: 2200,
      },
    ],
    dissentSeed: [
      {
        handle: "market_realist",
        reason:
          "Her 'failing talk show' came with a top-tier market and a syndication machine behind it. For a small-market anchor, betting on yourself usually means no second offer and a career that quietly ends. The risk was never symmetric.",
        likes: 728,
      },
    ],
    commentSeed: [
      {
        handle: "small_market_maya",
        text: "I anchor in a market of 200k and everyone tells me to be grateful. I cried reading this, then applied for a job that scares me.",
        likes: 315,
      },
    ],
    prevNodeKey: "bezos-quit-hedgefund",
  },
  {
    key: "van-gogh-painter",
    handle: "ochre_and_ash",
    theme: "career",
    source: "celebrity",
    celebrityName: "Vincent van Gogh",
    bioSource: "Van Gogh, Letters to Theo (1879–1890); Naifeh & Smith, Van Gogh: The Life (2011)",
    situation:
      "I am 27 and I have failed at everything respectable. I was an art dealer, then a teacher, then a preacher, and each one ended with me being asked to leave. My brother Theo sends me money I have not earned. Now I want to spend all my hours drawing and painting, which sounds like the least employable idea a man could have, and I cannot stop thinking about it.",
    structured: ["25-34", "small city", "unemployed"],
    options: [
      "Take any steady job and stop being a burden to my brother",
      "Commit fully to drawing and painting, accepting poverty and dependence",
      "Keep art as a hobby and find work that pays",
    ],
    chosen: 1,
    reason:
      "Theo was paying for a brother who kept failing, and I could feel how much that cost him. I told myself it would be easier to earn a wage and paint in the evenings. But I had already tried the evenings, and what I felt when I held charcoal was nothing like what I felt at any job. There is a difference between being unable to find work and being unfit for it, and I had finally figured out which one I was. So I did not ask Theo to fund a hobby. I asked him to fund a decision. I promised I would work harder than anyone alive at drawing, and that if I was wrong, the fault would at least be mine and not the world's. He said yes, and I started from the beginning, learning to draw like a child trying to see. I want to be honest that it did not stay this clean. There were weeks I was too poor and too ashamed to answer letters, nights I burned with doubt, and I often hated Theo for the debt I owed him as much as I loved him. Choosing this did not quiet the fear. It just gave the fear something worthy to fight against.",
    historyAt: "1880",
    crowdNote: "Family and pastors urged steady work; art looked like another failure on the way.",
    votesTotal: 2890,
    resonances: 5520,
    reviews: [
      {
        label: "10 years later",
        result:
          "In a single decade I made roughly 900 paintings and over a thousand drawings, and sold almost none of them. I died at 37 believing I had failed.",
        regret: 3,
        lesson: "Devotion and success are two different ledgers, and only one of them is yours to read.",
        daysAgo: 4500,
      },
      {
        label: "a century later",
        result:
          "The paintings nobody wanted became some of the most loved images ever made, and my letters became a kind of scripture for anyone who chooses the unemployable thing.",
        regret: 1,
        lesson: "The world can be wrong for a very long time without ever knowing it.",
        daysAgo: 900,
      },
    ],
    dissentSeed: [
      {
        handle: "bread_first",
        reason:
          "He was funded by his brother for a decade and consumed a family's resources while selling almost nothing. That is not a template for a modern person choosing art over rent — most people do not have a Theo, and glorifying this hides who actually paid the bill.",
        likes: 812,
      },
      {
        handle: "novelty_skeptic",
        reason:
          "The 'died unknown, became immortal' framing only works because we got to see the ending. Encouraging someone today to choose dependence over income because van Gogh did is survivorship bias written in oil paint.",
        likes: 404,
      },
    ],
    followUpKeys: ["maya-listen"],
    commentSeed: [
      {
        handle: "nightclass_noor",
        text: "I keep a spreadsheet of my 'reasonable' plan and a sketchbook of the real one. This is the only thing that ever made the sketchbook feel like a plan.",
        likes: 288,
      },
    ],
    prevNodeKey: "buffett-omaha",
  },
  {
    key: "arnold-heavyweight",
    handle: "iron_accord",
    theme: "career",
    source: "celebrity",
    celebrityName: "Arnold Schwarzenegger",
    bioSource: "Schwarzenegger, Total Recall (2012)",
    situation:
      "I am the best bodybuilder in the world, a title with almost no future. I want to act, and everyone in this town tells me the same beautiful, brutal things: you are too big, your accent is unfixable, change your name, and start small in a safe lane like villain roles. I have a career that pays now and a dream that might pay later.",
    structured: ["25-34", "megacity", "athlete"],
    options: [
      "Stay in bodybuilding and build a safe business around it",
      "Take small villain parts and rebuild myself as an actor slowly",
      "Change my name and accent and chase leading roles immediately",
    ],
    chosen: 2,
    reason:
      "Everyone gave me the smart advice, which was to be patient and small. But I looked at the safe path and did the actual math: spend five years as a villain with a funny voice and I become a genre actor, and a genre actor never becomes a leading man. My whole advantage was that nobody had ever seen a body like mine on screen, and that advantage dies the moment the industry files me under 'muscle guy.' So I kept the accent, kept the impossible surname, and refused the parts that would shrink me. I knew it was arrogant. I also knew that if I was right about being singular, patience would have thrown the singularity away. The bet was not on my acting. It was on my refusal to be small when small was the only safe thing on offer. I should be clear that this was a bet with other people's money and other people's patience behind it, and that I had already failed at things and knew the taste of being wrong loudly. I chose the loud version anyway, because the quiet version would have been permanent.",
    historyAt: "1970",
    crowdNote: "Casting directors and agents said his accent and build would keep him out of leading roles forever.",
    votesTotal: 2150,
    resonances: 3870,
    reviews: [
      {
        label: "10 years later",
        result:
          "The refusal to be small worked. By the early 1980s I was a leading man, and the accent I was told to lose became the brand.",
        regret: 1,
        lesson: "The flaw they tell you to fix may be the only thing you have.",
        daysAgo: 4100,
      },
      {
        label: "35 years later",
        result:
          "The singular image became a typecast cage too. By the time I wanted more serious parts, I was the action brand first and an actor second.",
        regret: 2,
        lesson: "The bet that makes you singular also decides what you can never be.",
        daysAgo: 1800,
      },
    ],
    dissentSeed: [
      {
        handle: "character_actor",
        reason:
          "The accent and size got him through, but most actors who refuse to be small simply stop being hired. Telling people to skip the safe lane is survivorship bias with a muscle mass attached.",
        likes: 559,
      },
    ],
    commentSeed: [
      {
        handle: "small_parts_sam",
        text: "I have been a working 'villain' actor for 9 years. The safe lane paid my mortgage. Both stories can be true, and yours got the movie poster.",
        likes: 213,
      },
    ],
    prevNodeKey: "maya-listen",
  },
  {
    key: "maya-listen",
    handle: "paper_lantern",
    theme: "other",
    source: "celebrity",
    celebrityName: "Maya Angelou",
    bioSource: "Angelou, I Know Why the Caged Bird Sings (1969)",
    situation:
      "I was seven when I was hurt, and my attacker was found dead soon after. I decided that my voice had killed him, so I stopped using it. For five years I spoke only to my brother — at school, in church, I stayed locked in my own quiet. A woman in my town kept handing me books and said I would never love poetry until I spoke it out loud with my own mouth.",
    structured: ["13-17", "small city", "student"],
    options: [
      "Stay silent and keep the safety of not being heard",
      "Speak again, slowly, beginning with memorized poems read aloud",
      "Leave school and disappear into work so no one expects words from me",
    ],
    chosen: 1,
    reason:
      "Staying quiet had worked. There was a version of me that could have finished childhood in silence and been safe and unreachable. But the book woman did something clever: she did not ask if I wanted to speak, she asked whether I loved the poem, and the only way to answer honestly was to say it out loud. I did the smallest possible test — memorized lines, then said them to one room. The first time I heard my own voice come back to me I cried, and I noticed something: the person I was afraid of was not in the room. He only existed where I did not speak. Silence had kept him alive inside me for five years. Speaking did not bring him back. It finally let him go. I started there, with someone else's poem, until I could bear to use my own words. The reason this looked sudden from outside is that the decision had been building in tiny increments nobody witnessed. It was not a single brave morning. It was years of being handed books, of hearing other people's poems, of slowly deciding that the quiet had stopped protecting me and started burying me.",
    historyAt: "1940",
    crowdNote: "Adults around her treated the long silence as something to be fixed or endured, not as a decision.",
    votesTotal: 2480,
    resonances: 5120,
    reviews: [
      {
        label: "20 years later",
        result:
          "The girl who could not speak became a woman who read her own poetry to the world, and the memoir about the silence taught strangers they were not alone.",
        regret: 1,
        lesson: "What you bury to stay safe keeps growing; what you say out loud can finally be put down.",
        daysAgo: 3000,
      },
      {
        label: "5 years later",
        result:
          "Learning to use the voice did not make it safe to use everywhere. There were stages and rooms where speaking still cost me, and I had to keep re-choosing it.",
        regret: 2,
        lesson: "Finding your voice is not a moment. It is a bill you pay again and again.",
        daysAgo: 2400,
      },
    ],
    dissentSeed: [
      {
        handle: "trauma_first",
        reason:
          "The world loves the arc from silence to speaking. But plenty of people pushed to 'find their voice' before they are ready are re-traumatized by it. Her path was hers; treating speaking as the cure for everyone is dangerous advice.",
        likes: 741,
      },
    ],
    commentSeed: [
      {
        handle: "quiet_for_9years",
        text: "I barely spoke in my house from 11 to 16. Nobody noticed, which is its own kind of wound. This undid me a bit.",
        likes: 362,
      },
    ],
    prevNodeKey: "van-gogh-painter",
    followUpKeys: ["arnold-heavyweight"],
  },
  {
    key: "serena-pregnant-major",
    handle: "hard_court_rose",
    theme: "career",
    source: "celebrity",
    celebrityName: "Serena Williams",
    bioSource: "Williams, interviews; 2017 Australian Open title run; Vogue (2018)",
    situation:
      "I am at the top of my sport, and two weeks into a Grand Slam I find out I am about to be a mother. My coach and my family already know. I am winning matches while carrying a secret that could change what my body is allowed to do. The doctor's guidelines for the coming weeks are only the beginning of a much harder question.",
    structured: ["35-44", "megacity", "athlete"],
    options: [
      "Withdraw quietly and protect the pregnancy",
      "Keep competing and finish the tournament I started",
      "Finish this event, then disappear for a year without telling anyone why",
    ],
    chosen: 1,
    reason:
      "I did not decide this out of a slogan about winning. I decided because I had spent my whole life learning to read my body, and it was telling me I was fine — this week, in this place. But the harder part was the second thought: the fear was not the tennis, it was the rooms after. If I stopped, everyone would have a theory about a 'comeback,' and I would have to fight for respect all over again. So I kept playing and made a private deal with myself — the moment anything felt wrong, the tournament ended, no conversation. It did not feel wrong. I won while seven weeks pregnant and told almost no one. The reason was not that I was fearless. It was that I refused to let fear make the decision before the fact had a chance to. What I did not have in that moment was the language to explain it, so I mostly stayed silent about the choice even with the people closest to me, which turned out to hurt them in ways I did not foresee.",
    historyAt: "2017",
    crowdNote: "Doctors and most advisors would have said withdraw immediately; the sport expected an announcement.",
    votesTotal: 3760,
    resonances: 6210,
    reviews: [
      {
        label: "2 months later",
        result:
          "I won the title without dropping a set. Almost nobody knew I was pregnant until months afterward.",
        regret: 1,
        lesson: "You can do the impossible thing quietly, without needing anyone's permission first.",
        daysAgo: 2650,
      },
      {
        label: "1 year later",
        result:
          "The birth nearly killed me — a blood clot and several surgeries. Knowing what I know now, competing was fine, but having to fight to be believed about my own body afterward was the real emergency.",
        regret: 2,
        lesson: "Winning the match does not protect you from the system you still have to fight after it.",
        daysAgo: 2100,
      },
    ],
    dissentSeed: [
      {
        handle: "obs_md",
        reason:
          "Please stop framing this as universally brave. Clots and hemorrhage are still leading causes of maternal death; a woman without elite medical support could die doing this. Her outcome was a triumph of resources as much as will.",
        likes: 1055,
      },
      {
        handle: "role_model_pressure",
        reason:
          "When the most visible female athlete does this, every pregnant professional quietly hears 'so why can't you?' That is a burden dressed as inspiration.",
        likes: 388,
      },
    ],
    commentSeed: [
      {
        handle: "track_and_bump",
        text: "I ran until 34 weeks and got told I was selfish the whole time. Thank you for making it clear the decision was mine to make.",
        likes: 267,
      },
    ],
  },
  {
    key: "bowie-kills-ziggy",
    handle: "stardust_echo",
    theme: "career",
    source: "celebrity",
    celebrityName: "David Bowie",
    bioSource: "Bowie, 1973 Hammersmith Odeon retirement announcement; Buckley, Strange Fascination (1999)",
    situation:
      "The character I invented has become bigger than me. Thousands of kids dress like Ziggy, the shows sell out instantly, and the band is finally making real money. And I can feel the whole thing turning into a costume I am not allowed to take off. I am about to walk out on stage and tell them it is over.",
    structured: ["25-34", "megacity", "musician"],
    options: [
      "Keep touring as Ziggy, ride the success for years",
      "Kill the character publicly and start again from nothing",
      "Hand the act to a new singer and step behind the scenes",
    ],
    chosen: 1,
    reason:
      "The night I did it, I told the audience it was the last show we would ever do, and I saw the shock ripple across the room, and part of me wanted to take it back. The money was real. The adoration was real, and there is no drug like it. But I had built the character to say things I could not say as myself, and it had started saying them for me — I was becoming the mask. I did the calculation in artist terms, not financial ones: if the costume is so good that I can hide inside it forever, I will never find out what I sound like without it. So I destroyed the most valuable thing I owned, on purpose, in public. It was not brave. It was the only way I knew to stay alive as a person instead of a brand. I had a manager who thought I was destroying a fortune, and I did it anyway, and the truth is I partly did it out of fear — fear of becoming a man who only knew how to be one invented character for the rest of his life.",
    historyAt: "1973",
    crowdNote: "The industry and the fans begged him not to break up the most successful act he had.",
    votesTotal: 3290,
    resonances: 5870,
    reviews: [
      {
        label: "2 years later",
        result:
          "The character was gone and I reinvented myself completely, again and again, for the rest of my life. The refusal to repeat became the whole career.",
        regret: 1,
        lesson: "If your greatest hit becomes a cage, the exit is part of the art.",
        daysAgo: 3900,
      },
      {
        label: "10 years later",
        result:
          "The fans never fully forgave the night I killed what they loved. Some of them are still angry, decades later, and I understand why.",
        regret: 2,
        lesson: "You are allowed to end the thing. They are allowed to grieve it forever.",
        daysAgo: 2300,
      },
    ],
    dissentSeed: [
      {
        handle: "working_musician",
        reason:
          "Killing your biggest act is a luxury of the already-famous. A working musician with one hit band does not get to be an auteur about it — they get to keep the thing that pays until the demand dies, whether they like the costume or not.",
        likes: 596,
      },
    ],
    commentSeed: [
      {
        handle: "fan_since_then",
        text: "I was 15 in that hall. I have never forgiven him and I have never stopped listening. Both, forever.",
        likes: 341,
      },
    ],
  },
  {
    key: "socrates-hemlock",
    handle: "agora_dust",
    theme: "other",
    source: "celebrity",
    celebrityName: "Socrates",
    bioSource: "Plato, Apology and Crito; Xenophon, Memorabilia",
    situation:
      "The city has convicted me and sentenced me to death. My friends have arranged an escape — the guards are bribed, the boat is waiting, and it would be easy. All I have to do is leave, and I can keep asking my questions somewhere else. I am 70, and no one is forcing me to drink anything.",
    structured: ["65+", "city", "teacher"],
    options: [
      "Escape with my friends and live in exile",
      "Stay and accept the sentence",
      "Appeal and promise to stop philosophizing in public",
    ],
    chosen: 1,
    reason:
      "My friend came to me in the cell and made the escape sound like the obvious, loyal, human thing to do. I asked him a question instead: if I have spent my whole life teaching that a person should obey the just law of their city even when it goes badly for them, what am I teaching if I run the moment it goes badly for me? I would have escaped with my body and lost the only thing I ever owned — the argument. And there was a quieter reason: I am old. Exile means arriving in a strange town as a tired man with no questions left worth asking. I told him I would rather drink the cup in this city, where my life had a shape, than wander somewhere new where it would only be a story about a man who ran. I did not feel certain. I remember the boat he described, and I remember wanting it, and then I remember asking whether the man on that boat would still be able to teach the thing he had spent his life teaching.",
    historyAt: "399 BC",
    crowdNote: "His closest friends treated escape as obvious; most people would have taken the boat.",
    votesTotal: 2050,
    resonances: 4180,
    reviews: [
      {
        label: "immediately after",
        result:
          "I drank the hemlock calmly, surrounded by weeping friends I had to cheer up. I chose the death, and the manner of it, so that the argument would survive where I would not.",
        regret: 1,
        lesson: "Sometimes the body is the cheaper thing to lose.",
        daysAgo: 4700,
      },
      {
        label: "through history",
        result:
          "The questions outlived the city, the empire, and the language they were asked in. But the people who loved me were left behind in a room with a corpse.",
        regret: 3,
        lesson: "A principle that costs only you is easy to keep. A principle that costs the people who love you is a different kind of choice.",
        daysAgo: 1900,
      },
    ],
    dissentSeed: [
      {
        handle: "break_the_cycle",
        reason:
          "Choosing to die for a principle is often romanticized as noble, but it also validates the court that condemned him. Escaping would have denied the state its kill and let the questions continue. Heroic stubbornness is still stubbornness.",
        likes: 628,
      },
      {
        handle: "widow_in_athens",
        reason:
          "He made a beautiful argument and then left his friends and family to carry his choice for the rest of their lives. Nobody asked them whether they wanted that sentence too.",
        likes: 419,
      },
    ],
    commentSeed: [
      {
        handle: "lawyer_who_left",
        text: "I quit a firm on principle and it cost me everything, and nobody writes philosophy about me. I get it. We are not all sentenced by a city.",
        likes: 155,
      },
    ],
  },
  {
    key: "marcus-coin",
    handle: "stone_basilica",
    theme: "other",
    source: "celebrity",
    celebrityName: "Marcus Aurelius",
    bioSource: "Marcus Aurelius, Meditations (c. 170–180 AD)",
    situation:
      "I am the most powerful man alive, and my body is failing me. I could spend the little energy I have on the pleasures, luxuries, flatterers, and comforts that come with the throne, and nobody would stop me — emperors have done exactly that. Instead I sit in a cold tent on a border and write notes to myself about self-control.",
    structured: ["45-54", "megacity", "head of state"],
    options: [
      "Take the soft imperial life the court offers",
      "Live simply and use the remaining energy on duty and self-discipline",
      "Step back and let others rule while I protect my health",
    ],
    chosen: 1,
    reason:
      "The temptation here is subtler than people think. It is not that I want to be cruel. It is that power makes laziness feel like efficiency. If I let the flatterers decide, everything still runs, because an empire built on habit keeps going whether or not its emperor is awake. That is precisely the danger. I started writing to myself because I noticed I was becoming a man who could be replaced by a system and never notice. So I set the smallest possible test: each morning, do the hard, unglamorous, useful thing before anyone can praise me for it. I do not write these notes because I am wise. I write them because the throne is a machine that manufactures excuses, and I wanted at least one place where the excuses could not reach me. I am not describing a heroic discipline. Most mornings I failed at it and wrote down that I had failed, and that record of failing is the only honest part of what history kept.",
    historyAt: "170",
    crowdNote: "The court expected an emperor to live like an emperor; his austerity looked like madness to them.",
    votesTotal: 3010,
    resonances: 5660,
    reviews: [
      {
        label: "on the frontier",
        result:
          "I kept the discipline to the end, dying in a military camp, writing notes to no one, and the notes became the only emperor's diary anyone still reads.",
        regret: 1,
        lesson: "The most private discipline outlives the most public power.",
        daysAgo: 4400,
      },
      {
        label: "as a father",
        result:
          "My austerity did not save my son, who ruled after me as the opposite of everything I wrote down. Watching that was the most painful thing I did not write about.",
        regret: 2,
        lesson: "You can govern yourself perfectly and still lose the lesson at your own dinner table.",
        daysAgo: 2000,
      },
    ],
    dissentSeed: [
      {
        handle: "stoic_critic",
        reason:
          "A man with an empire beneath him can afford austerity — it costs him nothing he actually wanted. Telling people with real scarcity to 'want less' is the philosophy of those who already have enough. Meditations is a powerful diary by a very comfortable sufferer.",
        likes: 747,
      },
    ],
    commentSeed: [
      {
        handle: "trying_the_notes",
        text: "I started a morning journal because of him and abandoned it twice. He kept his up in a war camp. I have no excuse.",
        likes: 193,
      },
    ],
  },
  {
    key: "rosa-seat",
    handle: "seam_and_signal",
    theme: "other",
    source: "celebrity",
    celebrityName: "Rosa Parks",
    bioSource: "Parks, Rosa Parks: My Story (1992)",
    situation:
      "I am on my way home from another long day of sewing, and the bus driver tells me to give up my seat in the middle section so a white passenger can sit. I know this driver; he once threw me off this very bus. My feet hurt, my back hurts, and I have spent years quietly working on voting rights. Tonight I do not want to move.",
    structured: ["35-44", "city", "seamstress"],
    options: [
      "Give up the seat quietly like every other night",
      "Refuse, knowing what happens next",
      "Get off the bus and avoid the arrest without confronting it",
    ],
    chosen: 1,
    reason:
      "People later said I stayed because my feet were tired. My feet were tired, but that is not why. I was tired of surrendering — of doing the small, daily, invisible arithmetic where my dignity was the number that always got spent. I had already chosen this fight many times in smaller ways: registering to vote twice when it was denied, working with the chapter for years. What changed that evening was that I finally understood I could not fix the system by being a polite exception inside it. If I stood up and got off the bus, I would be home safe and nothing would move. If I stayed, the arrest would become a fact other people could not ignore. I was not sure it would work. I was sure that one more quiet surrender would cost more than the night in jail. What I did not know was how long it would go on, or that the date would become one people memorized. I sat there as a woman with a tired back, not as a symbol. The symbol was made afterward, by other people, out of a decision that felt to me like the last reasonable refusal left.",
    historyAt: "1955",
    crowdNote: "Almost everyone in her position moved; the cost of refusing was arrest and the loss of her job.",
    votesTotal: 3920,
    resonances: 7020,
    reviews: [
      {
        label: "13 months later",
        result:
          "The arrest sparked a 381-day bus boycott that ended segregation on the buses. The movement had been built for years; my refusal was the moment it could finally act.",
        regret: 1,
        lesson: "A single decision only works if hundreds of quiet decisions came first.",
        daysAgo: 3300,
      },
      {
        label: "years later",
        result:
          "I lost my job and received death threats. I had to leave the city I was born in and start again in Detroit. The victory was real and so was the price.",
        regret: 2,
        lesson: "Being the symbol is not the same as being safe. Both are the deal.",
        daysAgo: 2200,
      },
    ],
    dissentSeed: [
      {
        handle: "organizer_notes",
        reason:
          "The lone-hero framing erases the network — the NAACP, the church women, the organizers who had planned a challenge for exactly this. Treating a collective strategy as one woman's spontaneous courage teaches the wrong lesson about how change works.",
        likes: 889,
      },
    ],
    commentSeed: [
      {
        handle: "everyday_refusal",
        text: "I am not brave enough for the big moment. But this reminds me the small ones add up, and I can stop being the polite exception where I am.",
        likes: 302,
      },
    ],
  },
  {
    key: "frankl-meaning",
    handle: "ash_and_light",
    theme: "other",
    source: "celebrity",
    celebrityName: "Viktor Frankl",
    bioSource: "Frankl, Man's Search for Meaning (1946)",
    situation:
      "I am in a camp. My manuscript, my life's work, was taken from me, my wife and parents are somewhere I cannot reach, and every day the guards decide at random who is allowed to keep existing. There is no option here that changes whether I live. The only thing left is what I decide to make of the inside.",
    structured: ["35-44", "small city", "psychiatrist"],
    options: [
      "Stop resisting inside and become numb to survive",
      "Hold to the belief that meaning can be found even here",
      "End it and stop the suffering",
    ],
    chosen: 1,
    reason:
      "It would be dishonest to say I chose hope the way you choose a job. Some days the choice was only a few minutes long — to think of my wife's face, to finish one thought about the book I might rewrite, to imagine giving a lecture about all of this to students who would be free. That imagining was not fantasy; it was work, and I did it because the prisoners around me who gave up pinned their whole existence to the date of liberation and died before it came. So I decided that if I survived, the suffering would have to mean something — that I would use it to understand people, not just to have endured it. The decision was not to escape. The decision was about what I would still be, on the inside, when there was nothing left to be. I want to be honest about what this cost: holding to meaning did not make me kinder or calmer. Some prisoners resented my talk of inner freedom because their bodies were cold and their hunger was real and my words did not feed them. I was not always sure I was right. I only knew the alternative — that the horror would be the final word — was the one thing I could not accept.",
    historyAt: "1944",
    crowdNote: "In that place, numbness and giving up were the norm; deciding on meaning looked almost irrational.",
    votesTotal: 3560,
    resonances: 6480,
    reviews: [
      {
        label: "after liberation",
        result:
          "I survived, and I found out my wife and parents did not. I rewrote the taken manuscript and wrote a book about that inner decision that reached millions.",
        regret: 2,
        lesson: "Meaning does not erase the loss. It is the thing you carry while the loss stays exactly the size it is.",
        daysAgo: 3600,
      },
      {
        label: "40 years later",
        result:
          "The book became one of the most widely read accounts of finding a reason to live. Some people used it to blame their own depression on not finding enough meaning, which I never intended.",
        regret: 3,
        lesson: "When you teach that meaning is possible, some people hear that their pain is a personal failure.",
        daysAgo: 1500,
      },
    ],
    dissentSeed: [
      {
        handle: "dignity_without_lesson",
        reason:
          "The idea that suffering must be made to 'mean something' quietly tells grieving people their pain requires a purpose to be valid. Sometimes suffering is just loss, and demanding a redemption story from it can add shame to grief.",
        likes: 671,
      },
      {
        handle: "survivor_bias_le",
        reason:
          "We only hear the inner-choice story from the people who made it out. For the millions who did not, the theory cannot be tested — and the living get to explain the dead as people who failed to choose meaning. That is a cruel read.",
        likes: 498,
      },
    ],
    commentSeed: [
      {
        handle: "still_here_22",
        text: "I did not survive any camp. I survived my own version of nothing. And what kept me was a face, like he says. Thank you for putting words to it without pretending it was easy.",
        likes: 421,
      },
    ],
  },
  {
    key: "curated-teacher-cut",
    handle: "chalk_dust_line",
    theme: "career",
    source: "curated",
    celebrityName: undefined,
    bioSource: "Curated composite — not a real individual",
    situation:
      "Twenty years in the same company. I manage eleven people, I know the systems better than almost anyone, and I am good at a job I stopped caring about around year nine. A local school needs a math teacher and would pay me less than half what I make, and I keep circling the listing at midnight like it is a forbidden thing.",
    structured: ["45-54", "suburb", "middle manager"],
    options: [
      "Stay in management, maximize earnings, retire early",
      "Take the pay cut and teach",
      "Keep the job and volunteer at the school on weekends as a halfway step",
    ],
    chosen: 1,
    reason:
      "The math is not pretty. We would lose the second car, the big vacation, the ability to say yes to every family ask. My partner asked me one honest question: are you chasing a fantasy of meaning, or are you actually done here? I sat with that. The truth was both, and the second part was bigger. I had spent years being the person who solved other people's spreadsheets and called it a career, and I started noticing that I could not remember the last time I learned something that scared me. I gave myself a test before quitting: I taught one night class for a term, unpaid, to see if it was real. I loved it and I was mediocre at it, which was exactly the point. I was not escaping to a dream. I was choosing to be a beginner again while I still had enough years to be good at something I chose.",
    historyAt: undefined,
    crowdNote: "Friends and family saw giving up a senior salary for a classroom as a midlife crisis with a pension attached.",
    votesTotal: 1680,
    resonances: 3090,
    reviews: [
      {
        label: "3 years later",
        result:
          "I am a much better teacher than I was and a much worse saver. We drive one car. I sleep through the night for the first time in ten years, and that part is not in the budget.",
        regret: 2,
        lesson: "The pay cut is permanent. The relief is also permanent. Neither one cancels the other.",
        daysAgo: 1200,
      },
      {
        label: "5 years later",
        result:
          "The money stress is real every single month. But two students from my first class are now studying math because of something I said, and I cannot personally price that.",
        regret: 1,
        lesson: "Find out whether you want the meaning or the escape before you burn the bridge to get it.",
        daysAgo: 800,
      },
    ],
    dissentSeed: [
      {
        handle: "run_the_numbers",
        reason:
          "This is survivorship of the comfortable. Most people who halve their income at 45 cannot find out later that it was fine — they simply run out. 'Meaning is worth the money' is advice that only works if the money was optional to begin with.",
        likes: 523,
      },
    ],
    commentSeed: [
      {
        handle: "midlife_on_paper",
        text: "I have the same midnight bookmark. The advice to test it first for free is the only useful thing I have read about this in years.",
        likes: 178,
      },
    ],
  },
  {
    key: "curated-immigrant-reset",
    handle: "new_salt_old_sea",
    theme: "location",
    source: "curated",
    celebrityName: undefined,
    bioSource: "Curated composite — not a real individual",
    situation:
      "In my home country I was a respected professional with my own practice and my name on the door. I moved here for my family's future, and the credential I spent a decade earning is not recognized. So I am choosing between starting my career over as a beginner at 39, or taking a job that feeds us but slowly erases the professional I still am inside.",
    structured: ["35-44", "city", "former professional"],
    options: [
      "Retake the exams and start the career over here",
      "Take a stable job in a different field and keep my family secure",
      "Move back home and undo the entire migration",
    ],
    chosen: 0,
    reason:
      "Moving back was the fantasy I let myself have on bad nights, but I knew it was a fantasy where the door closes behind you and does not open the same way twice. The real choice was between two kinds of pride. One was quick — a job that paid now and made me a provider, which mattered. The other was slower and humiliating — sitting in a classroom at 39 with students half my age, failing exams in a language I still think in second. What decided it was not ambition. It was the look on my daughter's face when she said, in her new accent, that she wanted to be like me. I could not be a person who had given up on the thing that made her say that. So I took the exam path, and the first time I failed it, I told nobody, and I studied again.",
    historyAt: undefined,
    crowdNote: "The practical advice from everyone was to take the stable job and stop chasing a credential that no longer transfers.",
    votesTotal: 2020,
    resonances: 3760,
    reviews: [
      {
        label: "2 years later",
        result:
          "I passed on the third attempt. I started at the bottom of a field I once led, made less than half my old salary, and it was still the best year of my adult life.",
        regret: 1,
        lesson: "Starting over is not going backward. It is a different road with the same name.",
        daysAgo: 1400,
      },
      {
        label: "4 years later",
        result:
          "The years of retraining cost us savings we never recovered and my partner carried the load for a long time. I owe that debt in ways a salary cannot show.",
        regret: 2,
        lesson: "The person who subsidizes your restart is part of the decision. Make it together or pay for it alone.",
        daysAgo: 900,
      },
    ],
    dissentSeed: [
      {
        handle: "transferable_truth",
        reason:
          "The story celebrates grit, but the reason the credential did not transfer is a policy choice that punishes immigrants. Framing a broken system as a personal test of character lets the system off the hook and blames those who do not pass for not wanting it enough.",
        likes: 617,
      },
    ],
    commentSeed: [
      {
        handle: "third_attempt_too",
        text: "I failed my equivalency exam twice and I am studying for the third. I did not tell my family either. Reading this at 2am I finally felt seen.",
        likes: 259,
      },
    ],
  },
  {
    key: "curated-caregiver-quit",
    handle: "vigil_light",
    theme: "relationship",
    source: "curated",
    celebrityName: undefined,
    bioSource: "Curated composite — not a real individual",
    situation:
      "My mother has been given a diagnosis with a timeline. I have a job I cannot really afford to leave, a boss who has been decent, and no sibling who can take the weight. The care she needs is not something I can do at 6am and 10pm around a full workweek. Money is the one thing I cannot buy more of, and time is the one thing she is running out of.",
    structured: ["35-44", "suburb", "office worker"],
    options: [
      "Keep the job and hire whatever help I can afford",
      "Quit and be the one who is there, accepting the financial hit",
      "Reduce to part-time and try to hold both",
    ],
    chosen: 1,
    reason:
      "The spreadsheet said hire help. I ran it a hundred times — my salary, the cost of care, the retirement I would lose, the years it would take to rebuild. It never stopped making sense on paper. What it could not show me was the specific thing I had already learned from a friend's grief: the guilt is not about hours. It is about presence. If I kept the job and paid a stranger, I would be the daughter who provided, and I knew that version of me would spend the rest of my life wondering what we talked about in the last months. So I quit. It was terrifying and it was not noble — I am not saint, some days I resented every minute of it. I chose it because I would rather be broke and tired at her bedside than solvent and absent, and because you can rebuild a career with no memory attached, and you cannot rebuild this.",
    historyAt: undefined,
    crowdNote: "Most people advised keeping the income and paying for care; quitting looked financially reckless.",
    votesTotal: 2310,
    resonances: 4490,
    reviews: [
      {
        label: "8 months later",
        result:
          "She died in the spring, and I was in the room. I would not trade that room for the salary. I am now 43 with a gap in my resume and a savings account that scares me.",
        regret: 1,
        lesson: "Choose the thing you will not be able to redo. The money has more chances than she did.",
        daysAgo: 700,
      },
      {
        label: "2 years later",
        result:
          "The career never fully came back the way I assumed it would. Two years out cost me a promotion I would have had and a pension I will not recover.",
        regret: 3,
        lesson: "Presence is worth the price, but pretending the price is small makes the bill hit harder when it arrives.",
        daysAgo: 400,
      },
    ],
    dissentSeed: [
      {
        handle: "hired_help_here",
        reason:
          "Quitting is presented as the only loving choice, which quietly shames people who keep working and pay professionals to care. Not everyone can afford to stop earning, and a good caregiver is not a lesser act of love than a daughter who burns out at the bedside.",
        likes: 704,
      },
    ],
    commentSeed: [
      {
        handle: "still_working_daughter",
        text: "I kept my job and my sister quit. Both of us feel guilty and only one of us has no income. Thank you for saying both roads cost something.",
        likes: 336,
      },
    ],
  },
];

import { CELEB_BUSINESS } from "./celebBusiness";

export const CELEBRITIES: RawNode[] = [...CELEB_BUSINESS, ...CELEB_REST];