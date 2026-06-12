import type { Match } from "~/types/match";

export const match: Match = {
    slug: "kor-vs-cze",

    date: "2026-06-11",

    stage: "Grupo H",

    stadium: "Seoul World Cup Stadium",

    homeTeam: {
  name: "Coreia do Sul",
  code: "kr",
  formation: "4-2-3-1",
  score: 2,

  players: [
    {
      number: 1,
      name: "Kim",
      position: "GK"
    },

    {
      number: 3,
      name: "Lee",
      position: "LB"
    },

    {
      number: 4,
      name: "Min-Jae",
      position: "LCB"
    },

    {
      number: 5,
      name: "Young",
      position: "RCB"
    },

    {
      number: 2,
      name: "Kim Min",
      position: "RB"
    },

    {
      number: 6,
      name: "Park",
      position: "DMF"
    },

    {
      number: 8,
      name: "Jung",
      position: "DMF"
    },

    {
      number: 11,
      name: "Hwang",
      position: "LWF"
    },

    {
      number: 10,
      name: "Lee Kang-In",
      position: "AMF"
    },

    {
      number: 7,
      name: "Son",
      position: "RWF"
    },

    {
      number: 9,
      name: "Cho",
      position: "CF"
    }
  ]
},

    awayTeam: {
  name: "República Tcheca",
  code: "cz",
  formation: "4-4-2",
  score: 1,

  players: [
    {
      number: 1,
      name: "Staněk",
      position: "GK"
    },

    {
      number: 5,
      name: "Coufal",
      position: "RB"
    },

    {
      number: 3,
      name: "Holeš",
      position: "LCB"
    },

    {
      number: 4,
      name: "Hranáč",
      position: "RCB"
    },

    {
      number: 18,
      name: "Krejčí",
      position: "LB"
    },

    {
      number: 14,
      name: "Provod",
      position: "RMF"
    },

    {
      number: 22,
      name: "Souček",
      position: "CMF"
    },

    {
      number: 7,
      name: "Barák",
      position: "CMF"
    },

    {
      number: 20,
      name: "Černý",
      position: "LMF"
    },

    {
      number: 11,
      name: "Kuchta",
      position: "CF"
    },

    {
      number: 10,
      name: "Schick",
      position: "CF"
    }
  ]
},

    events: [
        {
            minute: 59,
            type: "goal",
            team: "away",
            player: "Ladislav Krejčí"
        },
        {
            minute: 67,
            type: "goal",
            team: "home",
            player: "Hwang In-beom"
        },
        {
            minute: 80,
            type: "goal",
            team: "home",
            player: "Hyeon-gyu Oh"
        },

    ],

    stats: {
        possession: [58, 42],
        shots: [14, 8],
        shotsOnTarget: [7, 3],
        corners: [5, 2]
    }
};