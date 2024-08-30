import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Marcos-06.png",
      name: "Marcos Basso",
      role: "FullStack Developer"
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", },
      { type: "paragraph", content: "met consectetur adipisicing elit. Impedit laborum veritatis reprehenderit omnis, ipsum quia assumenda mollitia nobis aspernatur fugiat a eum expedita veniam", },
      { type: "link", content: "Lorem ipsum dolor sit amet", },
    ],
    publishedAt: new Date('2024-05-11 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/JohnDoe.png",
      name: "John Doe",
      role: "Frontend Developer"
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", },
      { type: "paragraph", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", },
      { type: "link", content: "Ut enim ad minim veniam", },
    ],
    publishedAt: new Date('2024-05-12 10:30:00'),
  },
];


export function App() {
  return (
    <div className="bg-zinc-900">
      <Header />
      <div className="max-w-[70rem] mt-8 mx-auto px-4 h-[100%] grid grid-cols-[1fr] md:grid-cols-[256px,1fr] gap-8 items-start">
        <Sidebar />
        <main className="text-white">

          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

