// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";

export default () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="container px-5 my-20">
      <Swiper
        // install Swiper modules
        spaceBetween={40}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 2000 }}
        freeMode={true}
      >
        <SwiperSlide>
          <SiJavascript size={40} color="fcba03" />
        </SwiperSlide>
        <SwiperSlide>
          <SiPython size={40} color="#3b67f7" />
        </SwiperSlide>
        <SwiperSlide>
          <SiNextdotjs size={40} color="skyblue" />
        </SwiperSlide>
        <SwiperSlide>
          <SiMongodb size={40} color="green" />
        </SwiperSlide>
        <SwiperSlide>
          <SiTailwindcss size={40} color="purple" />
        </SwiperSlide>
        <SwiperSlide>
          <SiFramer size={40} color="teal" />
        </SwiperSlide>
        <SwiperSlide>
          <FaReact size={40} color="violet" />
        </SwiperSlide>
        <SwiperSlide>
          <IoLogoNodejs size={40} color="green" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
