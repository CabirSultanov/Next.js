export default function Loading() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="p-4 bg-gray-800/60 rounded-lg animate-pulse h-32"
        />
      ))}
    </div>
  );
}
