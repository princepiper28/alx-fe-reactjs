React Query Demo 🚀
This project demonstrates how to efficiently fetch, cache, and update data in a React application using React Query. The app fetches posts from the JSONPlaceholder API and showcases caching, automatic refetching, and manual data updates.

📌 Features
React Query integration for efficient data fetching.
Automatic caching to reduce API calls.
Manual data refetching via a refresh button.
StaleTime & CacheTime handling to optimize performance.
Error handling for better UX.
📂 Project Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/princepiper28/alx-fe-reactjs.git
cd react-query-demo
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Start the Development Server
sh
Copy
Edit
npm run dev
The app should be running at http://localhost:5173/.

⚙️ Tech Stack
React (Frontend framework)
React Query (Data fetching & caching)
Axios (API requests)
Vite (Fast development server)
🛠 How It Works
Data Fetching

Posts are fetched from the JSONPlaceholder API using useQuery().
Axios is used to make HTTP requests.
Caching & Automatic Refetching

Data is cached for 5 minutes (cacheTime: 300000).
No new API call when revisiting the page within staleTime (5s).
After staleTime (5s), React Query automatically refetches data.
Manual Data Refetching

Clicking the 🔄 Refresh Posts button manually fetches new data.
React Query updates UI instantly with fresh posts.
📝 File Structure
graphql
Copy
Edit
react-query-demo/
│── src/
│   ├── components/
│   │   ├── PostsComponent.jsx  # Fetches & displays posts using React Query
│   ├── main.jsx  # React Query Provider setup
│   ├── App.jsx   # Renders the PostsComponent
│── README.md
│── package.json
│── vite.config.js
🚀 Example Code
📌 PostsComponent.jsx
jsx
Copy
Edit
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,
    cacheTime: 300000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>🔄 Refresh Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
📌 Key Learnings
✔ How to integrate React Query into a React project
✔ Handling data caching & automatic refetching
✔ Optimizing API calls to improve performance
✔ Using Axios for API requests in React

📢 Contributing
Feel free to fork the repo, create a branch, and submit a pull request! 🎉

📜 License
This project is open-source under the MIT License.
