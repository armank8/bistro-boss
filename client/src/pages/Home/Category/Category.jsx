import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Category() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-10"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-4xl text-center -mt-20 text-white font-bold text-shadow-xl">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-4xl text-center -mt-20 text-white font-bold text-shadow-xl">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-4xl text-center -mt-20 text-white font-bold text-shadow-xl">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-4xl text-center -mt-20 text-white font-bold text-shadow-xl">Desserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-4xl text-center -mt-20 text-white font-bold text-shadow-xl">Masalas</h3>
      </SwiperSlide>
    </Swiper>
  );
}
