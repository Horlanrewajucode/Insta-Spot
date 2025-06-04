import { useState } from "react";
import { NewPostModal } from "./NewPostModal";

// const photos = [
//   {
//     id: 1,
//     src: "/images/Mask group.svg",
//     title: "Val Thorens",
//     icon: "/images/Like Icon.svg",
//   },
//   {
//     id: 2,
//     src: "/images/Mask group (1).svg",
//     title: "Restaurant terrace",
//     icon: "/images/Like Icon.svg",
//   },
//   {
//     id: 3,
//     src: "/images/Mask group (2).svg",
//     title: "An outdoor cafe",
//     icon: "/images/Like Icon.svg",
//   },
//   {
//     id: 4,
//     src: "/images/Mask group (3).svg",
//     title: "A very long bridge, over the forest...",
//     icon: "/images/Like Icon.svg",
//   },
//   {
//     id: 5,
//     src: "/images/Mask group (4).svg",
//     title: "Tunnel with morning light",
//     icon: "/images/Like Icon.svg",
//   },
//   {
//     id: 6,
//     src: "/images/Mask group (5).svg",
//     title: "Mountain house",
//     icon: "/images/Like Icon.svg",
//   },
// ];

function ImageList({ isModalOpen, onCloseModal }) {
  function handleAddPost(newPost) {
    setPosts((prev) => [newPost, ...prev]);
  }

  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "/images/Mask group.svg",
      title: "Val Thorens",
      icon: "/images/Like Icon.svg",
    },
    {
      id: 2,
      image: "/images/Mask group (1).svg",
      title: "Restaurant terrace",
      icon: "/images/Like Icon.svg",
    },
    {
      id: 3,
      image: "/images/Mask group (2).svg",
      title: "An outdoor cafe",
      icon: "/images/Like Icon.svg",
    },
    {
      id: 4,
      image: "/images/Mask group (3).svg",
      title: "A very long bridge, over the forest...",
      icon: "/images/Like Icon.svg",
    },
    {
      id: 5,
      image: "/images/Mask group (4).svg",
      title: "Tunnel with morning light",
      icon: "/images/Like Icon.svg",
    },
    {
      id: 6,
      image: "/images/Mask group (5).svg",
      title: "Mountain house",
      icon: "/images/Like Icon.svg",
    },
  ]);
  const toggleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };
  return (
    <>
      <main className="image-container" aria-label="image-conatiner">
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.image} alt={post.title} className="image" />
            <div className="image-title">
              <p>{post.title}</p>
              <button onClick={() => toggleLike(post.id)}>
                {post.liked ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))}
      </main>
      <NewPostModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        onAddPost={handleAddPost}
      />
    </>
  );
}

export default ImageList;
