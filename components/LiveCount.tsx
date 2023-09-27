"use client";
import Link from "next/link";

const LiveCount = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col gap-8 p-12">
        <div className="flex flex-col gap-6 relative place-items-center before:absolute before:bg-gradient-radial after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0c864b] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="text-6xl font-custom">Live Count</h1>
          <p className="text-sm text-gray-400">
            Number of people coming to the saturday&apos;s game
          </p>
          <h3 className="text-5xl">0</h3>
        </div>
      </div>
      <Link
        href="/"
        className="px-4 py-4 text-center bg-[#193E1B] text-white rounded-lg"
      >
        Go back home
      </Link>
    </div>
  );
};

export default LiveCount;
