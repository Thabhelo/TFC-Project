'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X, Calendar, Play, Users, Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight, Clock, User, Quote } from 'lucide-react';
import Link from 'next/link';

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

const FallsChurchWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Know God', href: '/know-god' },
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Get In Touch With Us', href: '/contact' }
  ];

  const recentSermons = [
    {
      title: "Faith Over Fear",
      speaker: "Pastor John Smith",
      date: "Jan 21, 2024",
      duration: "35 min"
    },
    {
      title: "Walking in Love",
      speaker: "Pastor Sarah Johnson",
      date: "Jan 14, 2024",
      duration: "42 min"
    },
    {
      title: "God's Plan for Your Life",
      speaker: "Pastor John Smith",
      date: "Jan 7, 2024",
      duration: "38 min"
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Prayer Night",
      date: "Friday, February 2nd",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary"
    },
    {
      title: "Youth Winter Retreat",
      date: "Saturday, February 10th",
      time: "9:00 AM - 6:00 PM",
      location: "Camp Mountain View"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Minimal Navigation - Only visible when scrolled */}
      {isScrolled && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="font-display text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                THE FALLS CHURCH
              </Link>

              <div className="hidden lg:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-900"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <div className="px-6 py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block w-full text-left font-medium text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      )}

      <main>
        <div className="space-y-0">
          {/* Hero Section - Matching the provided image */}
          <motion.section 
            className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
              {/* Simulated church service background */}
              <div className="w-full h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 opacity-80"></div>
            </div>
            
            {/* Content */}
            <motion.div 
              className="relative z-10 text-center px-6 flex-1 flex flex-col justify-center"
              variants={fadeInUp}
            >
              <motion.h1 
                className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-wider leading-none"
                variants={fadeInUp}
              >
                THE FALLS<br />CHURCH
              </motion.h1>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="relative z-10 mb-12"
              variants={fadeInUp}
            >
              <motion.div 
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronDown size={20} className="text-white animate-bounce" />
              </motion.div>
            </motion.div>

            {/* Bottom Navigation */}
            <motion.div 
              className="relative z-10 w-full"
              variants={fadeInUp}
            >
              <div className="bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                  <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <Link
                          href={item.href}
                          className="text-white/90 hover:text-white font-medium text-sm md:text-base tracking-wider uppercase transition-colors duration-300 hover:underline underline-offset-4"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* About Preview Section */}
          <motion.section 
            className="py-20 bg-white"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-6xl mx-auto px-6">
              <motion.div className="text-center mb-16" variants={fadeInUp}>
                <motion.h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" variants={fadeInUp}>
                  Our Foundation
                </motion.h2>
                <motion.div 
                  className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}>
                  Built on the unchanging truth that God is the center of everything
                </motion.p>
              </motion.div>
              
              <motion.div className="grid md:grid-cols-3 gap-12" variants={staggerContainer}>
                <motion.div 
                  className="text-center group"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Heart className="text-white" size={24} />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">God-Centered</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We start with the assumption that God is the center of everything, giving Him basic rights to every individual's life.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center group"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Users className="text-white" size={24} />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">Gospel Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Gospel is Jesus, and it defines who we are and how we live our lives in supernatural community.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center group"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="text-white" size={24} />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">Mission Minded</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We love those outside our church family and are eager to let our lives make a difference locally and beyond.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Latest Sermons */}
          <motion.section 
            className="py-20 bg-gray-50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-6xl mx-auto px-6">
              <motion.div className="text-center mb-16" variants={fadeInUp}>
                <motion.h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" variants={fadeInUp}>
                  Latest Sermons
                </motion.h2>
                <motion.div 
                  className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.p className="text-xl text-gray-600" variants={fadeInUp}>
                  Growing in our relationship with God
                </motion.p>
              </motion.div>
              
              <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
                {recentSermons.map((sermon, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="aspect-video bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Play className="text-white" size={48} />
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">{sermon.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <User size={16} className="mr-2" />
                        {sermon.speaker}
                      </div>
                      <div className="flex items-center justify-between text-gray-500 text-sm">
                        <span>{sermon.date}</span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {sermon.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Upcoming Events */}
          <motion.section 
            className="py-20 bg-white"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-6xl mx-auto px-6">
              <motion.div className="text-center mb-16" variants={fadeInUp}>
                <motion.h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" variants={fadeInUp}>
                  Upcoming Events
                </motion.h2>
                <motion.div 
                  className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.p className="text-xl text-gray-600" variants={fadeInUp}>
                  Join us in fellowship and worship
                </motion.p>
              </motion.div>
              
              <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                {upcomingEvents.map((event, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gray-50 border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2 text-gray-400" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-2 text-gray-400" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-gray-400" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <motion.button 
                        className="bg-gray-900 text-white px-6 py-2 hover:bg-gray-700 transition-colors duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        RSVP
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
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
                Ready to Begin Your Journey?
              </motion.h2>
              <motion.p className="text-xl mb-8 text-gray-300 leading-relaxed" variants={fadeInUp}>
                Join our community and discover how God can transform your life through the power of the Gospel.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/who-we-are" className="bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block">
                    Plan Your Visit
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 inline-block">
                    Connect With Us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-display text-xl font-bold mb-6">THE FALLS CHURCH</h4>
              <p className="text-gray-400 leading-relaxed">
                A God-centered community where the Gospel transforms lives, families, and society.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Service Times</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Sunday Worship: 10:00 AM</p>
                <p>Bible Study: Wed 6:30 PM</p>
                <p>Youth Group: Tue 7:00 PM</p>
                <p>Prayer: Fri 7:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>123 Church Street</p>
                <p>Falls Church, VA 22046</p>
                <p>(703) 555-0123</p>
                <p>info@thefallschurch.net</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 The Falls Church. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <motion.div 
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={16} />
              </motion.div>
              <motion.div 
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={16} />
              </motion.div>
              <motion.div 
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={16} />
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FallsChurchWebsite; 