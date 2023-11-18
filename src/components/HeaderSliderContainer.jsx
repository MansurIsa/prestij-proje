import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import 'swiper/css/effect-fade';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerList } from '../actions/MainAction';
import { Link } from 'react-router-dom';
import HeaderLoading from './loading/HeaderLoading';


const HeaderSliderContainer = () => {
    const swiperRef = useRef(null);
    // const [activeIndex, setActiveIndex] = useState(0);

    const dispatch = useDispatch();
    const bannerListArr = useSelector(state => state.Data.bannerListArr)
    const isHeaderLoading = useSelector(state => state.Data.isHeaderLoading)
    console.log(bannerListArr);
    useEffect(() => {
        dispatch(getBannerList())
    }, [dispatch])

   


    // let headerArr = [
    //     {
    //         id: 1,
    //         img: HeaderFirstImg,
    //         headerOne: 'İmtahan nəticələri üçün daxil olun'
    //     },
    //     {
    //         id: 2,
    //         img: HeaderSecondImg,
    //         headerOne: 'İmtahan nəticələri üçün daxil olun1'
    //     },
    //     {
    //         id: 3,
    //         img: HeaderThirdImg,
    //         headerOne: 'İmtahan nəticələri üçün daxil olun2'
    //     },
    //     {
    //         id: 4,
    //         img: HeaderFourImg,
    //         headerOne: 'İmtahan nəticələri üçün daxil olun3'
    //     },
    //     {
    //         id: 5,
    //         img: HeaderFiveImg,
    //         headerOne: 'İmtahan nəticələri üçün daxil olun4'
    //     }
    // ]


    


    // useEffect(() => {
        


    //     const interval = setInterval(() => {
    //         if (swiperRef.current && swiperRef.current.swiper) {
    //             setActiveIndex((prevIndex) => (prevIndex + 1) % bannerListArr?.length);
    //             swiperRef.current.swiper.slideNext();

    //         }



    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [activeIndex]);

    useEffect(() => {
        


        const interval = setInterval(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                // setActiveIndex((prevIndex) => (prevIndex + 1) % bannerListArr?.length);
                swiperRef.current.swiper.slideNext();

            }



        }, 5000);

        return () => clearInterval(interval);
    }, [swiperRef, bannerListArr]);






    return (
        <div className='header_slider_container'>
            {
                bannerListArr.length > 0 ?
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        keyboard={{
                            enabled: true,
                        }}
                        grabCursor
                        autoplay={true}
                        effect='fade'
                        
                        pagination={{ type: 'bullets', clickable: true }}
                        modules={[Keyboard, Pagination, Navigation, EffectFade]}
                        className="mySwiper header_slider_cards_container"
                    >

                        {
                            bannerListArr?.map((data, i) => {
                                return (
                                    <>
                                        {
                                            data?.is_active ?
                                                <SwiperSlide key={i} style={{
                                                    background: `url(${data?.image})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }} className='header_slider_card'>
                                                    <div className="header_slider_bg_shadow">
                                                        <div className="header_main_flex_container container">

                                                            <div className='header_middle_container_content'>

                                                                <h1 className='haeder_one'>
                                                                   
                                                                    {

                                                                        Array.from(data?.title).map((z, i) => {
                                                                            return (
                                                                                <span>{z}</span>
                                                                            )
                                                                        })
                                                                    }

                                                                </h1>

                                                                <Link to={data?.link}>
                                                                    <button><span>Read More</span></button>
                                                                </Link>



                                                            </div>

                                                        </div>


                                                    </div>

                                                </SwiperSlide> : null
                                        }
                                    </>

                                )
                            })
                        }


                        




                    </Swiper> : null
            }

            {isHeaderLoading && <HeaderLoading />}

        </div>
    )
}

export default HeaderSliderContainer