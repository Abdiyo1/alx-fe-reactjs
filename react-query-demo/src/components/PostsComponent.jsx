import React from "react";
import { useQuery } from "react-query";

// Fetch posts function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5, // 5 minutes (data is fresh for 5 minutes)
    cacheTime: 1000 * 60 * 10, // 10 minutes (data stays in cache for 10 minutes)
    refetchOnWindowFocus: true, // Refetch data when the window regains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

