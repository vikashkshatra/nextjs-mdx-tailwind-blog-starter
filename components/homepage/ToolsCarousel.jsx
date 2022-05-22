// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import SwiperCore, { Autoplay } from 'swiper';

export default () => {

  SwiperCore.use([Autoplay])
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={-10}
      slidesPerView={6}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      autoplay={{delay:2000}}
    >
      <SwiperSlide><SiJavascript size={30} color='yellow'/></SwiperSlide>
      <SwiperSlide><SiPython size={30} color='blue'/></SwiperSlide>
      <SwiperSlide><SiNextdotjs size={30} color='skyblue'/></SwiperSlide>
      <SwiperSlide><SiMongodb size={30} color='green'/></SwiperSlide>
      <SwiperSlide><SiTailwindcss size={30} color='purple'/></SwiperSlide>
      <SwiperSlide><SiFramer size={30} color='teal'/></SwiperSlide>
      <SwiperSlide><FaReact size={30} color='violet'/></SwiperSlide>
      <SwiperSlide><IoLogoNodejs size={30} color='green'/></SwiperSlide>
    </Swiper>
  );
};