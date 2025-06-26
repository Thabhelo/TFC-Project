'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
              <Link href="/sermons" className="font-medium text-gray-600 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
                Sermons
              </Link>
              <Link href="/contact" className="font-medium text-gray-900 text-sm tracking-wide uppercase">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-green-50 to-emerald-50"
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
                Get In Touch With Us
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
                We'd love to hear from you and welcome you to our community
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Information and Form */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div className="space-y-8" variants={fadeInUp}>
                <motion.div className="bg-gray-50 border border-gray-200 p-8 rounded-lg" variants={fadeInUp}>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MapPin className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                                              <div>
                          <p className="font-semibold text-gray-900">Visit Us</p>
                          <p className="text-gray-600">Victoria Falls Primary School Hall<br />Victoria Falls, Zimbabwe</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Phone className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                                              <div>
                          <p className="font-semibold text-gray-900">Call Us</p>
                          <p className="text-gray-600">+263 719073586</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Mail className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                                              <div>
                          <p className="font-semibold text-gray-900">Email Us</p>
                          <p className="text-gray-600">office@thefallschurch.net</p>
                        </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div className="bg-gray-50 border border-gray-200 p-8 rounded-lg" variants={fadeInUp}>
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Service Times</h3>
                  <div className="space-y-4">
                    {[
                      { service: 'Sunday Worship (Summer)', time: '8:30 AM', icon: Clock },
                      { service: 'Sunday Worship (Winter)', time: '9:00 AM', icon: Clock },
                      { service: 'Bible Study', time: 'Weekly', icon: Clock },
                      { service: 'Prayer & Fellowship', time: 'Regular', icon: Clock }
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center">
                          <item.icon size={16} className="mr-3 text-gray-400" />
                          <span className="font-semibold text-gray-900">{item.service}</span>
                        </div>
                        <span className="text-gray-600">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div className="bg-gray-50 border border-gray-200 p-8 rounded-lg" variants={fadeInUp}>
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h4 className="font-display text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name" 
                          required
                          className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white rounded-lg transition-all duration-300"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name" 
                          required
                          className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white rounded-lg transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address" 
                        required
                        className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white rounded-lg transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number" 
                        className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white rounded-lg transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white rounded-lg transition-all duration-300"
                      >
                        <option value="">How can we help you?</option>
                        <option value="general">General Information</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="member">New Member Inquiry</option>
                        <option value="ministry">Ministry Questions</option>
                        <option value="visit">Plan a Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <textarea 
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message" 
                        required
                        className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none resize-none bg-white rounded-lg transition-all duration-300"
                      ></textarea>
                    </motion.div>
                    
                    <motion.button 
                      type="submit"
                      className="w-full bg-gray-900 text-white py-4 font-semibold hover:bg-gray-700 transition-colors duration-300 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={20} className="mr-2" />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </motion.div>
              
              <motion.div className="mt-8 text-center" variants={fadeInUp}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-lg mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="text-gray-600 mx-auto mb-3" size={32} />
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">Victoria Falls Primary School</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our church meets in the school hall every Sunday. Look for our welcoming team at the entrance 
                    who will be happy to guide you to our meeting space.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Find Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We meet at Victoria Falls Primary School Hall in the beautiful city of Victoria Falls, Zimbabwe. 
                Use the interactive map below to get directions. Come visit us this Sunday!
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-300 rounded-lg overflow-hidden shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Google Maps Embed for Victoria Falls Primary School */}
              <div className="aspect-video">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4398.971455553525!2d25.81604957517759!3d-17.93371678304964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194fe53900000001%3A0x312ee7b4330bd6ad!2sVictoria%20Falls%20Primary%20School!5e1!3m2!1sen!2sus!4v1750908301692!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Victoria Falls Primary School Location"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            </motion.div>

            <motion.div className="space-y-6" variants={staggerContainer}>
              {[
                {
                  question: "What should I expect when visiting for the first time?",
                  answer: "You can expect a warm welcome, contemporary worship music, practical Bible teaching, and genuine community. Come as you are - there's no dress code, and we have greeters to help you feel at home."
                },
                {
                  question: "Do you have programs for children?",
                  answer: "Yes! We have age-appropriate programs for children during our Sunday service, including nursery care for infants and engaging activities for kids aged 3-12."
                },
                {
                  question: "How can I get involved in ministry?",
                  answer: "We'd love to help you find your place! Contact our ministry coordinator or fill out a volunteer interest form. We have opportunities in worship, children's ministry, community outreach, and more."
                },
                {
                  question: "What is your statement of faith?",
                  answer: "We believe in the Trinity, salvation by grace through faith in Jesus Christ, the authority of Scripture, and the importance of living out our faith in community and service to others."
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
              Ready to Visit Us?
            </motion.h2>
            <motion.p className="text-xl mb-8 text-gray-300 leading-relaxed" variants={fadeInUp}>
              We can't wait to meet you and welcome you into our church family.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/who-we-are" className="bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block">
                  What to Expect
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