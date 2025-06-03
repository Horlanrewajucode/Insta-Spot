const photos = [
  {
    id: 1,
    src: "/images/Mask group.svg",
    title: "Val Thorens",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 2,
    src: "/images/Mask group (1).svg",
    title: "Restaurant terrace",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 3,
    src: "/images/Mask group (2).svg",
    title: "An outdoor cafe",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 4,
    src: "/images/Mask group (3).svg",
    title: "A very long bridge, over the forest...",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 5,
    src: "/images/Mask group (4).svg",
    title: "Tunnel with morning light",
    icon: "/images/Like Icon.svg",
  },
  {
    id: 6,
    src: "/images/Mask group (5).svg",
    title: "Mountain house",
    icon: "/images/Like Icon.svg",
  },
];
function ImageList() {
    return (
      <main className="image-container" aria-label="image-conatiner">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.src} alt={photo.title} className="image" />
            <div className="image-title">
                <p>{photo.title}</p>
                <button>
                  <img src={photo.icon} alt={photo.title} />
                </button>
            </div>
          </div>
        ))}
      </main>
    );
}

export default ImageList
