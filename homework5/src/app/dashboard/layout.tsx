export default function DashboardLayout({
  posts,
  users,
  todos,
}: {
  posts: React.ReactNode;
  users: React.ReactNode;
  todos: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div className="border rounded-lg p-4">{posts}</div>
      <div className="border rounded-lg p-4">{users}</div>
      <div className="border rounded-lg p-4">{todos}</div>
    </div>
  );
}
