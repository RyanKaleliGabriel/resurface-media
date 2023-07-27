import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import maryan from "../assests/maryan1.jpg";
import peterson from "../assests/peterson.jpg";
import samson from "../assests/samson.jpg";

export default function Testimonial() {
  const testimonials = [
    {
      image1: peterson,
      image2: maryan,
      image3: samson,
      name: "Maryan",
      content:
        "I was looking for a place to boost my social media pages views. Since i started using this app my pages followers and views have grown rapidly",
    },

    {
      image1: maryan,
      image2: peterson,
      image3: samson,
      name: "Peterson",
      content:
        "I have been using resurface app sharing links for other social media influencers. I have earned a lot through this platform.",
    },
    {
      image1: peterson,
      image2: samson,
      image3: maryan,
      name: "Peterson",
      content:
        "I take resurface media as a number one in the social media arena. Get started and see your social media pages grow.",
    },
  ];

  const renderstars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          class="fa-solid fa-star"
          style={{
            color: "#929396",
            marginBottom: "4rem",
            fontSize: "10px",
            marginLeft: "4px",
          }}
        ></i>
      );
    }
    return stars
  };
  return (
    <div>
      <div className="centeredDivParent">
        <div className="centeredDivChild">
          <h2 style={{ marginBottom: "1.5rem" }}>Testimonials</h2>
          <hr className="horizontalLine" style={{ marginBottom: "1.5rem" }} />
          <p style={{color:"grey"}}>How our community speaks about us.</p>
        </div>
        <div className="themeContainer">
          <div className="themeitems">
            <>
              <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide>
                    <img
                      src={testimonial.image1}
                      className="img-testone"
                      alt=""
                      style={{
                        width: "10%",
                        borderRadius: "50%",
                        border: " 2px solid skyblue",
                      }}
                    />
                    <img
                      src={testimonial.image2}
                      className="img-testtwo"
                      alt=""
                      style={{
                        width: "20%",
                        borderRadius: "50%",
                        border: " 2px solid skyblue",
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                    />
                    <img
                      src={testimonial.image3}
                      className="img-testthree"
                      alt=""
                      style={{
                        width: "10%",
                        borderRadius: "50%",
                        border: " 2px solid skyblue",
                      }}
                    />
                    <h5>{testimonial.name}</h5>
                    <p style={{color:"grey"}}>{testimonial.content}</p>
                    <div>{renderstars()}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
