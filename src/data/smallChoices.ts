import type { RawNode } from "./rawType";

// Everyday crossroads — small, decidable-in-a-week choices.
// Curated composites; short reasons, one quick review each.
export const SMALL_CHOICES: RawNode[] = [
  {
    key: "sm-ask-boss-cut",
    handle: "drone_of_monday",
    theme: "career",
    source: "curated",
    situation:
      "My manager keeps adding 'just one more thing' to my plate. Since a colleague left in spring and nobody replaced her, I have been quietly doing two jobs. I wrote an email asking to reset my scope. It has been sitting in my drafts for nine days.",
    structured: ["25-34", "city", "office worker"],
    options: [
      "Send the email and ask to drop two projects",
      "Keep absorbing it and hope someone notices",
      "Say nothing and start looking quietly instead",
    ],
    chosen: 0,
    reason:
      "I rewrote that email maybe fifteen times because I kept hearing my mother's voice telling me to be grateful for any job. The real fear was not being fired, it was being seen as the one who cannot cope. So I did the smallest math I could: the worst realistic outcome was one awkward conversation, and the best was getting my weekends back. I decided I could survive awkward. I sent it at 8:40 in the morning, before I could re-read it again.",
    votesTotal: 320,
    resonances: 212,
    reviews: [
      {
        label: "11 days later",
        result:
          "He did not push back at all. He said he assumed I would speak up if I needed to, which stung a little, but he moved one project off me the same week.",
        regret: 1,
        lesson: "The conversation you rehearse for nine days usually takes six minutes.",
        daysAgo: 6,
      },
    ],
    dissentSeed: [
      {
        handle: "squeaky_wheel",
        reason:
          "This only works when you are hard to replace. In a soft job market, raising your hand is how you get quietly managed out. 'Just ask' is advice that assumes leverage most people do not have.",
        likes: 96,
      },
    ],
  },
  {
    key: "sm-adopt-dog",
    handle: "wet_nose_light",
    theme: "relationship",
    source: "curated",
    situation:
      "A skinny dog has been sleeping under my building's stairwell for a week. She lets me near her now. She is not chipped. The shelter says if I bring her in, she goes on a list, and the list is crowded. I work long hours and my lease says no pets.",
    structured: ["25-34", "city", "renter"],
    options: [
      "Take her home and deal with the landlord later",
      "Call the shelter and let them handle it",
      "Feed her outside but leave her where she is",
    ],
    chosen: 0,
    reason:
      "I am not someone who can take a dog. That is the sentence I kept saying, and every time I said it, she was still under the stairs in the rain. My lease, my hours, my budget — all real. But the question was narrower than I was pretending: not can I keep her forever, but can I get her through this month and figure the rest out. I told myself if the vet says she is in danger, that is different, and if she is fine, then I have bought myself time to be a better person than my excuses.",
    votesTotal: 540,
    resonances: 388,
    reviews: [
      {
        label: "9 days later",
        result:
          "The landlord said yes for a small pet deposit. The vet said she was mostly fine. She sleeps on my feet now and I have seen my own city at 6am for the first time in years.",
        regret: 1,
        lesson: "Most 'I can't' is really 'I don't want to rearrange my life,' which is still a choice.",
        daysAgo: 5,
      },
    ],
    dissentSeed: [
      {
        handle: "landlord_facts",
        reason:
          "Encouraging people to take animals home and sort out housing later is how dogs end up back on the street when the landlord says no or the deposit doubles. Compassion without a plan is just another abandonment with extra steps.",
        likes: 143,
      },
    ],
  },
  {
    key: "sm-wedding-toast",
    handle: "toast_truth",
    theme: "relationship",
    source: "curated",
    situation:
      "My best friend is getting married. She asked me to give the toast, and she assumes it will be funny and warm. I know something about her fiancé that she does not — nothing criminal, but a debt and a lie he told her last year, and I have been carrying it for months.",
    structured: ["25-34", "city", "friend"],
    options: [
      "Give the warm toast and tell her privately, after",
      "Say something true but veiled during the toast",
      "Give the toast and say nothing at all, ever",
    ],
    chosen: 0,
    reason:
      "The wedding is not the place. I knew that immediately, even though part of me wanted the drama of saying it out loud in a room that would have to listen. The honest question was why I was carrying this: was it to protect her, or to unburden myself? It was mostly the second, and that is why the toast stays warm. So I decided the toast is a gift and the information is a debt. I will pay the debt on a Tuesday, in her kitchen, where she can be angry and ask questions and not have to perform a happy face in front of 120 people.",
    votesTotal: 470,
    resonances: 341,
    reviews: [
      {
        label: "12 days later",
        result:
          "I gave the toast, she cried. Two weeks later I told her in her kitchen. It did not go well. She was furious at me first, then at him. They are still together and it is not my call.",
        regret: 3,
        lesson: "Doing the right thing at the right time still does not mean anyone thanks you for it.",
        daysAgo: 9,
      },
    ],
    dissentSeed: [
      {
        handle: "knower_burden",
        reason:
          "She knew for months and chose the most convenient moment for herself — after the gifts, after the vows. That is not discretion, that is cowardice with good manners. She got to keep the friendship warm while her friend made a decision on incomplete information.",
        likes: 187,
      },
    ],
  },
  {
    key: "sm-tell-secret",
    handle: "held_breath_29",
    theme: "relationship",
    source: "curated",
    situation:
      "I have been sober for eight months and almost nobody knows why I disappeared from everything last year. My closest friend thinks I just went quiet on her. She asked me this week if she did something wrong. I can keep the excuse or tell her the truth about where I was.",
    structured: ["25-34", "city", "office worker"],
    options: [
      "Tell her the real reason I vanished",
      "Keep it vague and protect the privacy of the hardest year",
      "Tell her a partial version so the friendship survives without the whole story",
    ],
    chosen: 0,
    reason:
      "My instinct was to say 'it was a health thing' and move on, because that is a sentence people do not question. But she asked me directly if she had hurt me, and I realized my privacy was quietly making her carry blame that was not hers. That decided it. The secret was mine to keep, but the guilt I had accidentally handed her was not. I wrote it down before I called her so I would not edit the hard parts out, and I said the whole thing in three sentences and then let her be quiet.",
    votesTotal: 610,
    resonances: 352,
    reviews: [
      {
        label: "7 days later",
        result:
          "She did not flinch. She said she was proud of me and then got weirdly quiet, and later admitted she had told one other friend. I was angry for a day, then let it go.",
        regret: 2,
        lesson: "Confiding in someone does not make them a vault. Decide what you can live with being shared.",
        daysAgo: 7,
      },
    ],
    dissentSeed: [
      {
        handle: "keep_it_closed",
        reason:
          "Not everyone needs to know your recovery. There is real power in privacy and the piece quietly shames people who choose not to disclose. Tell the truth when it heals you, not because you owe someone a confession.",
        likes: 118,
      },
    ],
  },
  {
    key: "sm-neighbor-noise",
    handle: "thin_walls_74",
    theme: "other",
    source: "curated",
    situation:
      "The apartment above me plays bass-heavy music until 1am three nights a week. I have asked twice, politely, and both times it stopped for a week and crept back. I am not sleeping. The building manager says it is a 'tenant dispute' and has not done anything.",
    structured: ["25-34", "city", "renter"],
    options: [
      "File a formal noise complaint and let the building handle it",
      "Go up one more time and try to make it personal",
      "Buy noise-cancelling headphones and accept it",
    ],
    chosen: 0,
    reason:
      "I hated the idea of being the neighbor who files complaints, because I know how that story ends for the complainer. But I noticed I was rehearsing it as if a form was an insult. It is not. The system exists exactly for this. My exception was that I wanted to keep being liked by someone I do not even know. I decided surviving on four hours of sleep is not a personality. I filed the complaint and stopped pretending the headphones were a solution.",
    votesTotal: 260,
    resonances: 158,
    reviews: [
      {
        label: "6 days later",
        result:
          "The complaint triggered a warning and a couple of formal steps. The music mostly stopped. The neighbor now nods at me in the lift with no warmth, which is a fair price.",
        regret: 2,
        lesson: "Getting what you need sometimes costs the version of the relationship you wanted.",
        daysAgo: 8,
      },
    ],
    dissentSeed: [
      {
        handle: "thin_wall_realist",
        reason:
          "Filing a complaint works until your lease renewal suddenly goes up, or the other tenant escalates. For renters with no security, the official channel is a trap that punishes the complaint-filer first.",
        likes: 77,
      },
    ],
  },
  {
    key: "sm-same-city-job",
    handle: "commute_clock",
    theme: "career",
    source: "curated",
    situation:
      "I got an offer for the same role at a competitor in the same city. It is a 15% raise and a shorter commute, but I would be starting from zero on trust, and my current team finally likes me. The offer expires in four days.",
    structured: ["25-34", "city", "engineer"],
    options: [
      "Take the offer and the raise",
      "Stay, and use the offer to ask for a match",
      "Turn it down and stop looking for a while",
    ],
    chosen: 0,
    reason:
      "Fifteen percent sounds small until you tax it and multiply by twelve. My old team felt like home and that was exactly why I should leave — home is comfortable, and comfortable had stopped teaching me anything. The fear was not the new job, it was explaining the move to people who would ask why I would risk a good thing. I gave myself the real test: if the raise were zero, would I still want the new team? I said yes, and that meant the money was the excuse, not the reason. I signed on the last day.",
    votesTotal: 410,
    resonances: 233,
    reviews: [
      {
        label: "13 days later",
        result:
          "The new team is sharper and colder. I am learning fast and I miss being trusted. Both are true and I would still make the same call.",
        regret: 2,
        lesson: "Growth usually feels like mild discomfort, not like a promotion montage.",
        daysAgo: 13,
      },
    ],
    dissentSeed: [
      {
        handle: "last_in_first_out",
        reason:
          "Lateral moves every two years look like ambition on your resume and like a flight risk to every hiring manager after. Fifteen percent is not worth becoming the person who always leaves right before the hard part.",
        likes: 131,
      },
    ],
  },
  {
    key: "sm-delete-ex",
    handle: "last_seen_ghost",
    theme: "relationship",
    source: "curated",
    situation:
      "We broke up eight months ago and it was mutual, sort of. I still check her profile at night, not to talk, just to see. It has become part of my evening the way brushing my teeth is. I could block her, or delete the number, or keep the door open on purpose.",
    structured: ["25-34", "city", "designer"],
    options: [
      "Block and delete the number",
      "Keep the door open and trust I can stay friends",
      "Do nothing and let it fade on its own",
    ],
    chosen: 0,
    reason:
      "Blocking felt dramatic and a little cruel, and that is exactly how I knew I needed to do it. I kept telling myself checking was harmless, but I was measuring my whole evening by whether her last-seen time had moved. That is not friendship, it is a low-grade tax I was paying for comfort. I did not block to punish her. I blocked to stop negotiating with myself at midnight. I told one friend I was doing it so there would be a witness, then did it fast, without a goodbye message I would regret.",
    votesTotal: 690,
    resonances: 382,
    reviews: [
      {
        label: "10 days later",
        result:
          "The first three days I felt like I had lost something on purpose. By day ten I had read two books and slept better. I have not looked since.",
        regret: 1,
        lesson: "Closure is not a conversation you are owed. Sometimes it is a button you press alone.",
        daysAgo: 10,
      },
    ],
    dissentSeed: [
      {
        handle: "blocked_too_early",
        reason:
          "Blocking gets sold as healing, but for many people it is just control dressed up as self-care, and it can permanently close a door that only needed to be ajar. Sometimes distance is the healthier move than an erasure.",
        likes: 164,
      },
    ],
  },
  {
    key: "sm-lend-brother",
    handle: "family_ledger",
    theme: "relationship",
    source: "curated",
    situation:
      "My younger brother needs $4,000 for a deposit on a rented flat after a rough year. He has never asked me for money before, which is exactly why it scares me. I have it, but it is most of my emergency fund, and I know his history with deadlines.",
    structured: ["25-34", "city", "office worker"],
    options: [
      "Lend it, and treat it as gone the moment it leaves",
      "Say no and keep the friendship intact",
      "Lend a smaller amount I can truly afford to lose",
    ],
    chosen: 0,
    reason:
      "The number itself was not the problem. The problem was the hidden question underneath it: what am I to him if I say no? I realized I was about to let fear write the answer. So I made a rule instead of a promise — I would give an amount, call it a gift, and never bring it up again, so we would not become a debt and a creditor. I told him it was a gift and watched his face, and he flinched, because he had come prepared to negotiate. That flinch told me the money was not the real request.",
    votesTotal: 480,
    resonances: 297,
    reviews: [
      {
        label: "8 days later",
        result:
          "He took it, moved in, and texted me a photo of the empty living room. He has not mentioned the money. I have not either, and I do not think I will.",
        regret: 2,
        lesson: "Only lend money you would genuinely give. Anything else quietly turns family into an invoice.",
        daysAgo: 8,
      },
    ],
    dissentSeed: [
      {
        handle: "broke_the_pattern",
        reason:
          "Calling it a gift is generous and also enabling. If he has a history of missed deadlines, the loving move is a no plus real help — a budget, a plan, an introduction — not money that lets him skip the lesson.",
        likes: 152,
      },
    ],
  },
  {
    key: "sm-reunion-honest",
    handle: "class_of_never",
    theme: "career",
    source: "curated",
    situation:
      "Ten-year class reunion this weekend. Everyone will ask what I do. I was laid off four months ago and I have been freelancing badly and pretending otherwise to my family. I could invent something senior, or I could say the truth to forty people at once.",
    structured: ["25-34", "suburb", "unemployed"],
    options: [
      "Tell the truth when asked",
      "Give a polished answer that implies more than it says",
      "Skip the reunion entirely",
    ],
    chosen: 0,
    reason:
      "The polished answer was ready: 'consulting, taking a break, exploring.' All true-ish, all armour. What made me choose the truth was remembering how much energy the armour costs at my own dinner table. Forty strangers are actually easier than my mother. I told the first person honestly and it turned out half the room was also not where they expected. I did not become the story of the night and that was the point. What I got wrong was assuming honesty would shrink me in the room. It did the opposite: it made one real conversation possible in a night of performances, and I would trade a hundred polished answers for that.",
    votesTotal: 340,
    resonances: 219,
    reviews: [
      {
        label: "5 days later",
        result:
          "One former classmate quietly sent me a job lead. Nobody pitied me. The person who made it weird was the one who told me I was brave for saying it.",
        regret: 1,
        lesson: "The humiliation you fear is mostly a debt you are paying to a room that is not even watching.",
        daysAgo: 5,
      },
    ],
    dissentSeed: [
      {
        handle: "private_office",
        reason:
          "Honesty as a virtue is easy to recommend when your status is not the only thing keeping your phone ringing. Some people cannot afford to be known as the one who is struggling. Privacy is not dishonesty.",
        likes: 103,
      },
    ],
  },
  {
    key: "sm-hobby-paid",
    handle: "kiln_and_paycheck",
    theme: "career",
    source: "curated",
    situation:
      "I have thrown pottery on weekends for six years and a local market offered me a table. Turning it into a business would mean pricing my joy, dealing with customers, and possibly ruining the one thing that is purely mine. I have two weeks to say yes to the slot.",
    structured: ["35-44", "city", "teacher"],
    options: [
      "Take the table and try to sell",
      "Keep it private and refuse to monetize it",
      "Take the table but sell only to break even",
    ],
    chosen: 0,
    reason:
      "My fear was not failure, it was that a buyer's opinion would get inside the studio and sit on the wheel with me. But I noticed I had made thirty mugs nobody needed, and a hobby that only produces for an audience of one eventually runs out of shelf. I decided the test was worth one market. I priced things a little high on purpose, so that 'no' would not mean 'you are not good enough' but 'you are too expensive.' It is a coward's trick, but it let me try.",
    votesTotal: 300,
    resonances: 201,
    reviews: [
      {
        label: "12 days later",
        result:
          "I sold nine of fourteen pieces and made about what I earn in a day. A woman told me her morning coffee tastes better in my mug and I have not stopped thinking about it.",
        regret: 1,
        lesson: "A price is not a verdict on your taste. It is just a door.",
        daysAgo: 12,
      },
    ],
    dissentSeed: [
      {
        handle: "keep_it_holy",
        reason:
          "Not everything needs a storefront. Turning your last un-monetized joy into a business is how a lot of people end up with no hobby, no rest, and a second job that pays worse. Some things should stay unproductive.",
        likes: 176,
      },
    ],
  },
  {
    key: "sm-move-home-parent",
    handle: "two_kitchens",
    theme: "location",
    source: "curated",
    situation:
      "My father fell and needs someone nearby for a few months. My parents are two hours away. I could take a leave from my job and live with them, hire daily help from a distance, or keep visiting on weekends and hope it is enough.",
    structured: ["35-44", "city", "manager"],
    options: [
      "Take the leave and move in with them",
      "Hire daily help and visit on weekends",
      "Do nothing for now and reassess in a month",
    ],
    chosen: 1,
    reason:
      "Moving in sounded like the loving answer and also like a version of me slowly losing my temper in my mother's kitchen. I could already hear the fights. The honest question was not 'who loves him more,' it was 'who is reliable for laundry and lunch Tuesday through Friday.' I am not reliable at 7am, and money can buy reliable. So I paid for help and kept my weekends as the part only I could give: company. My sister disagreed. We are still not fully over it.",
    votesTotal: 420,
    resonances: 288,
    reviews: [
      {
        label: "14 days later",
        result:
          "The help worked out better than I feared. My father asked me on Sunday, not for care, but to watch football. I think that was the point all along.",
        regret: 2,
        lesson: "The 'good son' script is not always the most useful role. Sometimes the useful one is the one nobody praises.",
        daysAgo: 14,
      },
    ],
    dissentSeed: [
      {
        handle: "cash_not_care",
        reason:
          "Outsourcing care and calling it a weekend arrangement is a choice only available to people with money and a parent who does not need company. It reads as mature here, but a lot of elderly parents experience it as being managed by a stranger.",
        likes: 129,
      },
    ],
  },
  {
    key: "sm-tell-crush",
    handle: "unsent_draft",
    theme: "relationship",
    source: "curated",
    situation:
      "I have liked the same friend for four months. We talk every day, she sends me songs at 11pm, and I genuinely cannot tell if that is affection or just how she is with everyone. If I say something and I am wrong, I lose the friendship. I have written and deleted the message six times.",
    structured: ["25-34", "city", "designer"],
    options: [
      "Tell her plainly how I feel",
      "Say nothing and protect the friendship",
      "Ask a mutual friend to test the water for me",
    ],
    chosen: 0,
    reason:
      "I deleted six messages because I kept optimising for the version where I never have to feel rejected. But I realised the sixth deletion was the answer: I was not protecting the friendship, I was protecting my ego. She deserves to know why her friend goes quiet for a day after every late-night song. So I wrote it once, on paper, and read it to her in person instead of by text. It was one of the most uncomfortable ten minutes of my year and I did it with my own mouth.",
    votesTotal: 720,
    resonances: 388,
    reviews: [
      {
        label: "9 days later",
        result:
          "She said she loved me as a friend. It was painful and clean. We are still friends, actually more honest ones, and the songs still come at 11pm.",
        regret: 2,
        lesson: "A clear no costs a night. An unclear maybe costs a year.",
        daysAgo: 9,
      },
    ],
    dissentSeed: [
      {
        handle: "friendship_fee",
        reason:
          "Confessing to a friend is not free for them. It puts her in the position of managing your feelings and possibly losing the friendship guilt-free. Sometimes the braver move is to handle your own crush quietly rather than make it her problem.",
        likes: 158,
      },
    ],
  },
  {
    key: "sm-roommate-lease",
    handle: "shared_walls_kate",
    theme: "other",
    source: "curated",
    situation:
      "Two days before the lease renewal, my roommate and closest friend wants to extend for another year. We have lived together two years and it mostly works. But lately I feel like I am living in a version of college that never ended, and the rent split keeps me from noticing.",
    structured: ["25-34", "city", "office worker"],
    options: [
      "Renew together and keep the cheap rent",
      "Move out and take a place alone",
      "Find a cheaper solo room and downgrade the flat",
    ],
    chosen: 1,
    reason:
      "I ran the math on living alone and it looked bad — nearly double, no spare money, a smaller place. But the math I kept avoiding was different: another year of not living alone, another year of shared decisions about the thermostat and the guests and the dishes. I told myself friendship is rare and rent is real, and then I noticed I was using both as an excuse not to grow up. So I signed alone. I paid for the growing up in cash, every month.",
    votesTotal: 380,
    resonances: 214,
    reviews: [
      {
        label: "11 days later",
        result:
          "The first bill alone hurt. The first Sunday morning with nobody else's schedule in the flat felt like owning my own life. We are still friends, though we see each other less.",
        regret: 2,
        lesson: "Some independence is a subscription. You pay monthly and you stop noticing the relief.",
        daysAgo: 11,
      },
    ],
    dissentSeed: [
      {
        handle: "roommate_economist",
        reason:
          "Living alone as a growth milestone is a luxury belief. Doubling your rent to feel mature is how people end up with no savings and a nicer evening. A good roommate is free money and free company.",
        likes: 142,
      },
    ],
  },
  {
    key: "sm-sibling-wedding-pay",
    handle: "quiet_banker_sis",
    theme: "relationship",
    source: "curated",
    situation:
      "My sister's wedding is in six weeks and my parents cannot cover the venue they already promised her. They have asked me — the only one with savings — to quietly cover the $6,000 gap. It is most of my apartment down-payment fund. Nobody outside the family will know.",
    structured: ["25-34", "suburb", "office worker"],
    options: [
      "Pay the gap and keep it quiet",
      "Say no and let them resize the wedding",
      "Pay half and ask the family to find the rest",
    ],
    chosen: 0,
    reason:
      "The easy answer was no, and it was also a lie, because if I said no I would spend the wedding calculating the gap in my head and hating the champagne. The real question was not whether I could afford it. It was whether I could afford to be the person who watched my sister's face when they told her the venue was gone. I decided I could not, so I paid, and I asked my parents for one thing in return: that they never mention it, not even to praise me. I did not want a debt, even a grateful one.",
    votesTotal: 290,
    resonances: 178,
    reviews: [
      {
        label: "7 days later",
        result:
          "The wedding was beautiful and I felt good and lighter than I expected. The down-payment plan is delayed by about eighteen months. I have not fully made peace with that part.",
        regret: 3,
        lesson: "Generosity you do not regret in the moment can still charge you interest later.",
        daysAgo: 7,
      },
    ],
    dissentSeed: [
      {
        handle: "boundary_older_sister",
        reason:
          "She was the only one with savings precisely because she had been the responsible one for years. Requiring the reliable child to fund everyone else's promises is a family pattern, not a kindness, and saying yes teaches them you will always be the one who pays.",
        likes: 201,
      },
    ],
  },
  {
    key: "sm-pay-off-loan",
    handle: "zero_balance_me",
    theme: "other",
    source: "curated",
    situation:
      "I have $12,000 saved and a student loan at 6%. I could wipe it out today and start from zero, or let the loan run its course on autopay and put the cash somewhere it might grow. The loan is not crushing me monthly, but it is always sitting there in the background like noise.",
    structured: ["25-34", "city", "engineer"],
    options: [
      "Pay the loan off entirely and go back to zero savings",
      "Keep the cash invested and keep paying the loan",
      "Split it — half to the loan, half invested",
    ],
    chosen: 0,
    reason:
      "On a spreadsheet this is almost always a mistake — 6% is beatable and cash has optionality. I know the spreadsheet. But I also know myself, and I know that I have made three decisions in the last year out of scarcity panic because I could feel that number behind me. Paying it off was not a financial decision, it was buying back my judgement. Going to zero felt terrifying for a week and quiet for the first time in six years.",
    votesTotal: 350,
    resonances: 226,
    reviews: [
      {
        label: "13 days later",
        result:
          "The autopay stopped, the balance is zero, and I check my accounts less. I probably missed some market gains. I do not care yet, and I suspect I will not.",
        regret: 1,
        lesson: "Peace of mind is a real return. It is just paid in a currency that does not show up on the statement.",
        daysAgo: 13,
      },
    ],
    dissentSeed: [
      {
        handle: "opportunity_cost_owen",
        reason:
          "This is a wealthy person's emotion dressed as discipline. Zeroing out cheap debt for feelings, right before a downturn, is how people with no cushion end up one emergency away from ruin. Keep the cash. Feelings do not pay for a broken car.",
        likes: 187,
      },
    ],
  },
  {
    key: "sm-move-in-together",
    handle: "two_keys",
    theme: "relationship",
    source: "curated",
    situation:
      "We have been together about a year, and both our leases end in the same month. Moving in together would save real money and make the relationship feel like it has a direction. Or we renew separately and keep our own doors, our own exits, and our own dishes.",
    structured: ["25-34", "city", "office worker"],
    options: [
      "Move in together",
      "Renew separately and keep the space",
      "Move into a new flat together in a different area",
    ],
    chosen: 0,
    reason:
      "The timing was the whole argument and that is what made me suspicious. It was cheaper and convenient, not decided. So I asked myself a cleaner question: if her lease and mine ended six months apart, would I be waiting by the door with a moving box? I would not. I was treating a convenience as a milestone. But I also knew that a year in, doing nothing is its own choice. I chose to move in, but I asked for one thing first — that when we fight, neither of us gets to say 'this is my apartment.'",
    votesTotal: 560,
    resonances: 371,
    reviews: [
      {
        label: "6 days later",
        result:
          "Sharing a kitchen exposed four things about us that dating hid. Two we fixed, two we did not. I am glad it happened but I wish I had waited for the second lease cycle.",
        regret: 3,
        lesson: "Convenience is a terrible reason to accelerate a relationship.",
        daysAgo: 6,
      },
    ],
    dissentSeed: [
      {
        handle: "just_keep_doors",
        reason:
          "Moving in to make a relationship 'feel real' is often a way of avoiding the harder question of whether it actually is. Two leases are not a lack of commitment. They are data.",
        likes: 134,
      },
    ],
  },
  {
    key: "sm-funeral-trip",
    handle: "one_way_ticket_38",
    theme: "relationship",
    source: "curated",
    situation:
      "An aunt who helped raise me died. The funeral is 900km away, in the middle of my busiest work week. We have not spoken in two years because of a fight about inheritance. I could go, or work, or watch it online.",
    structured: ["35-44", "city", "manager"],
    options: [
      "Fly out for the funeral",
      "Work and watch the livestream",
      "Fly out but only for the burial, not the family events",
    ],
    chosen: 0,
    reason:
      "The fight had been about money, which is always about something else. Part of me wanted to skip it and keep the grudge alive, because a grudge is a kind of company. But I kept hearing her voice from when I was nine and she taught me to ride a bike. If I skipped, I would be making the fight the last word about a person who was mostly not that fight. I went. I did not fix the relatives, and I did not pretend we were closer than we were. I just stood there as the part of her that outlived the argument.",
    votesTotal: 260,
    resonances: 197,
    reviews: [
      {
        label: "10 days later",
        result:
          "It was awkward and cold and I am glad I went. My cousin and I spoke for the first time in two years and it was short but not hostile. The work week recovered.",
        regret: 1,
        lesson: "You do not attend a funeral for the living people who complicated it. You attend for the one person who did not.",
        daysAgo: 10,
      },
    ],
    dissentSeed: [
      {
        handle: "solo_working_mourner",
        reason:
          "Some people need to grieve alone, and the pressure to show up at a family event full of tension is not healing for everyone. Skipping a hostile funeral can be self-protection, not coldness.",
        likes: 91,
      },
    ],
  },
  {
    key: "sm-layover-switch",
    handle: "gate_number_7",
    theme: "location",
    source: "curated",
    situation:
      "I have a layover and a one-hour window where a cheaper, earlier connecting flight is still changeable for a small fee. Switching gets me home four hours earlier on my kid's birthday and saves nothing. Staying keeps the plan I made weeks ago. The gate is right there.",
    structured: ["35-44", "megacity", "salesperson"],
    options: [
      "Pay the fee and switch to get home early",
      "Stay on the original itinerary and stop overthinking a flight",
      "Switch and spend the saved time on something else",
    ],
    chosen: 1,
    reason:
      "I almost switched, not because I needed the four hours, but because it was something I could control in a day where nothing else was. Those four hours would have looked productive and mostly been spent in a taxi. My kid does not want the taxi hours. She wants the cake. I stayed on the original flight, called her from the gate, and chose to do the boring thing that keeps the version of me she actually experiences, not the version who optimises flights for the story.",
    votesTotal: 210,
    resonances: 122,
    reviews: [
      {
        label: "8 days later",
        result:
          "I got home exactly on time, normal Saturday. Nothing dramatic happened, and honestly that was the point — the temptation was about the drama, not the hours.",
        regret: 1,
        lesson: "Not every controllable thing is worth controlling. Some options only look like progress.",
        daysAgo: 4,
      },
    ],
    dissentSeed: [
      {
        handle: "every_minute_counts",
        reason:
          "Raising your child in a job that takes you across time zones means the four hours are not nothing. Dismissing the earlier flight as 'optimising' is a way of feeling good about contributing less time than you could.",
        likes: 68,
      },
    ],
  },
  {
    key: "sm-tell-parent-career",
    handle: "doctor_of_no",
    theme: "education",
    source: "curated",
    situation:
      "My parents spent their savings on a degree and a path they chose for me. I am two years into the career they wanted and I am doing fine and I am miserable. I got accepted into a cheap, unglamorous path I actually want. I have not told them.",
    structured: ["25-34", "suburb", "professional"],
    options: [
      "Tell them the truth before I start",
      "Tell them after I have done it for a year",
      "Keep both lives and never make them choose",
    ],
    chosen: 0,
    reason:
      "Every instinct said wait until I have proof, because proof makes the conversation short. But proof takes a year, and a year of lying to their faces at every dinner is a bill I did not want to pay. The real fear was not their anger. It was that they would cry, because the degree they worked for would look wasted. So I told them early, and I told them I was not wasting it — I was using it, badly, in a job that made me sick. My father did not speak for two days. That was the cost of being honest on time.",
    votesTotal: 640,
    resonances: 382,
    reviews: [
      {
        label: "5 days later",
        result:
          "My mother came around after a week and started asking questions about the new work. My father never fully did. I choose honesty over his approval every day now and it is still heavy.",
        regret: 2,
        lesson: "You owe them the truth on time. You do not owe them agreement.",
        daysAgo: 5,
      },
    ],
    dissentSeed: [
      {
        handle: "unfinished_third_act",
        reason:
          "Announcing a decision before you have any evidence is how people lose family trust for an idea that does not survive the first year. Getting proof first is not dishonesty, it is consideration. She manufactured a fight on purpose.",
        likes: 149,
      },
    ],
  },
  {
    key: "sm-content-burnout",
    handle: "offline_for_good",
    theme: "other",
    source: "curated",
    situation:
      "I have been posting for three years and I am tired in a way sleep does not fix. I have a small audience that I actually like. I could post a farewell and stop, post a vague goodbye and drift, or just keep going until it collapses on its own.",
    structured: ["25-34", "city", "creator"],
    options: [
      "Post an honest goodbye and close it cleanly",
      "Slowly disappear without a statement",
      "Keep posting and hope the feeling passes",
    ],
    chosen: 0,
    reason:
      "I wanted to just fade out so I would not have to explain. But I have watched the creators I loved do that, and I know how it feels as the person on the other side — like being quietly left without a reason. My audience did nothing wrong. What changed was me. So I wrote one honest post that said I was done, that it was not them, and that I was keeping the archive. It was the least I owed three years of attention, and it closed the tab in my head that kept opening at midnight.",
    votesTotal: 480,
    resonances: 316,
    reviews: [
      {
        label: "12 days later",
        result:
          "Two hundred kind comments and a strange quiet I did not expect to like. Nobody was angry. I have not opened the app since, except once to read the archive.",
        regret: 1,
        lesson: "If something deserves your years, it deserves an honest ending.",
        daysAgo: 12,
      },
    ],
    dissentSeed: [
      {
        handle: "dont_kill_income",
        reason:
          "Quitting your audience when you have no other income is romantic until the bills arrive. Most people do not get to 'close it cleanly' and walk into nothing. Burning the only distribution you own because you feel tired is not healing, it is quitting a job that has no replacement.",
        likes: 132,
      },
    ],
  },
  {
    key: "sm-costco-friend",
    handle: "cart_alone_tom",
    theme: "other",
    source: "curated",
    situation:
      "A friendship has been drifting for a year. Every time we plan something, one of us cancels. I could confront it, let it end quietly, or keep trying out of loyalty to a version of us that stopped existing.",
    structured: ["35-44", "suburb", "parent"],
    options: [
      "Say something about the drift directly",
      "Let it end quietly without a talk",
      "Keep initiating and see if it revives",
    ],
    chosen: 0,
    reason:
      "I kept calling it loyalty, but it was really nostalgia for who we were at 25, and we are not those people. The conversation I was avoiding was four sentences long: I have noticed we cancel on each other, I miss you, I do not know if we still fit, and I would rather know. So I said it. Not as an accusation, just as a fact I was tired of carrying. That is the thing about a drift — someone has to name it or it just becomes weather.",
    votesTotal: 300,
    resonances: 205,
    reviews: [
      {
        label: "9 days later",
        result:
          "He had felt the same and was too polite to say it. We agreed to one standing plan a month. Two months in, one month happened. It is not what it was, but it is honest.",
        regret: 2,
        lesson: "Friendships that are not talked about do not end. They just get quieter until the quiet is normal.",
        daysAgo: 9,
      },
    ],
    dissentSeed: [
      {
        handle: "let_friendships_fade",
        reason:
          "Not every friendship needs a formal review. Naming the drift can turn a soft seasonal pause into a hard loss. Some relationships should be allowed to rest without a verdict.",
        likes: 74,
      },
    ],
  },
  {
    key: "sm-craigslist-house",
    handle: "red_door_gamble",
    theme: "location",
    source: "curated",
    situation:
      "The flat I toured is cheaper, bigger, and thirty minutes further out. I would be off a transit line, in a quieter area, and I could finally have a study. My whole social life is in the current neighbourhood. The landlord wants an answer tomorrow.",
    structured: ["25-34", "city", "designer"],
    options: [
      "Take the bigger, cheaper flat further out",
      "Stay in the smaller place near everyone",
      "Pass and keep looking for something in between",
    ],
    chosen: 0,
    reason:
      "I kept picturing the goodbye parties I would miss and not the reason I was looking in the first place: I am tired of paying a lot for a home that is too small to think in. The honest question was whether my social life is a place I am going to become a person in, or a place I am hiding in. I chose the study and the commute. I moved on a Sunday with two friends and cried a little at the quiet.",
    votesTotal: 340,
    resonances: 189,
    reviews: [
      {
        label: "14 days later",
        result:
          "I have already written more in two weeks than in the last two months. I see my friends about once a week now instead of every other day, and I miss them, and it is fine.",
        regret: 2,
        lesson: "Enough room changes how much of you fits in a day.",
        daysAgo: 14,
      },
    ],
    dissentSeed: [
      {
        handle: "commute_tax",
        reason:
          "Trading friends and a short commute for a study sounds adult until the winter, when the thirty minutes each way becomes two hours of your life and the invitations stop coming. Space is the easiest thing to overpay for and the hardest to give back.",
        likes: 117,
      },
    ],
  },
  {
    key: "sm-lend-coworker",
    handle: "ten_bucks_friday",
    theme: "other",
    source: "curated",
    situation:
      "A coworker who I like but do not know well asked me to spot them $10 for lunch, saying they forgot their card. They forgot it last month too, and never paid me back the $10 from then. It is ten dollars. It is also a pattern I have started to notice.",
    structured: ["25-34", "city", "office worker"],
    options: [
      "Lend it and let the pattern stay invisible",
      "Say no politely this time",
      "Lend it and ask about the last one, in a friendly way",
    ],
    chosen: 2,
    reason:
      "The amount is trivial, which is exactly why it is hard — refusing ten dollars makes me look petty if I ever explain it. But I realised I was keeping a private scoreboard, and scoreboards are what turn colleagues into people I secretly resent. I did not want to carry that for the price of a sandwich. So I handed over the ten and, the same breath, said 'and hey, that other one from last month too, if you remember?' It was awkward for about three seconds. Then it was just true.",
    votesTotal: 190,
    resonances: 118,
    reviews: [
      {
        label: "11 days later",
        result:
          "He paid back both on Friday with an apology and no drama. Nothing changed except that I stopped keeping the score. I suspect I was more upset about that than the money.",
        regret: 1,
        lesson: "Small money is rarely about money. It is about the score you are keeping on your own side of the table.",
        daysAgo: 11,
      },
    ],
    dissentSeed: [
      {
        handle: "principles_over_pennies",
        reason:
          "Lending again while mentioning the last one is the worst of both worlds — you do not draw the line and you also make it awkward. If the pattern matters, the clean move is a plain no. Doing both is just managing your own discomfort out loud at someone else's expense.",
        likes: 85,
      },
    ],
  },
  {
    key: "sm-quiet-luxury",
    handle: "no_pool_no_problem",
    theme: "other",
    source: "curated",
    situation:
      "I got promoted and my income went up more than I will admit. Everyone around me is upgrading: the car, the watch, the flat, the holidays. I could join in, or I could keep looking poorer than I am and quietly save the difference. Both feel like a performance.",
    structured: ["35-44", "city", "manager"],
    options: [
      "Upgrade visibly to match my new level",
      "Keep the lower profile and bank the difference",
      "Upgrade one thing I actually care about and nothing else",
    ],
    chosen: 1,
    reason:
      "The upgrade I was most tempted by was the one I would barely use — the car I would mostly park. That is how I knew it was not a need but a signal, and signals are expensive in a currency I cannot get back. So I kept the old car and the plain watch, and I put the difference somewhere I can see it as a number and not a mirror. The uncomfortable part is that looking poorer than I am makes some people treat me differently, and I had to decide I was fine with that.",
    votesTotal: 410,
    resonances: 268,
    reviews: [
      {
        label: "13 days later",
        result:
          "Nothing looks different and nothing much feels different, which is the honest result of most money choices. I did notice I was less anxious about the next layoff round.",
        regret: 1,
        lesson: "Every status upgrade is also a permanent monthly commitment to keep appearing that way.",
        daysAgo: 13,
      },
    ],
    dissentSeed: [
      {
        handle: "hidden_poverty_play",
        reason:
          "Quiet frugality is a virtue you can afford once the income is high. Framing 'look poorer than you are' as wisdom quietly ignores that most people are not choosing to look poor — they are poor. Not everyone can bank the difference because there is no difference to bank.",
        likes: 158,
      },
    ],
  },
  {
    key: "sm-text-first-after-fight",
    handle: "biggest_ego",
    theme: "relationship",
    source: "curated",
    situation:
      "My best friend and I had a stupid fight two weeks ago. We have both been right and both been silent since. Whoever texts first loses the moral high ground. I have the message typed and unsent twelve times over. Pride says wait.",
    structured: ["25-34", "city", "designer"],
    options: [
      "Text first and end the silence",
      "Wait until she reaches out",
      "Wait exactly one more week as a test of who cares",
    ],
    chosen: 0,
    reason:
      "I kept waiting for her to move first so I would not lose, but I could not actually name what I would win. Two weeks of silence is a wall; being right on my side of it is a cold prize. I worked out that the reason I was waiting was that I did not want to look like the one who cared more. Then I heard how childish that was — of course I care more. Friends are not a scoreboard. I sent the message, and I did not apologise for the fight, only for the silence.",
    votesTotal: 550,
    resonances: 372,
    reviews: [
      {
        label: "6 days later",
        result:
          "She replied in twenty minutes with 'thank god, I was waiting too.' Neither of us was right. Who texted first has already stopped mattering to both of us.",
        regret: 1,
        lesson: "The moral high ground is a very cold place to spend two weeks alone.",
        daysAgo: 6,
      },
    ],
    dissentSeed: [
      {
        handle: "pattern_of_first",
        reason:
          "Being the one who always reaches out first is not generosity, it can be a role you are trained into while the other person never has to do the work. Texting first every single time is a pattern, not a virtue.",
        likes: 96,
      },
    ],
  },
  {
    key: "sm-back-to-school",
    handle: "evening_lecture",
    theme: "education",
    source: "curated",
    situation:
      "I am 36 with a full-time job and a mortgage. There is a part-time degree in a field that genuinely interests me. It would take four years of evenings I do not have and cost money I would rather keep. Or I keep learning the free way, on my own, forever, never finishing anything.",
    structured: ["35-44", "city", "manager"],
    options: [
      "Enroll in the four-year evening degree",
      "Learn it free and unstructured, no credential",
      "Enroll in one single course first to test myself",
    ],
    chosen: 0,
    reason:
      "I had been 'learning on my own' for six years, which meant I had read a great deal and finished almost nothing, because nothing was ever due. The credential is not the point for me. The deadline is. So I paid the money mainly to buy the deadline, and committed to four years of Tuesday nights that I would genuinely rather spend on the sofa. My partner asked whether I would resent her for the lost evenings, and I had to answer that honestly before I could sign up.",
    votesTotal: 380,
    resonances: 232,
    reviews: [
      {
        label: "14 days later",
        result:
          "Two evenings in and the reading is heavier than the videos I was watching. I have already had one small win: I understood a thing I had failed to grasp for years.",
        regret: 2,
        lesson: "Some people need structure more than they need the subject. Paying for the deadline is legitimate.",
        daysAgo: 14,
      },
    ],
    dissentSeed: [
      {
        handle: "course_seller",
        reason:
          "Paying four years of tuition and lost evenings to acquire discipline is one of the most expensive ways to learn something you could learn for free. Adults convince themselves the credential will matter and then use it in exactly one interview.",
        likes: 121,
      },
    ],
  },
  {
    key: "sm-side-hustle-quit",
    handle: "five_to_nine_life",
    theme: "career",
    source: "curated",
    situation:
      "My side project has started making a little money, enough that a few people keep telling me to quit and go full-time. It is maybe a third of my salary on a good month. My job is stable and dull. The window feels open and I do not know for how long.",
    structured: ["25-34", "city", "engineer"],
    options: [
      "Quit the job and go full-time on the project",
      "Keep the job and grow the project evenings and weekends",
      "Quit and give myself six months of savings runway, then reassess",
    ],
    chosen: 1,
    reason:
      "The worst month of my project so far earned less than my weekly grocery budget, and I kept forgetting that when I imagined quitting. A third of a salary on a good month is not the same as a third on a bad one, and I have already had three bad ones this year. So I checked what I actually wanted: to be free, or to be seen quitting? It was mostly the second, which is a terrible reason. I kept the job, cut my hours of sleep, and told myself I would revisit the decision the moment the project earned two-thirds of my salary in a normal month.",
    votesTotal: 620,
    resonances: 358,
    reviews: [
      {
        label: "12 days later",
        result:
          "The project grew about 15% on the week I almost quit, then flatlined. I am exhausted and solvent and still employed. I think I chose right and I am not sure.",
        regret: 2,
        lesson: "A side project is not a business until it survives its own worst month without your salary behind it.",
        daysAgo: 12,
      },
    ],
    dissentSeed: [
      {
        handle: "window_closer",
        reason:
          "Keeping the day job is the safe answer that sounds wise and quietly kills the window. Momentum in a growing project is real and perishable, and 'revisit when it earns two-thirds' is a rule that can take years — by which time the opportunity is a memory.",
        likes: 172,
      },
    ],
  },
  {
    key: "sm-quit-band",
    handle: "amp_and_owes",
    theme: "career",
    source: "curated",
    situation:
      "My band got one good review and a support-slot offer. It is also nine years of Tuesdays in basements, no money, and a day job I am slowly falling behind in. Everyone says this could be the moment. I am starting to suspect the moment passed years ago and nobody told me.",
    structured: ["25-34", "city", "musician"],
    options: [
      "Quit the band and put everything into the job",
      "Take the tour slot and give it one last year",
      "Keep the band but drop all ambition and just play for fun",
    ],
    chosen: 0,
    reason:
      "I had spent nine years believing that giving up would be a betrayal of who I am, and that is exactly the trap. The band was not my identity, it was my excuse for not growing up in every other room of my life. I did the honest count: the support slot paid slightly less than my monthly train fare. I told the others I was out, and they were angrier than I expected, which told me some of them needed me to keep believing so they could avoid the same math. I quit on a Tuesday, which felt fitting.",
    votesTotal: 340,
    resonances: 178,
    reviews: [
      {
        label: "10 days later",
        result:
          "I felt an enormous, unexpected grief, then a strange relief I did not want to admit. I am better at my job and I have not written a single song. I do not know yet whether I lost something or escaped something.",
        regret: 4,
        lesson: "Some doors you close do not reveal the answer. They just remove the question and its comfort.",
        daysAgo: 10,
      },
    ],
    dissentSeed: [
      {
        handle: "one_more_year",
        reason:
          "Quitting right when you get your first real break is a decision you will spend your whole life narrating as 'the moment I stopped.' You will not be judged on the train fare. You will be judged on the songs you never wrote because you were too scared of a Tuesdays math problem.",
        likes: 198,
      },
    ],
  },
  {
    key: "sm-relocate-for-partner",
    handle: "two_time_zones",
    theme: "location",
    source: "curated",
    situation:
      "My partner got a two-year posting 5,000km away that would change their career. It would upend mine, my friends, and the city I actually love. The alternative is long distance. They did not ask me to come. They just told me about it and waited.",
    structured: ["25-34", "city", "professional"],
    options: [
      "Move with them and rebuild my life from scratch",
      "Stay and do long distance for two years",
      "Ask them to turn it down, or renegotiate the timing",
    ],
    chosen: 1,
    reason:
      "The romantic answer is to go. The self-protective answer is to make them choose me. I did not trust either, because both were ways of avoiding the real question: whose life gives way, and for how long. So I chose the option that kept my city and my work and asked the relationship to carry two years of airports and voice memos, knowing it might end. I told them I would not resent their ambition if they would not resent my staying. Then we both agreed to the fact we were avoiding: long distance is a real toll, not a pause button.",
    votesTotal: 520,
    resonances: 342,
    reviews: [
      {
        label: "12 days later",
        result:
          "Before they left we covered a calendar with visits and then a fight erased half of them. It is going to be harder than the plan says. I still think staying was right for me.",
        regret: 2,
        lesson: "Love and place are two different budgets, and pretending one can cover the other bankrupts both.",
        daysAgo: 12,
      },
    ],
    dissentSeed: [
      {
        handle: "moved_for_love",
        reason:
          "Long distance is one of the most common ways a relationship quietly dies, and she chose it while calling it a decision 'for the relationship.' If two years of distance ends it, she will spend years wondering whether she should have gone. Some bets that preserve your life for now are just postponing the choice.",
        likes: 156,
      },
    ],
  },
  {
    key: "sm-forgive-absent-parent",
    handle: "unanswered_calls",
    theme: "relationship",
    source: "curated",
    situation:
      "My father called for the first time in years. He wants to 'meet up and talk.' He missed everything — the graduation, the move, the years I needed him. I could let him back in, keep the door closed, or agree to talk and decide nothing else in advance.",
    structured: ["35-44", "city", "office worker"],
    options: [
      "Meet him and leave the door open",
      "Decline and keep the distance",
      "Meet once but set the conditions in advance",
    ],
    chosen: 0,
    reason:
      "The safe thing was to write a list of conditions so I could feel in control of my own hurt. But I noticed the list was not protection, it was a script for the conversation I wanted to have, and I did not actually know what I needed until I heard his voice in the room. So I met him with no promises and no conditions, just the truth that I was not okay yet and that I was willing to find out if I could be. It was one hour. It did not fix anything. It was, at least, a beginning I chose rather than a door I had nailed shut years ago.",
    votesTotal: 460,
    resonances: 298,
    reviews: [
      {
        label: "9 days later",
        result:
          "He was smaller and sadder than the man in my head, which broke something open. We will meet again, slowly. I am more tired than I expected and less angry than I have been in years.",
        regret: 2,
        lesson: "Meeting the real person destroys the version you spent years being righteously angry at, and that can feel like losing a weapon.",
        daysAgo: 9,
      },
    ],
    dissentSeed: [
      {
        handle: "boundaries_matter",
        reason:
          "Opening the door to someone who missed everything, without conditions, teaches him there are no consequences for years of absence. Forgiveness is not owed on the first phone call, and for some people healing looks like a closed door, not an open one.",
        likes: 134,
      },
    ],
  },
];