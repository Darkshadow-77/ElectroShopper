
function MySlide({ image, title, description, link }) {
  return (
      <div className="slide-item"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <a href={link}
            className="link-img" 
        >
          <img src={image} alt={title} />
        </a>
        <div className="slide-text">
          <h2>{title}</h2>
          <p>{description}</p>
          {link && (
            <a href={link}>
              <button>Voir plus</button>
            </a>
          )}
        </div>
      </div>
  );
}

export default MySlide;
