import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import SliderImg3 from "../../../assets/images/course/course-01.jpg";
import React from "react";
import { Autoplay, Pagination ,EffectCoverflow} from 'swiper/modules';

function SwiperSlider(){
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
                    <SwiperSlide className={'swiper-slide'} >
                        <div className="rbt-card variation-01 rbt-hover">
                            <div className="rbt-card-img">
                                <Link to="">
                                    <img src={SliderImg3} alt="Course image" />
                                    <div className="rbt-badge-3 bg-white">
                                        <span>-40%</span>
                                        <span>Off</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="rbt-card-body">
                                <ul className="rbt-meta">
                                    <li>
                                        <i className="feather-book" />
                                        12 Lessons
                                    </li>
                                    <li>
                                        <i className="feather-users" />
                                        50 Students
                                    </li>
                                </ul>
                                <h4 className="rbt-card-title">
                                    <Link to="">title</Link>
                                </h4>
                                <p className="rbt-card-text">description</p>
                                <div className="rbt-review">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="rating-count">
                                (15 Reviews)
                              </span>
                                </div>
                                <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                        <span className="current-price">$70</span>
                                        <span className="off-price">$120</span>
                                    </div>
                                    <Link
                                        className="rbt-btn-link left-icon"
                                        onClick=""
                                        // style="cursor: pointer"
                                    >
                                        <i className="feather-shopping-cart" />
                                        Add To Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'swiper-slide'} >
                        <div className="rbt-card variation-01 rbt-hover">
                            <div className="rbt-card-img">
                                <Link to="">
                                    <img src={SliderImg3} alt="Course image" />
                                    <div className="rbt-badge-3 bg-white">
                                        <span>-40%</span>
                                        <span>Off</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="rbt-card-body">
                                <ul className="rbt-meta">
                                    <li>
                                        <i className="feather-book" />
                                        12 Lessons
                                    </li>
                                    <li>
                                        <i className="feather-users" />
                                        50 Students
                                    </li>
                                </ul>
                                <h4 className="rbt-card-title">
                                    <Link to="">title</Link>
                                </h4>
                                <p className="rbt-card-text">description</p>
                                <div className="rbt-review">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="rating-count">
                                (15 Reviews)
                              </span>
                                </div>
                                <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                        <span className="current-price">$70</span>
                                        <span className="off-price">$120</span>
                                    </div>
                                    <Link
                                        className="rbt-btn-link left-icon"
                                        onClick=""
                                        // style="cursor: pointer"
                                    >
                                        <i className="feather-shopping-cart" />
                                        Add To Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'swiper-slide'} >
                        <div className="rbt-card variation-01 rbt-hover">
                            <div className="rbt-card-img">
                                <Link to="">
                                    <img src={SliderImg3} alt="Course image" />
                                    <div className="rbt-badge-3 bg-white">
                                        <span>-40%</span>
                                        <span>Off</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="rbt-card-body">
                                <ul className="rbt-meta">
                                    <li>
                                        <i className="feather-book" />
                                        12 Lessons
                                    </li>
                                    <li>
                                        <i className="feather-users" />
                                        50 Students
                                    </li>
                                </ul>
                                <h4 className="rbt-card-title">
                                    <Link to="">title</Link>
                                </h4>
                                <p className="rbt-card-text">description</p>
                                <div className="rbt-review">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="rating-count">
                                (15 Reviews)
                              </span>
                                </div>
                                <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                        <span className="current-price">$70</span>
                                        <span className="off-price">$120</span>
                                    </div>
                                    <Link
                                        className="rbt-btn-link left-icon"
                                        onClick=""
                                        // style="cursor: pointer"
                                    >
                                        <i className="feather-shopping-cart" />
                                        Add To Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default SwiperSlider