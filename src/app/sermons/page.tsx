'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Clock, User, Calendar, Filter, Search } from 'lucide-react'
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

export default function SermonsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const sermons = [
    { title: 'Walking in Faith', speaker: 'Pastor John Smith', date: 'June 23, 2025', duration: '42 min', type: 'video', series: 'Faith Journey' },
    { title: 'The Power of Prayer', speaker: 'Pastor Sarah Johnson', date: 'June 16, 2025', duration: '38 min', type: 'video', series: 'Spiritual Disciplines' },
    { title: 'Love Your Neighbor', speaker: 'Pastor John Smith', date: 'June 9, 2025', duration: '45 min', type: 'audio', series: 'Love in Action' },
    { title: 'Finding Peace in Chaos', speaker: 'Pastor Sarah Johnson', date: 'June 2, 2025', duration: '40 min', type: 'video', series: 'Peace in Storms' },
    { title: 'The Heart of Worship', speaker: 'Pastor John Smith', date: 'May 26, 2025', duration: '35 min', type: 'audio', series: 'True Worship' },
    { title: 'Living with Purpose', speaker: 'Michael Davis', date: 'May 19, 2025', duration: '43 min', type: 'video', series: 'Purpose Driven Life' },
    { title: 'Grace and Forgiveness', speaker: 'Pastor Sarah Johnson', date: 'May 12, 2025', duration: '41 min', type: 'transcript', series: 'Amazing Grace' },
    { title: 'Building Strong Families', speaker: 'Pastor John Smith', date: 'May 5, 2025', duration: '39 min', type: 'video', series: 'Family Foundation' }
  ]

  const filteredSermons = sermons.filter(sermon => {
    const matchesFilter = activeFilter === 'all' || sermon.type === activeFilter
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.series.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

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
              <Link href="/who-we-are" className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
                Who We Are
              </Link>
              <Link href="/sermons" className="font-medium text-gray-900 text-sm tracking-wide uppercase">
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
          className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50"
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
                Sermons & Media
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
                Growing in our relationship with God through His Word
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section 
          className="py-8 bg-white border-b border-gray-200"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="flex flex-col md:flex-row gap-6 items-center justify-between" variants={fadeInUp}>
              {/* Search */}
              <motion.div className="relative flex-1 max-w-md" variants={fadeInUp}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search sermons, speakers, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </motion.div>

              {/* Filter Buttons */}
              <motion.div className="flex gap-2" variants={fadeInUp}>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'video', label: 'Video' },
                  { id: 'audio', label: 'Audio' },
                  { id: 'transcript', label: 'Transcripts' }
                ].map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Sermons Grid */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeFilter + searchTerm}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {filteredSermons.map((sermon, index) => (
                  <motion.div 
                    key={`${sermon.title}-${index}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    layout
                  >
                    {/* Video/Audio Thumbnail */}
                    <motion.div 
                      className="aspect-video bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300 cursor-pointer relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Play className="text-white group-hover:scale-110 transition-transform duration-300" size={48} />
                      </motion.div>
                      
                      {/* Type Badge */}
                      <motion.div 
                        className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-medium ${
                          sermon.type === 'video' ? 'bg-red-500 text-white' :
                          sermon.type === 'audio' ? 'bg-blue-500 text-white' :
                          'bg-green-500 text-white'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {sermon.type.toUpperCase()}
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.div 
                        className="mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {sermon.series}
                        </span>
                      </motion.div>
                      
                      <h3 className="font-display text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors cursor-pointer">
                        {sermon.title}
                      </h3>
                      
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <User size={16} className="mr-2" />
                        {sermon.speaker}
                      </div>
                      
                      <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {sermon.date}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {sermon.duration}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <motion.button 
                          className="flex-1 bg-gray-900 hover:bg-gray-700 text-white py-2 transition-colors duration-300 text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {sermon.type === 'video' ? 'Watch' : sermon.type === 'audio' ? 'Listen' : 'Read'}
                        </motion.button>
                        {sermon.type !== 'transcript' && (
                          <motion.button 
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 transition-colors duration-300 text-sm font-medium"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Download
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredSermons.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-gray-600 mb-4">No sermons found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setActiveFilter('all')
                    setSearchTerm('')
                  }}
                  className="bg-gray-900 text-white px-6 py-2 font-medium hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Featured Series */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Current Series</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join us as we explore these transformative topics together
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer}>
              {[
                {
                  title: "Faith Journey",
                  description: "Discovering what it means to walk by faith in every season of life",
                  sermonCount: "4 sermons",
                  color: "from-blue-500 to-blue-700"
                },
                {
                  title: "Love in Action",
                  description: "Practical ways to show God's love to those around us every day",
                  sermonCount: "3 sermons",
                  color: "from-green-500 to-green-700"
                }
              ].map((series, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`h-32 bg-gradient-to-r ${series.color} flex items-center justify-center`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="font-display text-2xl font-bold text-white text-center">{series.title}</h3>
                  </motion.div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">{series.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{series.sermonCount}</span>
                      <motion.button 
                        className="bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Series
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
} 