import { Shuffle } from "phosphor-react";

import { useShuffler } from "../hooks";

export function ShufflePage() {
  const { current, rest, chosen, shuffle } = useShuffler(90);

  return (
    <div className="container mx-auto flex flex-col justify-center p-6 gap-4">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-9xl font-medium text-white shadow-sm ">
          {current || "#"}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
        <p className="mb-1">Chosen numbers:</p>
        <div className="inline-flex gap-2 flex-wrap">
          {chosen.map((n) => (
            <span className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
              <svg
                className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              {n}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
        <p className="mb-1">Rest of the numbers:</p>
        <div className="inline-flex gap-2 flex-wrap">
          {rest.map((n) => (
            <span className="inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-purple-800">
              <svg
                className="-ml-0.5 mr-1.5 h-2 w-2 text-purple-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              {n}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => shuffle()}
        disabled={!rest.length}
        type="button"
        className="fixed right-3 bottom-3 sm:right-6 sm:bottom-6 inline-flex gap-2 items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <Shuffle className="h-6 w-6" aria-hidden="true" />
        <span className="max-sm:hidden px-3">Shuffle</span>
      </button>
    </div>
  );
}
