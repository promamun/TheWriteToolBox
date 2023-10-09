import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import CourseSliderCard from "./CourseSliderCard";
import { useSelector } from "react-redux";

function SwiperSlider() {
  let { courses } = useSelector((state) => state.courses);
  courses = courses ? courses.courses : [];
  return (
    <div className="banner-card pb--60 mb--50 swiper mySwiper rbt-dot-bottom-center banner-swiper-active">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="swiper-wrapper"
      >
        {/*// <!-- Start Single Card  -->*/}
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseSliderCard key={index} course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SwiperSlider;
