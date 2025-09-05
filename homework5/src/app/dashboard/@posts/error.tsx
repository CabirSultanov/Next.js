"use client";

export default function PostsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-red-500">
      <p>Ошибка при загрузке постов: {error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-2 px-3 py-1 rounded bg-red-500 text-white"
      >
        Try again
      </button>
    </div>
  );
}
