'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Book, Cross, Sun, Users, ArrowRight } from 'lucide-react'
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

export default function KnowGodPage() {
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
              <Link href="/know-god" className="font-medium text-gray-900 text-sm tracking-wide uppercase">
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
          className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
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
                Know God
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
                Begin your journey of faith and discover the transformative power of knowing God personally
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* What Does It Mean Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">What Does It Mean to Know God?</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Knowing God is not just intellectual knowledge, but a personal, transformative relationship that changes everything about how we live, love, and find purpose.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-12 items-center mb-20" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">A Personal Relationship</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    God desires to know you personally and intimately. This isn't about following rules or traditions, 
                    but about entering into a loving relationship with your Creator.
                  </p>
                  <p>
                    Through Jesus Christ, we can approach God directly, knowing that He loves us unconditionally 
                    and has a purpose for our lives.
                  </p>
                  <p>
                    This relationship transforms our understanding of ourselves, our purpose, and our eternal destiny.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-8 rounded-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <Heart size={64} className="text-gray-400 mx-auto mb-4" />
                  <blockquote className="text-lg text-gray-700 italic">
                    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
                  </blockquote>
                  <cite className="text-gray-500 text-sm mt-2 block">- John 3:16</cite>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Steps to Know God */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Your Journey to Know God</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Here are some simple steps to begin or deepen your relationship with God
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer}>
              {[
                {
                  icon: Book,
                  title: "Read His Word",
                  description: "Start with the Gospel of John to learn about Jesus and God's love for you.",
                  step: "1"
                },
                {
                  icon: Heart,
                  title: "Talk to Him",
                  description: "Prayer is simply talking to God. Share your thoughts, concerns, and gratitude.",
                  step: "2"
                },
                {
                  icon: Users,
                  title: "Join Community",
                  description: "Connect with others on the same journey through our church family.",
                  step: "3"
                },
                {
                  icon: Sun,
                  title: "Live It Out",
                  description: "Let your relationship with God transform how you love and serve others.",
                  step: "4"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {step.step}
                  </motion.div>
                  <motion.div
                    className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <step.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Questions Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Common Questions</h2>
            </motion.div>

            <motion.div className="space-y-8" variants={staggerContainer}>
              {[
                {
                  question: "How do I start a relationship with God?",
                  answer: "It begins with recognizing that God loves you and wants to be in relationship with you. Simply talk to Him in prayer, acknowledging your need for Him and asking Jesus to come into your life."
                },
                {
                  question: "What if I don't understand the Bible?",
                  answer: "That's completely normal! Start with simple, modern translations and don't be afraid to ask questions. Our church family is here to help you learn and grow."
                },
                {
                  question: "Do I need to be perfect to know God?",
                  answer: "Absolutely not! God loves you exactly as you are. He doesn't wait for you to clean up your life first - He meets you where you are and helps you grow."
                },
                {
                  question: "How can I hear from God?",
                  answer: "God speaks to us through His Word, through prayer, through other believers, and through His Holy Spirit. As you grow in relationship with Him, you'll learn to recognize His voice."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              Ready to Take the Next Step?
            </motion.h2>
            <motion.p className="text-xl mb-8 text-gray-300 leading-relaxed" variants={fadeInUp}>
              We'd love to help you on your journey to know God. Connect with us and discover the life-changing power of faith.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block">
                  Talk to Someone
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/sermons" className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 inline-block">
                  Watch a Sermon
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
} 