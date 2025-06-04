import React, { useState } from "react";

export function NewPostModal({ isOpen, onClose, onAddPost }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handleSubmit = () => {
    if (title && image) {
      onAddPost({
        id: Date.now(),
        title,
        image,
        liked: false,
      });
      setTitle("");
      setImage(null);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="btn-close" onClick={onClose}>
          ❌
        </button>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <label>
          Image Title:
          <input
            type="text"
            placeholder="Enter your image title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button className="btn-open" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
