import React, { useState } from "react";
import "./Carousel.css";
let CarouselOwn = () => {
  let [customer, setCustomer] = useState(true);
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
      <div className="what straight">
        <img src="assets/Screenshot 2025-01-23 135710.png" alt=""  className="dots_img1"/>
        <h1>Straight from {customer ? "Customer's":"Captain's"} Heart</h1>
        <button onClick={() => setCustomer(true)} id={customer ? "active" : ""} className="button customer">Customers</button>
        <button onClick={() => setCustomer(false)} id={!customer ? "active" : ""} className="button captain">Captains</button>
        {customer?
        <>
        <div className="carouselOwn">
          <button className="arrow left" onClick={handlePrev} disabled={currentIndex==0}>
            &lt;
          </button>
          <div className="straight_captain">
            {carouselItems.slice(currentIndex, currentIndex + 2).map((item, index) => (
                <div className="review" id="straight_customer" key={index}>
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
        </>
        :(
        <>
        <div className="straight_captain responsive">
            <div className="review">
                <img src="https://content.rapido.bike/uploads/test/originals/49e699db-bdfb-4978-97bb-46533d982a1b.png" alt="" />
                <div className="review_cont">
                   <p>My account was credited with the amount and wondered who it was. I did not expect it but Rapido helped me at the right time. I’m glad that support has been extended by Rapido to us. I’ve been working with Rapido for the past 2 and a half years and really obliged for this small deed. Thank You, Rapido!!</p>
                   <h4>Devendar Kumar</h4>
                   <span>Captain</span>
                </div>
            </div>
            <div className="review">
               <img src="https://content.rapido.bike/uploads/test/originals/3615fd59-a79c-485a-adb8-63d5d52fac06.png" alt=""/>
               <div className="review_cont">
                  <p>I am working in Rapido for the last 8 months and I would really like to thank Rapido, I am differently-abled and Rapido has given me a good opportunity to earn more money compared to my previous job. Wonder-full platform to earn money with pride. </p>
                  <h4>Murugan</h4>
                  <span>Captain</span>
               </div>
            </div>
        </div>
        <img src="assets/Screenshot 2025-01-23 135731.png" alt="" className="dots_img2"/></>)}
      </div>
    </>
  );
};
export default CarouselOwn;