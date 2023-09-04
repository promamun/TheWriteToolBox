import {Swiper, SwiperSlide} from "swiper/react";
import React, {useEffect, useState} from "react";
import { Autoplay, Pagination ,EffectCoverflow} from 'swiper/modules';
import axios from "../../../helper/axios";
import message from "../../../helper/message";
import CourseSliderCard from "./CourseSliderCard";

function SwiperSlider(){
    const [isLoading, setIsLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    console.log(courses)
    useEffect(() => {
        setIsLoading(true);

        async function fetchCourses() {
            try {
                const response = await axios.get("/all-courses");
                if (response.data.success) {
                    setCourses(response.data.courses);
                } else {
                    message.error(response.data.message);
                }
            } catch (error) {
                setIsLoading(false);
                message.error("Something Went Wrong!!!");
                console.error(error);
            }
        }

        fetchCourses();
    }, []);
    return(
        <>
            <div className="banner-card pb--60 mb--50 swiper mySwiper rbt-dot-bottom-center banner-swiper-active">
                <Swiper effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        modules={[Autoplay,EffectCoverflow, Pagination]}
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
                        }}  className='swiper-wrapper'  >
                    {/*// <!-- Start Single Card  -->*/}
                    {courses.map((course, index) => (
                        <SwiperSlide>
                            <CourseSliderCard key={index} course={course} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
export default SwiperSlider