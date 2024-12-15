import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <section>
      <SectionHeader
        heading={"Testimonials"}
        subHeading={"What our clients say"}
        className={'pt-0'}
      ></SectionHeader>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-20"
      >
        {reviews.map((review) => (
          <SwiperSlide  key={review._id}>
            <div className="text-center px-36">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                className="mx-auto"
              
              />
              <p className="mt-5">{review.details}</p>
              <p className="text-yellow-400 mt-5 font-bold">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
