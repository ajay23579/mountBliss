import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import Intro from '../components/Home/Intro'
import Hservices from '../components/Home/Hservices'
import BookingForm from '../components/Home/BookingForm'
import AboutUs from '../components/Home/AboutUs'
import Footer from '../components/Footer'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

const Home = () => {
  return (
    <>
      <Navbar />

      <motion.div initial="hidden" animate="visible" variants={fadeUp(0)}>
        <Hero
          text="Discover Mount Bliss"
          description="An elevated escape nestled in the Himalayan heights."
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp(0.2)}>
        <Intro />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp(0.4)}>
        <Hservices />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp(0.6)}>
        <BookingForm />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp(0.8)}>
        <AboutUs />
      </motion.div>

      <Footer />
    </>
  )
}

export default Home
