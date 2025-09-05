"use client";

export default function PostError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-red-500">
      <p>Ошибка: {error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-2 px-3 py-1 rounded bg-red-500 text-white"
      >
        Try again
      </button>
    </div>
  );
}
