import React from 'react';
import { Transition } from '@headlessui/react';

const tracks = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold mb-4">Hourly Rent for Our Racetracks</h1>
        <div className="grid grid-cols-2 gap-4">
          <Transition
            as="div"
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="text-lg">Our first racetrack offers thrilling twists and turns, providing an exhilarating experience for all drivers.</p>
          </Transition>
          <img className="w-full h-auto" src="./racetrack1.jpg" alt="Racetrack 1" />
          <Transition
            as="div"
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="text-lg">The second racetrack boasts long straights and challenging corners, perfect for testing your driving skills.</p>
          </Transition>
          <img className="w-full h-auto" src="./racetrack2.jpg" alt="Racetrack 2" />
          <Transition
            as="div"
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="text-lg">Our third racetrack offers a mix of technical sections and high-speed straights, catering to both beginners and seasoned drivers.</p>
          </Transition>
          <img className="w-full h-auto" src="./racetrack3.jpg" alt="Racetrack 3" />
        </div>
      </div>
    </div>
  );
};

export default tracks;
