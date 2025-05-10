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
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {raceDay.description}
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg">
          <thead>
            <tr className="bg-purple-100 dark:bg-purple-900">
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-600 dark:text-purple-300 uppercase tracking-wider sticky left-0 bg-purple-100 dark:bg-purple-900">
                Date
              </th>
              {raceDay.sprintPoints.map((sp) => (
                <th key={sp.name} className="px-6 py-3 text-left text-xs font-medium text-purple-600 dark:text-purple-300 uppercase tracking-wider">
                  {sp.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {allDates.length === 0 ? (
              <tr>
                <td colSpan={raceDay.sprintPoints.length + 1} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                  No winners recorded yet. Be the first!
                </td>
              </tr>
            ) : (
              allDates.map((date) => (
                <tr key={date} className="hover:bg-purple-50 dark:hover:bg-purple-800/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 sticky left-0 bg-white dark:bg-gray-700">
                    {date}
                  </td>
                  {raceDay.sprintPoints.map((sp) => {
                    const winner = sp.winners.find((w) => w.date === date);
                    return (
                      <td key={sp.name} className="px-6 py-4 whitespace-nowrap text-sm">
                        {winner ? (
                          <div>
                            <div className="font-medium text-purple-700 dark:text-purple-300">
                              {winner.name}
                            </div>
                            {winner.notes && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {winner.notes}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-400 dark:text-gray-500">-</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
