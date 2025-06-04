import { useState, useEffect } from "react";

function ProfileHeader({ onNewPostClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum aliquid, commodi, fugiat, ut iste porro at iusto accusantium eius temporibus repellat nam consequatur perferendis cumque recusandae tempore delectus praesentium?",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum aliquid, commodi, fugiat, ut iste porro at iusto accusantium eius temporibus repellat nam consequatur perferendis cumque recusandae tempore delectus praesentium?",
    image: "/images/Avatar.svg",
  });

  return (
    <>
      <header className="profile-container" aria-label="profile banner">
        <div className="profile-container-left">
          <img src={profile.image} alt="profile image" />
          <div className="user-details">
            <div className="user-details1">
              <h3 className="name">{profile.name}</h3>
              <p className="title">{profile.title}</p>
            </div>
            <button
              className="edit-btn"
              onClick={() => setIsOpen(true)}
              aria-label="edit-profile-button"
            >
              <img src="/images/Group 2.svg" alt="edit profile button" />
              Edit Profile
            </button>
          </div>
        </div>
        <div>
          <button
            className="new-post-btn"
            aria-label="new-post-button"
            onClick={onNewPostClick}
          >
            <img src="/images/Group 26.svg" alt="New post button" />
            New Post
          </button>
        </div>

        {isOpen && (
          <EditModal
            profile={profile}
            onSave={(updated) => {
              setProfile(updated);
              setIsOpen(false);
            }}
            onClose={() => setIsOpen(false)}
          />
        )}
      </header>
    </>
  );
}

function EditModal({ profile, onClose, onSave }) {
  const [form, setForm] = useState(profile);

  // Escape key to close modal
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="btn-close" onClick={onClose}>
          ❌
        </button>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter your name"
            required
            minLength="2"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={form.title}
            placeholder="Enter your title"
            required
            minLength="2"
            onChange={handleInputChange}
          />
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <button className="btn-open" onClick={() => onSave(form)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
