import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';

function Home() {
    return (
        <div className="pt-24 px-4 lg:px-32 p-10">

            <Hero />
            
            <Carousel />
            
            <Contact />
        </div>
    );
}

export default Home;

