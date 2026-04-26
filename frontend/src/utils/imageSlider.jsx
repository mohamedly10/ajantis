import React, { useState, useEffect } from 'react';


export function ImageSlider({ slider }) {

  const [image_src, setImageSrc] = useState(slider[0].src);

  const [index, setIndex] = useState(0);

  const [fade, setFade] = useState(false);



  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // ابدأ تلاشي الصورة القديمة
      setTimeout(() => {
        const nextIndex = (index + 1) % slider.length;
        setImageSrc(slider[nextIndex].src);
        setIndex(nextIndex);
        setFade(false); // أعد ظهور الصورة الجديدة
      }, 500); // مدة الفيد 0.5 ثانية لتتوافق مع CSS
    }, 5000);
  
    return () => clearInterval(interval);
  }, [index, slider]);
  



  return (
    <div className="main">
      {/* الصورة الحالية */}
      <img src={image_src} alt="slide" className="absolute inset-0 w-full h-full object-cover zoom-image" />

      {/* النقاط للتحكم بالصورة */}
      <div className='flex_row'>
   
      </div>
    </div>
  );
}

// class لتخزين بيانات الصور
export class Images {
  constructor(id, src) {
    this.id = id;
    this.src = src;
  }
}
