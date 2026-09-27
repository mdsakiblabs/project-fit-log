import React from "react";
import banner from '@/assets/banner.png'
import Image from "next/image";
const HeroSectionBannerImage = () => {
  return (
    <div>
      <Image
        src={banner}
        width={400}
        alt="banner-image"
        
      />
    </div>
  );
};

export default HeroSectionBannerImage;
