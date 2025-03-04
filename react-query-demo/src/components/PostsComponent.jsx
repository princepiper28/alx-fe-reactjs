import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    refetchOnWindowFocus: false,  // ✅ Prevents unnecessary refetching when switching tabs
    keepPreviousData: true,       // ✅ Shows previous data while fetching new data
    staleTime: 5000, // Data is fresh for 5 seconds
    cacheTime: 300000, // Keep data in cache for 5 minutes (300,000ms)
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>; // ✅ Fix: Handle errors properly
 
  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>🔄 Refresh Posts</button>
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
