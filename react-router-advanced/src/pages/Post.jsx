import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post ID: {postId}</h2>
      <p>This is the content of the post with ID {postId}.</p>
    </div>
  );
};

export default Post;
