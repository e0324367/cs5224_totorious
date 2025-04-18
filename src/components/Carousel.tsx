function Carousel() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      style={{
        margin: "0 auto",
        border: "5px solid #cee5e2",
        borderRadius: "10px",
      }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/image1.png"
            className="d-block w-100"
            alt="Why use TOTOrious?"
          />
        </div>
        <div className="carousel-item">
          <img src="/image2.png" className="d-block w-100" alt="Second image" />
        </div>
        <div className="carousel-item">
          <img
            src="/image3.png"
            className="d-block w-100"
            alt="National Problem Gambling Helpline"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{ backgroundColor: "#DCDEE6" }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{ backgroundColor: "#DCDEE6" }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
