import React from 'react';
import Image from 'next/image';

const racetracks = () => {
  return (
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title text-primary-green">
          race tracks
          </h1>

          <p className="hero__subtitle2">
  Welcome to our premier race track service in London, exclusively tailored for our registered customers. Experience the thrill of high-speed racing on our meticulously designed tracks, crafted to challenge even the most seasoned drivers.
</p>

<p className="hero__subtitle2">
  Our track rental service offers unparalleled excitement priced at £200 per hour. Immerse yourself in the adrenaline-pumping action as you navigate through exhilarating turns and straightaways. Each track boasts unique features designed to test your skills and provide an unforgettable racing experience.
</p>

        </div>
        <div className="hero__image-container">
            <div className="hero__image">
              <Image src="/pgb3.png" alt="about us"
              fill className="object-contain"/>
            </div>
              <div className="hero__image-overlay3"/>
            </div>
       </div> 
  )
}

export default racetracks;