import './App.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Introduce, Carousel, CategoryProduct, MassageChair, WhatCustomerSay, Showroom, NewAndEvent, Contact } from './pages';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 150,
      once: true,
    });
  }, []);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Carousel />
      </motion.div>

      <div data-aos="fade-up">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Introduce />
        </motion.div>
      </div>

      <div data-aos="fade-left">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <CategoryProduct />
        </motion.div>
      </div>

      <div data-aos="fade-right">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <MassageChair />
        </motion.div>
      </div>

      <div data-aos="fade-down">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <WhatCustomerSay />
        </motion.div>
      </div>

      <div data-aos="fade-up">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Showroom />
        </motion.div>
      </div>

      <div data-aos="fade-down">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <NewAndEvent />
        </motion.div>
      </div>

      <div data-aos="fade-up">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Contact />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
