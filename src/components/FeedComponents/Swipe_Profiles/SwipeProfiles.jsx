import React from 'react'
import "./Swipe_Profiles.css";
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
const SwipeProfiles = () => {
    const profiles = [
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "floydian",
        },
        {
            img: "https://res.cloudinary.com/diyky5uya/image/upload/v1648645717/profilePic1_cmmsdz.png",
            linkTo: "/",
            name: "kichi",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "floydian",
        },
        {
            img: "https://res.cloudinary.com/diyky5uya/image/upload/v1648804907/Ellipse_1_fsaztg.png",
            linkTo: "/",
            name: "kichi",
        },
        {
            img: "https://res.cloudinary.com/diyky5uya/image/upload/v1648645717/profilePic1_cmmsdz.png",
            linkTo: "/",
            name: "floydian",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "kichi",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "floydian",
        },
        {
            img: "https://res.cloudinary.com/diyky5uya/image/upload/v1648645717/profilePic1_cmmsdz.png",
            linkTo: "/",
            name: "kichi",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "floydian",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "kichi",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "floydian",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "kichi",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "floydian",
        },
        {
            img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png",
            linkTo: "/",
            name: "kichi",
        },
        
        
    ]
  return (
    <>
         <Swiper
        spaceBetween={40}
        slidesPerView={8}
       
        style={{width: "100%", paddingLeft: '20px'}}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {profiles.map((item, index) => {
          return (
              <>
            <SwiperSlide key={index} className="swiper_slide">
            <Link to={item.linkTo} style={{textDecoration: 'none', color: "inherit"}}>
              <div
                className="profile_item_wrapper"
              >
                <img
                  src={item.img}
                  alt="Bnollar"
                  className="prfile_item_image"
                />
                <h5 className="profile_item_title">{item.name}</h5>
              </div>
              </Link>
            </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <hr className='swiper-border' />
    </>
  )
}

export default SwipeProfiles