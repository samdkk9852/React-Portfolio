import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const data = [
  {
    avatar: AVTR1,
    name: "Crocodile Sir",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam voluptates sed eligendi consequatur voluptate et quia ipsam accusantium assumenda."
  },
  {
    avatar: AVTR2,
    name: "Robin",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam voluptates sed eligendi consequatur voluptate et quia ipsam accusantium assumenda."
  },
  {
    avatar: AVTR3,
    name: "MR-1",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam voluptates sed eligendi consequatur voluptate et quia ipsam accusantium assumenda."
  },
  {
    avatar: AVTR4,
    name: "Mr-2",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam voluptates sed eligendi consequatur voluptate et quia ipsam accusantium assumenda."
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Friends</h5>
      <h2>Testimonials</h2>

      <Swiper pagination={true} modules={[Pagination]} className="container testimonials__container mySwiper">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
