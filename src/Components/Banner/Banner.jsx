

import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from "react-awesome-reveal";

import 'swiper/css';
import 'swiper/css/pagination';

import './banner.css';

import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="max-h-screen my-10 bg-cover rounded-3xl px-2 md:px-11 container mx-auto " >
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide className="">
          <div
            className=" bg-center  h-96 bg-cover bg-warning-content rounded-3xl    container w-full bg-no-repeat"
            style={{ backgroundImage: `url(https://iili.io/JUEil49.jpg)` }}
          >
         
            <div className="flex flex-col space-y-5 md:space-y-10">
              <h1
          className='text-3xl p-5 md:p-10 font-bold text-center  px-5 md:px-10'
          
              >
                <Fade>Explore </Fade> <br />
                <span className="text-3xl md:text-6xl ">the Beauty of Bali</span>
              </h1>

              <p className=" px-5 md:px-10 text-lg md:text-2xl text-black">
            <Fade cascade damping={0.1}>  Discover the stunning beaches, lush landscapes, and vibrant culture of Bali. Plan your dream vacation today!</Fade>
              </p>
              <div className="pl-5 md:pl-10">
                <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Book Now
                </button>
              <Link to={"/contact"}>  <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Contact Us
                </button></Link>
              </div>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className="">
        <div
            className=" bg-center  h-96 bg-cover bg-warning-content rounded-3xl   container w-full bg-no-repeat"
            style={{ backgroundImage: `url(https://iili.io/JUEsR8g.jpg)` }}
          >
         
            <div className="flex flex-col space-y-5 md:space-y-10">
              <h1
            className='text-3xl p-5 md:p-10 font-bold text-center  px-5 md:px-10'
          
              >
                Experience e<br />
                <span className="text-3xl md:text-6xl ">Langkawi Island Paradis</span>
              </h1>

              <p className="text-black px-5 md:px-10 text-lg md:text-2xl">
              Escape to Langkawi, an archipelago of 99 islands in the Andaman Sea, known for its pristine beaches and natural beauty.
              </p>
              <div className="pl-5 md:pl-10">
                <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Book Now
                </button>
              <Link to={"/contact"}>  <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Contact Us
                </button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
        <div
            className=" bg-center  h-96 bg-cover bg-warning-content rounded-3xl   container w-full bg-no-repeat"
            style={{ backgroundImage: `url(https://iili.io/JUEL3Vp.jpg)` }}
          >
         
            <div className="flex flex-col space-y-5 md:space-y-10">
              <h1
          
          className='text-3xl p-5 md:p-10 font-bold text-center  px-5 md:px-10'
              >
               Discover  <br />
                <span className="text-3xl md:text-6xl ">the Charm of Ho Chi Minh City</span>
              </h1>

              <p className="text-black px-5 md:px-10 text-lg md:text-2xl">
              Explore the bustling streets, historical landmarks, and vibrant culture of Ho Chi Minh City, the largest city in Vietnam.
              </p>
              <div className="pl-5 md:pl-10">
                <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Book Now
                </button>
              <Link to={"/contact"}>  <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Contact Us
                </button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}