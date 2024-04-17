import React from 'react';
import Image from 'next/image';

const aboutus = () => {
  return (
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title text-primary-green">
          About us
          </h1>

          <p className="hero__subtitle2 ">
          We are a premier car rental company offering luxury rare cars from prestigious distributors such as Mansory and Brabus. Based in London, our collection comprises high-performance supercars tailored for enthusiasts who seek unparalleled driving experiences. With a reputation built on trust and excellence, we ensure every rental exceeds expectations.
        </p>

        <p className="hero__subtitle2">
          Our commitment to quality extends beyond the vehicles we offer. From seamless booking experiences to personalized customer service, we prioritize your satisfaction at every step. Whether you're planning a special occasion or simply craving an exhilarating drive, trust us to deliver luxury, performance, and prestige.
        </p>
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
              <Image src="/urus2.png" alt="about us"
              fill className="object-contain"/>
            </div>
              <div className="hero__image-overlay2"/>
            </div>
       </div> 
  )
}

export default aboutus;