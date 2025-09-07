export const dynamicParams = true;

export default async function UserPosts({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}/posts`
  );
  const posts = await res.json();

  return (
    <div>
      <h1>Posts of user {params.id}</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
