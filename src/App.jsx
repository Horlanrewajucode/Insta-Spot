import "./index.css";
import Logo from "./Logo";
import ProfileHeader from "./ProfileHeader";
import ImageList from "./ImageList";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewPostClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Logo />
      <ProfileHeader onNewPostClick={handleNewPostClick} />
      <ImageList isModalOpen={isModalOpen} onCloseModal={handleCloseModal} />
      <Footer />
    </>
  );
}

export default App;
