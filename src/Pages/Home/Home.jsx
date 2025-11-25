import React from 'react';
import HeroSection from './HeroSection';
import Award from '../Award/Award';
import About from '../About/About';
import MyWork from '../MyWork/MyWork';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Award></Award>
            <MyWork></MyWork>

        </div>
    );
};

export default Home;