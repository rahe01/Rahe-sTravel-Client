
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './banner.css';

// import required modules
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
            className=" bg-center  h-96 bg-cover bg-warning-content rounded-3xl   container w-full bg-no-repeat"
            style={{ backgroundImage: `url(https://iili.io/JU3n42I.jpg)` }}
          >
            {" "}
            <div className="flex flex-col space-y-5 md:space-y-10">
              <h1
                className="font-bold text-lg px-5 md:text-4xl 
            bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient
           pl-5 md:pl-10 pt-5 md:pt-10
            " data-aos="fade-right" data-aos-duration="1000"
              >
                We make your <br />{" "}
                <span className="text-3xl md:text-6xl ">Dreams come true</span>
              </h1>

              <p className="text-base-300 px-5 md:px-10 text-lg md:text-2xl" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
               
              </p>
              <div className="pl-5 md:pl-10">
                <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Book Now
                </button>{" "}
              <Link to={"/contact"}>  <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Contact Us
                </button></Link>
              </div>
            </div>
          </div>
          {/* Content for Slide 1 */}
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            className=" bg-center  h-96 bg-cover bg-warning-content rounded-3xl   container w-full bg-no-repeat"
            style={{ backgroundImage: `` }}
          >
            {" "}
            <div className="flex flex-col space-y-5 md:space-y-10">
              <h1
                className="font-bold text-lg px-5 md:text-4xl 
            bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient
           pl-5 md:pl-10 pt-5 md:pt-10
            "
              >
                We make your <br />{" "}
                <span className="text-3xl md:text-6xl">Dreams come true</span>
              </h1>

              <p className="text-base-300 px-5 md:px-10 text-lg md:text-2xl">
                
              </p>
              <div className="pl-5 md:pl-10">
                <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Book Now
                </button>{" "}
              <Link to={"/contact"}>  <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Contact Us
                </button></Link>
              </div>
            </div>
          </div>
          {/* Content for Slide 1 */}
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            className=" bg-center  h-96 bg-cover bg-warning-content rounded-3xl   container w-full bg-no-repeat"
            style={{ backgroundImage: `` }}
          >
            {" "}
            <div className="flex flex-col space-y-5 md:space-y-10">
              <h1
                className="font-bold text-lg px-5 md:text-4xl 
            bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient
           pl-5 md:pl-10 pt-5 md:pt-10
            "
              >
                We make your <br />{" "}
                <span className="text-3xl md:text-6xl">Dreams come true</span>
              </h1>

              <p className="text-base-300 px-5 md:px-10 text-lg md:text-2xl">
                
              </p>
              <div className="pl-5 md:pl-10">
                <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Book Now
                </button>{" "}
              <Link to={"/contact"}>  <button className="btn btn-ghost bg-violet-600 rounded-3xl">
                  Contact Us
                </button></Link>
              </div>
            </div>
          </div>
          {/* Content for Slide 1 */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}