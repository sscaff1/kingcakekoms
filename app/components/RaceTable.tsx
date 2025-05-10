import { type RaceDay } from "../data/raceData";

interface RaceTableProps {
  raceDay: RaceDay;
}

export function RaceTable({ raceDay }: RaceTableProps) {
  // Get all unique dates across all sprint points
  const allDates = Array.from(
    new Set(
      raceDay.sprintPoints.flatMap((sp) =>
        sp.winners.map((w) => w.date)
      )
    )
  ).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
        {raceDay.name}
      </h2>


      {/* Sprint Points Summary */}
      <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
        <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">
          Sprint Points
        </h3>
        <div className="flex flex-wrap gap-2">
          {raceDay.sprintPoints.map((sp) => (
            <div
              key={sp.name}
              className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-700"
            >
              {sp.name}
            </div>
          ))}
        </div>
      </div>

      {allDates.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-4">
          No winners recorded yet. Be the first!
        </div>
      ) : (
        <div className="space-y-6">
          {allDates.map((date) => (
            <div key={date} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="font-medium text-lg text-purple-700 dark:text-purple-300 mb-3">
                {date}
              </div>
              <div className="space-y-3">
                {raceDay.sprintPoints.map((sp) => {
                  const winner = sp.winners.find((w) => w.date === date);
                  return (
                    <div key={sp.name} className="flex flex-col sm:flex-row sm:items-center gap-2 p-2 bg-white dark:bg-gray-700 rounded">
                      <div className="font-medium text-purple-600 dark:text-purple-400 min-w-[120px]">
                        {sp.name}:
                      </div>
                      <div className="flex-1">
                        {winner ? (
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">
                              {winner.name}
                            </div>
                            {winner.notes && (
                              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {winner.notes}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-400 dark:text-gray-500">-</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
