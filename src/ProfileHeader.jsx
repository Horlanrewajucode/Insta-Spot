function ProfileHeader() {
  return (
    <div className="profile-container" aria-label="profile banner">
      <div className="profile-container-left">
        <img src="/images/Avatar.svg" alt="profile image" />
        <div className="user-details">
          <h3 className="name">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            dolore perspiciatis adipisci odit necessitatibus obcaecati quo ipsam
            laudantium id, alias officia est facere sed provident blanditiis
            voluptates, quis temporibus possimus!
          </h3>
          <p className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enimc
            nulla dolorum? Cumque tempora labore, fugiat sit est eaque maxime
            quasi earum hic consequuntur aut esse vitae similique? Possimus,
            quam.
          </p>
          <button className="edit-btn" aria-label="edit-profile-button">
            <img src="/images/Group 2.svg" alt="edit profile button" />
            Edit Profile
          </button>
        </div>
      </div>
      <div>
        <button className="new-post-btn" aria-label="new-post-button">
          <img src="/images/Group 26.svg" alt="New post button" />
          New Post
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
