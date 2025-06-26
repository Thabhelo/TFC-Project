'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Star, Music, Baby, Zap, Palette, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Image Carousel Component
const ImageCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <motion.div 
      className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden"
      variants={fadeInUp}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="text-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-xs font-medium">{currentIndex + 1}/{images.length}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
          <p className="text-sm text-gray-500">Image placeholder - Carousel with {images.length} images</p>
        </motion.div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
      >
        <ChevronLeft size={20} className="text-gray-600" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
      >
        <ChevronRight size={20} className="text-gray-600" />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function WhoWeArePage() {
  // Placeholder images for carousels
  const moreOfWhoWeAreImages = ['img1.jpg', 'img2.jpg', 'img3.jpg']
  const prayerLaunchImages = ['prayer1.jpg', 'prayer2.jpg', 'prayer3.jpg']
  const familyBraaiImages = ['braai1.jpg', 'braai2.jpg', 'braai3.jpg']
  const joyTogetherImages = ['joy1.jpg', 'joy2.jpg', 'joy3.jpg']

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-display text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              THE FALLS CHURCH
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
                About Us
              </Link>
              <Link href="/know-god" className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
                Know God
              </Link>
              <Link href="/who-we-are" className="font-medium text-gray-900 text-sm tracking-wide uppercase">
                Who We Are
              </Link>
              <Link href="/sermons" className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
                Sermons
              </Link>
              <Link href="/contact" className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <motion.h1 
                className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Who We Are
              </motion.h1>
              <motion.div 
                className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"
                variants={fadeInUp}
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div className="space-y-8" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In the first half of 2018, Wessie and Somien van der Westhuizen were visiting friends in Victoria Falls. Both were leading churches in their respective cities of Bulawayo and Lusaka. During their time together and through conversations, the possibility of planting a church in the city came up.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After returning to Bulawayo and speaking with friends in South Africa and elders in the city, their advice was to go and investigate and see what God will lead us into. Through a number of reconnaissance trips, and meeting up with people who were believers that the idea of a church plant was shared with them. From these conversations, it became clear that there was a need for a church in the city.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fast forward a few months later, in January 2019, an information evening was organised to introduce the idea to those were interested. From there, the idea was to travel up once a month and have a Bible Study and mealtime with them. Present at this information evening was Jamie Henson, who offered his house for these moments, and his cottage as a place to stay. Later that year, the church had their first public meeting together in his garden on a Sunday afternoon.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In 2020, the plan was to officially begin Sunday meetings but the onset of the COVID-19 delayed this, fortunately these were able to take place in October 2020. In May 2023, the first elders were ordained, and the first team of deacons were released not long afterwards in March 2025.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* More Of Who We Are Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">More Of Who We Are</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <ImageCarousel images={moreOfWhoWeAreImages} title="Our Community" />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our church is not part of denomination or church family; but we partner with leaders from a specific apostolic movement and other relating churches from various countries in the world, pursuing the Gospel mission God has given the church. We believe in this for the purpose of accountability, growth and to fulfill all that God has for us.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Prayer Launch 2020 Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Prayer Launch 2020</h2>
            </motion.div>

            <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
              <ImageCarousel images={prayerLaunchImages} title="Prayer Launch Event" />
            </motion.div>
          </div>
        </motion.section>

        {/* Family Braai Day 2024 Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Family Braai Day 2024</h2>
            </motion.div>

            <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
              <ImageCarousel images={familyBraaiImages} title="Family Braai Celebration" />
            </motion.div>
          </div>
        </motion.section>

        {/* The Joy Of Being Together Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">The Joy Of Being Together</h2>
            </motion.div>

            <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
              <ImageCarousel images={joyTogetherImages} title="Community Fellowship" />
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-20 bg-gray-900 text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.h2 className="font-display text-4xl md:text-5xl font-bold mb-6" variants={fadeInUp}>
              Ready to Be Part of Our Family?
            </motion.h2>
            <motion.p className="text-xl mb-8 text-gray-300 leading-relaxed" variants={fadeInUp}>
              Join our community and discover the joy of growing in faith together.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block">
                  Visit This Sunday
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/know-god" className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 inline-block">
                  Learn About Faith
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="py-8 bg-gray-100 border-t"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-600">© The Falls Church</p>
          </div>
        </motion.footer>
      </main>
    </div>
  )
} 