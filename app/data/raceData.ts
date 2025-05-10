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
  sprintPoints: SprintPoint[];
}

export const raceDays: Record<string, RaceDay> = {
  wemo: {
    name: "Wemo Wednesday",
    sprintPoints: [
      {
        name: "KOM",
        winners: [
          {
            date: "2024-03-20",
            name: "Tom 'The Tank' Wilson",
            notes: "Power climb specialist"
          },
          {
            date: "2024-03-13",
            name: "Chris 'The Climber' Martinez",
            notes: "Beat the record by 2 seconds"
          }
        ]
      },
      {
        name: "City Park",
        winners: [
          {
            date: "2024-03-20",
            name: "Sarah 'The Sprinter' Johnson",
            notes: "Back-to-back wins!"
          }
        ]
      },
      {
        name: "Backdraft",
        winners: [
          {
            date: "2024-03-13",
            name: "James 'The Jet' Brown",
            notes: "Perfect timing on the sprint"
          }
        ]
      },
      {
        name: "Final",
        winners: [
          {
            date: "2024-03-20",
            name: "John 'The Jet' Smith",
            notes: "Sprint finish photo"
          },
          {
            date: "2024-03-13",
            name: "Emma 'The Engine' Davis",
            notes: "First win of the season"
          }
        ]
      }
    ]
  },
  friendlyFriday: {
    name: "Friendly Friday",
    sprintPoints: [
      {
        name: "Marconi",
        winners: [
          {
            date: "2024-03-22",
            name: "John 'The Jet' Smith",
            notes: "First sprint of the season!"
          },
          {
            date: "2024-03-15",
            name: "Mike 'The Machine' Rodriguez",
            notes: "Beat the peloton by a bike length"
          }
        ]
      },
      {
        name: "Wisner KOM",
        winners: [
          {
            date: "2024-03-22",
            name: "Sarah 'The Sprinter' Johnson",
            notes: "New course record!"
          },
          {
            date: "2024-03-15",
            name: "Alex 'The Ace' Thompson",
            notes: "First KOM of the season"
          }
        ]
      }
    ]
  },
  giroSaturday: {
    name: "Giro Saturday",
    sprintPoints: [
      {
        name: "Venetian Isles",
        winners: [
          {
            date: "2024-03-23",
            name: "Alex 'The Ace' Thompson",
            notes: "Perfect leadout"
          },
          {
            date: "2024-03-16",
            name: "Mike 'The Machine' Rodriguez",
            notes: "Solo breakaway"
          }
        ]
      },
      {
        name: "Goodyear",
        winners: [
          {
            date: "2024-03-23",
            name: "Maria 'The Missile' Garcia",
            notes: "First sprint win"
          }
        ]
      },
      {
        name: "Seabrook",
        winners: [
          {
            date: "2024-03-23",
            name: "David 'The Diesel' Lee",
            notes: "Power sprint finish"
          },
          {
            date: "2024-03-16",
            name: "Sarah 'The Sprinter' Johnson",
            notes: "Three-peat champion"
          }
        ]
      }
    ]
  },
  giroSunday: {
    name: "Giro Sunday",
    sprintPoints: [
      {
        name: "Venetian Isles",
        winners: [
          {
            date: "2024-03-24",
            name: "Chris 'The Climber' Martinez",
            notes: "Surprise attack"
          }
        ]
      },
      {
        name: "Goodyear",
        winners: [
          {
            date: "2024-03-24",
            name: "Emma 'The Engine' Davis",
            notes: "Perfect timing"
          },
          {
            date: "2024-03-17",
            name: "Tom 'The Tank' Wilson",
            notes: "First sprint win"
          }
        ]
      },
      {
        name: "Seabrook",
        winners: [
          {
            date: "2024-03-24",
            name: "James 'The Jet' Brown",
            notes: "Photo finish"
          },
          {
            date: "2024-03-17",
            name: "Maria 'The Missile' Garcia",
            notes: "Back-to-back wins"
          }
        ]
      }
    ]
  }
};
