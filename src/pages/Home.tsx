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
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div className="pt-[100px]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Navbar />
            <Hero />
            <Collaboration />
            <Membership />
            <Popular />
            <Feedback />
            <Instructor />
            <Newsletter />
            <Footer />
        </motion.div>
    );
};

export default Home;