'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Star, Music, Baby, Zap, Palette, ArrowRight } from 'lucide-react'
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

export default function WhoWeArePage() {
  const ministries = [
    { 
      name: 'Youth Ministry', 
      description: 'Engaging young hearts with Christ through fun activities, deep study, and authentic community.', 
      icon: Star,
      age: 'Ages 13-18',
      meeting: 'Tuesday 7:00 PM'
    },
    { 
      name: 'Women\'s Ministry', 
      description: 'Sisters in faith growing together through Bible study, prayer, and meaningful fellowship.', 
      icon: Heart,
      age: 'All Ages',
      meeting: 'Thursday 10:00 AM'
    },
    { 
      name: 'Men\'s Ministry', 
      description: 'Brothers building strong foundations in faith, family, and leadership through God\'s Word.', 
      icon: Zap,
      age: 'All Ages',
      meeting: 'Saturday 7:00 AM'
    },
    { 
      name: 'Children\'s Ministry', 
      description: 'Nurturing young faith through age-appropriate teaching, crafts, and Bible adventures.', 
      icon: Baby,
      age: 'Ages 3-12',
      meeting: 'Sunday 10:00 AM'
    },
    { 
      name: 'Worship Ministry', 
      description: 'Leading hearts in worship through music, song, and creating an atmosphere of praise.', 
      icon: Music,
      age: 'All Ages',
      meeting: 'Sunday 9:00 AM'
    },
    { 
      name: 'Creative Ministry', 
      description: 'Using artistic gifts to serve God and our community through visual arts and media.', 
      icon: Palette,
      age: 'All Ages',
      meeting: 'Monthly'
    }
  ]

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
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                A diverse community united by faith, committed to growing together and serving others
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Community Values */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Our Community Values</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                These core values shape who we are as a community and guide how we live, worship, and serve together.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer}>
              {[
                {
                  title: "Authentic Community",
                  description: "We believe in being real with each other, sharing our struggles and victories as we grow in faith together.",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  title: "Inclusive Love",
                  description: "Everyone is welcome here, regardless of background, race, or where they are in their spiritual journey.",
                  color: "from-green-400 to-green-600"
                },
                {
                  title: "Servant Hearts",
                  description: "We follow Jesus' example of humble service, both within our church family and in our broader community.",
                  color: "from-purple-400 to-purple-600"
                },
                {
                  title: "Biblical Foundation",
                  description: "God's Word is our ultimate authority and guide for all aspects of life, faith, and community.",
                  color: "from-yellow-400 to-orange-500"
                },
                {
                  title: "Lifelong Growth",
                  description: "We're committed to continuously growing in our relationship with God and in our understanding of His will.",
                  color: "from-pink-400 to-red-500"
                },
                {
                  title: "Generous Living",
                  description: "We believe in living generously with our time, talents, and resources to bless others and advance God's kingdom.",
                  color: "from-indigo-400 to-purple-500"
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`h-2 bg-gradient-to-r ${value.color}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Ministries Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Our Ministries</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Find your place in our community through our various ministries designed to help you grow, connect, and serve.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer}>
              {ministries.map((ministry, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ministry.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-3 text-center">{ministry.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{ministry.description}</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span className="font-medium">Age Group:</span>
                      <span>{ministry.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Meeting Time:</span>
                      <span>{ministry.meeting}</span>
                    </div>
                  </div>
                  <motion.button 
                    className="w-full mt-4 bg-gray-900 text-white py-2 text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* What to Expect */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">What to Expect</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Visiting for the first time? Here's what you can expect when you join us for worship.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-12 items-center" variants={staggerContainer}>
              <motion.div className="space-y-6" variants={fadeInUp}>
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white text-sm font-bold">1</span>
                  </motion.div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">Warm Welcome</h3>
                    <p className="text-gray-600">Our greeting team will welcome you with genuine smiles and help you find everything you need.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white text-sm font-bold">2</span>
                  </motion.div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">Uplifting Worship</h3>
                    <p className="text-gray-600">Experience heartfelt worship through contemporary and traditional music that honors God.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white text-sm font-bold">3</span>
                  </motion.div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">Practical Teaching</h3>
                    <p className="text-gray-600">Hear God's Word taught in a relevant, understandable way that applies to everyday life.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white text-sm font-bold">4</span>
                  </motion.div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">Genuine Community</h3>
                    <p className="text-gray-600">Connect with others and experience the love and support of our church family.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-8 rounded-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6 text-center">Sunday Service Times</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Morning Worship</span>
                    <span className="text-gray-600">10:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Children's Church</span>
                    <span className="text-gray-600">10:15 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-900">Fellowship Time</span>
                    <span className="text-gray-600">11:15 AM</span>
                  </div>
                </div>
                <motion.div className="mt-6">
                  <Link 
                    href="/contact" 
                    className="w-full bg-gray-900 text-white py-3 font-semibold hover:bg-gray-700 transition-colors duration-300 text-center block"
                  >
                    Plan Your Visit
                  </Link>
                </motion.div>
              </motion.div>
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
      </main>
    </div>
  )
} 