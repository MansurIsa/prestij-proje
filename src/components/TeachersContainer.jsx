import React, { useEffect } from 'react'
import { Keyboard, Navigation, Controller, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { getTeachersList } from '../actions/MainAction';
import { Link } from 'react-router-dom';


const TeachersContainer = () => {


    const dispatch = useDispatch()
    const teachersListArr = useSelector(state => state.Data.teachersListArr)
    useEffect(() => {
        dispatch(getTeachersList())
    }, [dispatch])

    console.log(teachersListArr);

   


    return (
        <div className='teachers_container'>
            <div className="teachers_next_prev_btns">
                <div className="teachers_prev_btn">
                    <IoIosArrowBack className='teachers_prev_btn_icon' />
                </div>
                <div className="teachers_next_btn">
                    <IoIosArrowForward className='teachers_next_btn_icon' />
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                grabCursor={true}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                }}
                pagination={{ clickable: true }}
                navigation={{ nextEl: '.teachers_next_btn', prevEl: '.teachers_prev_btn' }}
                modules={[Keyboard, Navigation, Controller, EffectCube]}
                className="mySwiper teachers_slider_card_container container"

            >



                {
                    teachersListArr?.map((teacher, i) => {
                        return (
                            
                            <>
                                {
                                    teacher.is_active ?
                                        <SwiperSlide key={i}>
                                            <Link key={i} to={`/müəllim/${teacher.name}-${teacher.surname}/${teacher.id}`}>
                                                <div className="teachers_slider_card">
                                                    <img src={teacher.image} alt="" />
                                                    <h3>{teacher.name + ' ' + teacher.surname}</h3>

                                                    <FaQuoteLeft className="quote-icon" />
                                                    <div className="details">
                                                        <span>{teacher.profession}</span>

                                                    </div>
                                                </div>
                                            </Link>

                                        </SwiperSlide> : null
                                }

                            </>

                        )
                    })
                }






            </Swiper>


        </div>
    )
}

export default TeachersContainer