import React, { useState } from "react";
import "../Carousel/Carousel.css";
let Slide = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let carouselItems = [
    {
      img: "https://content.rapido.bike/uploads/test/originals/00a7ad31-fbab-45c2-8ec7-85c6f9ac18bb.png",
      title: "Sriram",
      description: "It is an amazing app and very safe too to ride with as they have professional and great riders . It is also very feasible and we reach quicker as compared to any other mode of transport.",
    },
    {
      img: "https://content.rapido.bike/uploads/test/originals/cc0de2a5-6981-4119-a00c-77f1c4bebe63.png",
      title: "Praneet",
      description: "Well, I love rapido cuz it's quicker than other apps and they're mostly available anytime. And I don't know how to ride bikes but the app gives me joy to ride on a bike and I get to enjoy Bangalore's weather.",
    },
    {
      img: "https://content.rapido.bike/uploads/test/originals/6c3496e7-3068-4eaf-84c0-a6f104bcbbec.png",
      title: "Akash",
      description: "It is an amazing app and very safe too to ride with as they have professional and great riders . It is also very feasible and we reach quicker as compared to any other mode of transport.",
    },
    {
      img: "https://content.rapido.bike/uploads/test/originals/0b45a8b2-4235-49ed-826e-3881e8b5ca91.png",
      title: "Gayatri",
      description: "Well, I love rapido cuz it's quicker than other apps and they're mostly available anytime. And I don't know how to ride bikes but the app gives me joy to ride on a bike and I get to enjoy Bangalore's weather.",
    },
  ];
  // Function to handle the right arrow click
  let handleNext = () => {
    if (currentIndex < carouselItems.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle the left arrow click
  let handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <>
      <div className="what straight slide" style={{marginTop:"-250px"}}>
        <img src="assets/Screenshot 2025-01-23 135710.png" alt=""  className="dots_img1"/>
        <h1 style={{marginBottom:"50px"}} className="h1_media">What our employees say</h1>
        <div className="carouselOwn">
          <button className="arrow left" onClick={handlePrev} disabled={currentIndex==0}>
            &lt;
          </button>
          <div className="straight_captain" >
            {carouselItems.slice(currentIndex, currentIndex + 2).map((item, index) => (
                <div className="review" id="straight_customer" key={index} >
                  <img src={item.img} alt={item.title} />
                  <div className="review_cont">
                    <p>{item.description}</p>
                    <h4>{item.title}</h4>
                    <span>Customer</span>
                  </div>
                </div>
              ))}
          </div>
          <button className="arrow right" onClick={handleNext} disabled={currentIndex==2}>
            &gt;
          </button>
        </div>
        <div className="dots">
          {carouselItems.slice(0, carouselItems.length - 1).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <img src="assets/Screenshot 2025-01-23 135731.png" alt="" className="dots_img2 extra"/>
       </div>
    </>
  );
};
export default Slide;