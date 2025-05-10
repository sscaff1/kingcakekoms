import type { Route } from "./+types/home";
import { raceDays } from "../data/raceData";
import { RaceTable } from "../components/RaceTable";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "King Cakes KOMs - New Orleans Cycling Sprint Points" },
    { name: "description", content: "Track the unofficial sprint points winners of New Orleans cycling group rides" },
  ];
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">
          🍰 King Cakes KOMs 🍰
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Unofficial Sprint Points Competition for New Orleans Cycling Group Rides
        </p>
      </header>

      <div className="grid gap-8">
        {Object.entries(raceDays).map(([key, raceDay]) => (
          <RaceTable key={key} raceDay={raceDay} />
        ))}
      </div>

      <footer className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>🏆 Because every sprint point deserves a king cake 🏆</p>
        <p className="mt-2">(This is a parody website - not affiliated with any official cycling organizations)</p>
      </footer>
    </main>
  );
}
