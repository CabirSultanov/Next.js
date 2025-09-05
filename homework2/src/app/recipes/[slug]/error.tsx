"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-red-400">
        Something went wrong
      </h2>
      <p className="text-gray-300">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-3 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-400"
      >
        Try again
      </button>
    </div>
  );
}
