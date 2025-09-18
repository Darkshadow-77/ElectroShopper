import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import MySlide from "../components/MySlide"
import FashionBanner from "../assets/fashion.jpeg"
import ElectronicsBanner from "../assets/electronics.jpeg"
import SeasonBanner from "../assets/summer_theme.jpeg"
import PerfumBanner from "../assets/Designer.jpeg"
import SaleBanner from "../assets/banner.jpeg"

function MySlider() {
  return (
    <Swiper 
      spaceBetween={30}
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      className="swp"
    >
      <SwiperSlide>
        <MySlide
        image={FashionBanner}
        title="Nouvelle Collection Mode"
        description="Découvrez nos articles tendance de la saison"
        link="/products/fashion"     
      />
      </SwiperSlide>
      
      <SwiperSlide>
        <MySlide
        image={ElectronicsBanner}
        title="Nouvelle Collection Mode"
        description="Découvrez nos articles tendance de la saison"
        link="/products/fashion"     
      />
      </SwiperSlide>
      
      <SwiperSlide>
        <MySlide
        image={SeasonBanner}
        title="Nouvelle Collection Mode"
        description="Découvrez nos articles tendance de la saison"
        link="/products/fashion"     
      />
      </SwiperSlide>
      
      <SwiperSlide>
        <MySlide
        image={PerfumBanner}
        title="Nouvelle Collection Mode"
        description="Découvrez nos articles tendance de la saison"
        link="/products/fashion"     
      />
      </SwiperSlide>
      
      <SwiperSlide>
        <MySlide
        image={FashionBanner}
        title="Nouvelle Collection Mode"
        description="Découvrez nos articles tendance de la saison"
        link="/products/fashion"     
      />
      </SwiperSlide>
      
      <SwiperSlide>
        <MySlide
        image={SaleBanner}
        title="Nouvelle Collection Mode"
        description="Découvrez nos articles tendance de la saison"
        link="/products/fashion"     
      />
      </SwiperSlide> 
    </Swiper>
  );
}

export default MySlider;
