"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {

  }
    return(
        <div className="hero">
          <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
            Dream,                                
            Rent,
            Enjoy.
            </h1>

            <p className="hero__subtitle">
            Our luxury cars are precisely what you need to cruise around London.
            </p>

            <CustomButton 
            title="Explore Cars"
            containerStyles="bg-primary-green text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
          </div>
          <div className="hero__image-container">
            <div className="hero__image">
              <Image src="/mansory3.png" alt="hero"
              fill className="object-contain"/>
            </div>
              <div className="hero__image-overlay"/>
            </div>
        </div>
    )
}

export default Hero