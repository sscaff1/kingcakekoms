export interface SprintPoint {
  name: string;
  winners: RaceWinner[];
}

export interface RaceWinner {
  date: string;
  name: string;
  notes?: string;
}

export interface RaceDay {
  name: string;
  description: string;
  sprintPoints: SprintPoint[];
}

export const raceDays: Record<string, RaceDay> = {
  wemo: {
    name: "Wemo",
    description: "Wednesday evening sprint points competition",
    sprintPoints: [
      {
        name: "KOM",
        winners: []
      },
      {
        name: "City Park",
        winners: []
      },
      {
        name: "Backdraft",
        winners: []
      },
      {
        name: "Final",
        winners: []
      }
    ]
  },
  friendlyFriday: {
    name: "Friendly Friday",
    description: "Friday morning sprint points competition",
    sprintPoints: [
      {
        name: "Marconi",
        winners: []
      },
      {
        name: "Wisner KOM",
        winners: []
      }
    ]
  },
  giroSaturday: {
    name: "Giro Saturday",
    description: "Saturday morning sprint points competition",
    sprintPoints: [
      {
        name: "Venetian Isles",
        winners: []
      },
      {
        name: "Goodyear",
        winners: []
      },
      {
        name: "Seabrook",
        winners: []
      }
    ]
  },
  giroSunday: {
    name: "Giro Sunday",
    description: "Sunday morning sprint points competition",
    sprintPoints: [
      {
        name: "Venetian Isles",
        winners: []
      },
      {
        name: "Goodyear",
        winners: []
      },
      {
        name: "Seabrook",
        winners: []
      }
    ]
  }
};
