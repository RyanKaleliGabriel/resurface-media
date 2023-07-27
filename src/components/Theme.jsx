import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import theme1 from "../assests/theme1.png";
import theme2 from "../assests/theme2.png";
import theme3 from "../assests/theme3.png";
import theme4 from "../assests/theme4.png";
import theme5 from "../assests/theme5.png";
import theme6 from "../assests/theme6.png";
import theme7 from "../assests/theme7.png";
import theme8 from "../assests/theme8.png";
import theme9 from "../assests/theme9.png";
import theme10 from "../assests/theme10.png";
import theme11 from "../assests/theme11.png";
import theme12 from "../assests/theme12.png";
import theme13 from "../assests/theme13.png";
import theme14 from "../assests/theme14.png";
import theme15 from "../assests/theme15.png";

const slides = [
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
  theme7,
  theme8,
  theme9,
  theme10,
  theme11,
  theme12,
  theme13,
  theme14,
  theme15,
];

function Theme() {
  return (
    <div id="THEME">
      <div className="centeredDivParent">
        <div className="centeredDivChild">
          <h2 style={{ marginBottom: "1.5rem" }}>Our Theme</h2>
          <hr className="horizontalLine" style={{ marginBottom: "1.5rem" }} />
          <p style={{color:"grey"}}>
            We provide our service in most stylish way to ease the
            <span>
              <br />
            </span>{" "}
            use of the app.
          </p>
        </div>
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
              {slides.map((slide) => (
                <SwiperSlide>
                  <img src={slide} className="img-theme" alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
}

export default Theme;
