import { useReducer, useState } from "react";

import PostItem from "./PostItem";
import img1 from "./image1.jpg";

const DUMMY_POST = [
  {
    id: "1",
    thumbnail: img1,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: img1,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    authorID: 3,
  },
  {
    id: "3",
    thumbnail: img1,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    authorID: 13,
  },
];
function App() {
  const [post, setPost] = useState(DUMMY_POST);
  const [title, setTitle] = useState(" isuru ");

  const clickHandle = () => {
    setTitle("Isuru sandaruwan");
    // Use map to update each post in the array
    setPost(post.map((item) => ({ ...item, category: "It" })));
  };
  return (
    <div>
      <h1>{title}</h1>
      <div className="content">
        {post.map(({ id, thumbnail, category, title, desc, authorID }) => (
          <PostItem
            key={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorID={authorID}
          />
        ))}
        <button
          style={{
            fontSize: "12px",
            border: "1px solid lightblue",
            padding: "7px 12px",
            borderRadius: "5px",
          }}
          onClick={clickHandle}
        >
          Click ME
        </button>
      </div>
    </div>
  );
}

export default App;
