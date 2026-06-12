export interface Player {
  number: number;
  name: string;
  position: string;
}

export interface Team {
  name: string;
  code: string;
  formation: string;
  score: number;
  players: Player[];
}

export type EventType =
  | "goal"
  | "yellow"
  | "red"
  | "substitution"
  | "penalty"
  | "own_goal";

export interface MatchEvent {
  minute: number;
  type: EventType
  team: "home" | "away";
  player: string;
}

export interface Match {
  slug: string;
  date: string;
  stage: string;
  stadium: string;

  homeTeam: Team;
  awayTeam: Team;

  events: MatchEvent[];

  stats: {
    possession: [number, number];
    shots: [number, number];
    shotsOnTarget: [number, number];
    corners: [number, number];
  };
}