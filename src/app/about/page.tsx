'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, ArrowRight, Quote, User, MapPin, Phone, Mail } from 'lucide-react'
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

export default function AboutPage() {
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
              <Link href="/about" className="font-medium text-gray-900 text-sm tracking-wide uppercase">
                About Us
              </Link>
              <Link href="/know-god" className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
                Know God
              </Link>
              <Link href="/who-we-are" className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
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
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
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
                About The Falls Church
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
                Discover our story, leadership, and the beliefs that guide our community
              </motion.p>
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
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="mb-20" variants={fadeInUp}>
              <motion.h2 className="font-display text-3xl font-bold text-gray-900 mb-8" variants={fadeInUp}>
                Our Story
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div className="space-y-6" variants={staggerContainer}>
                  <motion.p className="text-lg text-gray-600 leading-relaxed" variants={fadeInUp}>
                    In the first half of 2018, Wessie and Somien van der Westhuizen were visiting friends in Victoria Falls. 
                    Both were leading churches in their respective cities of Bulawayo and Lusaka. During their time together 
                    and through conversations, the possibility of planting a church in the city came up.
                  </motion.p>
                  <motion.p className="text-lg text-gray-600 leading-relaxed" variants={fadeInUp}>
                    After returning to Bulawayo and speaking with friends in South Africa and elders in the city, their advice 
                    was to go and investigate and see what God would lead them into. Through a number of reconnaissance trips 
                    and meeting with believers, it became clear that there was a need for a church in the city.
                  </motion.p>
                  <motion.p className="text-lg text-gray-600 leading-relaxed" variants={fadeInUp}>
                    In January 2019, an information evening was organized to introduce the idea to those who were interested. 
                    The church had their first public meeting in October 2020, and in May 2023, the first elders were ordained.
                  </motion.p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-8 text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <Quote size={48} className="text-gray-400 mx-auto mb-4" />
                  </motion.div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "We believe in the joy of seeing people grow in their relationships with God and therefore live to help 
                    individuals move towards maturity in Christ."
                  </blockquote>
                  <p className="text-sm text-gray-500 mt-4">— Church Vision Statement</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Leadership Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div variants={fadeInUp}>
              <motion.h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center" variants={fadeInUp}>
                Leadership
              </motion.h2>
              <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
                {[
                  { name: 'Wessie van der Westhuizen', role: 'Lead Pastor', description: 'Church planter and visionary leader who helped establish The Falls Church in Victoria Falls.' },
                  { name: 'Jamie Henson', role: 'Elder', description: 'Faithful servant who opened his home for the early church meetings and continues to serve.' },
                  { name: 'Leadership Team', role: 'Elders & Deacons', description: 'Ordained in 2023 and 2025, serving with dedication to shepherd and serve the congregation.' }
                ].map((leader, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <User className="text-gray-600" size={48} />
                    </motion.div>
                    <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-gray-600 mb-3 font-medium">{leader.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Foundation Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <motion.h2 className="font-display text-3xl font-bold text-gray-900 mb-6" variants={fadeInUp}>
                Our Foundation
              </motion.h2>
              <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}>
                Built on the unchanging truth that God is the center of everything
              </motion.p>
            </motion.div>
            
            <motion.div className="grid md:grid-cols-3 gap-12" variants={staggerContainer}>
              {[
                {
                  icon: Heart,
                  title: "God-Centered",
                  description: "We start with the assumption that God is the center of everything, giving Him basic rights to every individual's life."
                },
                {
                  icon: Users,
                  title: "Gospel Community", 
                  description: "The Gospel is Jesus, and it defines who we are and how we live our lives in supernatural community."
                },
                {
                  icon: ArrowRight,
                  title: "Mission Minded",
                  description: "We love those outside our church family and are eager to let our lives make a difference locally and beyond."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
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
                    <item.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              Ready to Learn More?
            </motion.h2>
            <motion.p className="text-xl mb-8 text-gray-300 leading-relaxed" variants={fadeInUp}>
              Discover more about our beliefs and how you can get involved in our community.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/know-god" className="bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block">
                  Know God
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
      </main>
    </div>
  )
} 