import React from 'react';
import Hero from '@components/hero';
import About from '@components/about';
import Stats from '@components/stats';
import Info from '@components/info';
import Misinformation from '@components/misinformation';
import Frequency from '@components/frequency';
import Help from '@components/help';
import Resources from '@components/resources';

const HomePage = () => {
  return (
    <>
      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <About />
      </div>
      <div data-scroll-section>
        <Stats />
      </div>
      <div data-scroll-section>
        <Info />
      </div>
      <div data-scroll-section>
        <Misinformation />
      </div>
      <div data-scroll-section>
        <Frequency />
      </div>
      <div data-scroll-section>
        <Help />
      </div>
      <div data-scroll-section>
        <Resources />
      </div>
    </>
  );
};

export default HomePage;
