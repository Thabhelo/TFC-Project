'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Book, Cross, Sun, Users, ArrowRight, Search, Lightbulb } from 'lucide-react'
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
              <motion.blockquote 
                className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium italic mb-4"
                variants={fadeInUp}
              >
                "BUT IF ANYONE LOVES GOD, HE IS KNOWN BY GOD."
              </motion.blockquote>
              <motion.cite 
                className="text-lg text-gray-500 font-semibold tracking-wide"
                variants={fadeInUp}
              >
                1 CORINTHIANS 8:3
              </motion.cite>
            </motion.div>
          </div>
        </motion.section>

        {/* Opening Quote Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div 
              className="bg-gray-50 p-8 md:p-12 rounded-lg"
              variants={fadeInUp}
            >
              <motion.div className="text-center mb-8" variants={fadeInUp}>
                <Heart size={48} className="text-gray-400 mx-auto mb-4" />
              </motion.div>
              <motion.blockquote 
                className="text-lg md:text-xl text-gray-700 leading-relaxed italic text-center mb-6"
                variants={fadeInUp}
              >
                "And it is only the knowledge of this God whose deepest nature is love that is the source of ancient prophecies with their radiant hopes. God has made himself known by personally approaching human beings and involving Himself in their lives."
              </motion.blockquote>
              <motion.cite 
                className="text-gray-500 text-center block font-medium"
                variants={fadeInUp}
              >
                - Dallas Willard
              </motion.cite>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div className="space-y-12" variants={staggerContainer}>
              
              {/* First Paragraph */}
              <motion.div variants={fadeInUp}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We see from this statement that knowing God is not an optional part of the Christian life! Our knowledge of God begins with the opening of our heart and mind to Him.
                </p>
              </motion.div>

              {/* Heart Section */}
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <Heart className="text-blue-500 mt-1" size={32} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      The Bible makes it clear that we live from the heart.
                    </p>
                    <blockquote className="text-gray-600 italic border-l-2 border-gray-300 pl-4">
                      "Keep your heart with all vigilance, for from it flow the springs of life." 
                      <cite className="block text-sm text-gray-500 mt-1">- Proverbs 4:23</cite>
                    </blockquote>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                      It is in this metaphorical centre of our lives that we are called to be made new when we come to God.
                    </p>
                    <blockquote className="text-gray-600 italic border-l-2 border-gray-300 pl-4 mt-4">
                      "...if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come." 
                      <cite className="block text-sm text-gray-500 mt-1">- 2 Corinthians 5:17</cite>
                    </blockquote>
                  </div>
                </div>
              </motion.div>

              {/* Mind Section */}
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <Lightbulb className="text-red-500 mt-1" size={32} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      But it is also true that we first turned away from God in our thoughts.
                    </p>
                    <blockquote className="text-gray-600 italic border-l-2 border-gray-300 pl-4">
                      "All we like sheep have gone astray, we have turned—everyone—to his own way..." 
                      <cite className="block text-sm text-gray-500 mt-1">- Isaiah 53:6</cite>
                    </blockquote>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                      And so it is in our thoughts that the first steps toward the renovation of our heart occurs.
                    </p>
                    <blockquote className="text-gray-600 italic border-l-2 border-gray-300 pl-4 mt-4">
                      "...be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect." 
                      <cite className="block text-sm text-gray-500 mt-1">- Romans 12:2</cite>
                    </blockquote>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                      It is in our mind that the Holy Spirit begins to convince us of our sin and lost condition. It will also be in our mind that we respond to God's grace. It is in our mind that we begin to put together our first thoughts of God and formulate our own personal knowledge of Him - a knowledge that needs to be consistent with the God that Jesus revealed in Scripture!
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </motion.section>

        {/* Is That What You Long For Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                IS THAT WHAT YOU LONG FOR?
              </h2>
            </motion.div>

            <motion.div className="space-y-8" variants={staggerContainer}>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={fadeInUp}
              >
                If the desire of your heart is to know God more intimately, that is a sign that the grace of God is drawing you in. Your response is setting yourself to seek after, and pursue Him. Those who seek, will find Him.
              </motion.p>

              {/* Scripture Cards */}
              <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer}>
                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Search className="text-blue-600 mx-auto mb-4" size={40} />
                  <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                    "...seek first the kingdom of God and his righteousness, and all these things will be added to you."
                  </blockquote>
                  <cite className="text-sm text-gray-500">- Matthew 6:33</cite>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Heart className="text-green-600 mx-auto mb-4" size={40} />
                  <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                    "You will seek me and find me, when you seek me with all your heart."
                  </blockquote>
                  <cite className="text-sm text-gray-500">- Jeremiah 29:13</cite>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sun className="text-purple-600 mx-auto mb-4" size={40} />
                  <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                    "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you."
                  </blockquote>
                  <cite className="text-sm text-gray-500">- Matthew 7:7</cite>
                </motion.div>
              </motion.div>

              <motion.div 
                className="bg-gray-900 text-white p-8 rounded-lg text-center"
                variants={fadeInUp}
              >
                <p className="text-lg leading-relaxed">
                  The impulse to pursue God originates with Him, but the outworking of that impulse is our desire to follow Him.
                </p>
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
              Ready to Begin Your Journey?
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