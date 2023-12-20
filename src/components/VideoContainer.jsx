import React, { useEffect, useRef } from 'react'
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getVideoGalleryList } from '../actions/MainAction';


const VideoContainer = () => {
    const swiperNewsRef = useRef(null);

    const dispatch = useDispatch()
    const videoGalleryListArr = useSelector(state => state.Data.videoGalleryListArr)
    useEffect(() => {
        dispatch(getVideoGalleryList())
    }, [dispatch])

    console.log(videoGalleryListArr);
    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperNewsRef.current && swiperNewsRef.current.swiper) {
                swiperNewsRef.current.swiper.slideNext();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='video_container container'>


            <Swiper

                ref={swiperNewsRef}
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                grabCursor
                autoplay={{
                    delay: 3000
                }}


                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    650: {
                        slidesPerView: 2,
                    },

                }}
                navigation={{
                    nextEl: ".slider_next_btn2",
                    prevEl: ".slider_prev_btn2"
                }}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    videoGalleryListArr?.map((data, i) => {
                        return (
                            <SwiperSlide key={i} className='video_card'>

                                <iframe src={data.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </SwiperSlide>
                        )
                    })
                }


                {/* <SwiperSlide className='video_card'>

                    <iframe src="https://www.youtube.com/embed/_LZEDM2tGLw?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </SwiperSlide>
                <SwiperSlide className='video_card'>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/grcSG42uOXg?si=TEpwPj0so70haSd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide className='video_card'>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/8v3naz9DF2o?si=6L2wq_RD9W5Or6-t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide className='video_card'>

                    <iframe src="https://www.youtube.com/embed/_LZEDM2tGLw?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </SwiperSlide>
                <SwiperSlide className='video_card'>

                    <iframe src="https://www.youtube.com/embed/_LZEDM2tGLw?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </SwiperSlide> */}


            </Swiper>

            <div className="news_swiper_btns">
                <div className="swiper_button slider_prev_btn2">
                    <IoIosArrowBack />
                </div>
                <div className="swiper_button slider_next_btn2">
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default VideoContainer



