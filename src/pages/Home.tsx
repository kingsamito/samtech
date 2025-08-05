import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Collaboration from '../components/Collaboration'
import Membership from '../components/Membership'
import Footer from '../components/Footer'
import Popular from '../components/Popular'
import Feedback from '../components/Feedback'
import Instructor from '../components/Instructor'
import Newsletter from '../components/Newsletter'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Collaboration />
            <Membership />
            <Popular />
            <Feedback />
            <Instructor />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;