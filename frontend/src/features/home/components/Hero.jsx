import React, { useState, useEffect } from 'react';
import Button from '../../../components/common/Button';
import { Images, ImageSlider } from "../../../utils/imageSlider"
import "swiper/css";
import "swiper/css/effect-fade";
import "../../../styles/hero.css"
import 'swiper/css';
import { fetchHeroSlides } from '../../../utils/api';

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await fetchHeroSlides();
        const mappedSlides = data.map((slide, index) => new Images(String(slide.id || index), slide.image_url));
        setSlides(mappedSlides);
      } catch (error) {
        console.error("Failed to load hero slides", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSlides();
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {isLoading ? (
        <div className="absolute inset-0 bg-background flex items-center justify-center z-20">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : slides.length > 0 ? (
        <ImageSlider slider={slides}/>
      ) : null}

      <div className='absolute  w-full h-screen'>

      </div>

      <div className="absolute inset-0 bg-linear-to-t from-secondary via-transparent to-secondary/70"></div>


      <div className="absolute z-10 text-center container mx-auto px-4 flex flex-col items-center justify-center gap-4 h-full">

        <h1 className="text-5xl sm:text-6.5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-2 md:mb-4 shadow-lg ">
          أجامتيس: تعريف الأناقة
          <br />
          <span className="text-primary italic font-heading">في كل تفاصيلها</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Button variant="primary" className="px-8 py-3 text-lg w-full sm:w-auto">عرض الخدمات</Button>
          <Button variant="outline" className="px-8 py-3 text-lg w-full sm:w-auto">استشارة خاصة</Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>

      </div>


    </section>
  );
};

export default Hero;










