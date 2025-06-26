'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Calendar, Play, Users, Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight, Clock, User, Quote } from 'lucide-react';

const FallsChurchWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
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
    { name: 'About Us', id: 'about' },
    { name: 'Know God', id: 'know-god' },
    { name: 'Who We Are', id: 'who-we-are' },
    { name: 'Sermons', id: 'sermons' },
    { name: 'Get In Touch With Us', id: 'contact' }
  ];

  const upcomingEvents = [
    { title: 'Sunday Worship Service', date: 'June 30, 2025', time: '10:00 AM', location: 'Main Sanctuary' },
    { title: 'Youth Group Meeting', date: 'July 2, 2025', time: '7:00 PM', location: 'Youth Center' },
    { title: 'Bible Study', date: 'July 4, 2025', time: '6:30 PM', location: 'Fellowship Hall' },
    { title: 'Community Outreach', date: 'July 6, 2025', time: '9:00 AM', location: 'City Center' }
  ];

  const recentSermons = [
    { title: 'Walking in Faith', speaker: 'Pastor John Smith', date: 'June 23, 2025', duration: '42 min' },
    { title: 'The Power of Prayer', speaker: 'Pastor Sarah Johnson', date: 'June 16, 2025', duration: '38 min' },
    { title: 'Love Your Neighbor', speaker: 'Pastor John Smith', date: 'June 9, 2025', duration: '45 min' }
  ];

  const ministries = [
    { name: 'Youth Ministry', description: 'Engaging young hearts with Christ', icon: '🌟' },
    { name: 'Women\'s Ministry', description: 'Sisters in faith growing together', icon: '🌸' },
    { name: 'Men\'s Ministry', description: 'Brothers building strong foundations', icon: '⚡' },
    { name: 'Children\'s Ministry', description: 'Nurturing young faith', icon: '🎨' },
    { name: 'Worship Ministry', description: 'Leading hearts in worship', icon: '🎵' },
    { name: 'Outreach Ministry', description: 'Serving our community', icon: '❤️' }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-0">
            {/* Hero Section - Matching the provided image */}
            <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
              {/* Background with overlay */}
              <div className="absolute inset-0 bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
                {/* Simulated church service background */}
                <div className="w-full h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 opacity-80"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center px-6 flex-1 flex flex-col justify-center">
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-wider leading-none">
                  THE FALLS<br />CHURCH
                </h1>
              </div>

              {/* Scroll indicator */}
              <div className="relative z-10 mb-12">
                <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                  <ChevronDown size={20} className="text-white animate-bounce" />
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="relative z-10 w-full">
                <div className="bg-black/20 backdrop-blur-sm">
                  <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                      {navigation.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveSection(item.id)}
                          className="text-white/90 hover:text-white font-medium text-sm md:text-base tracking-wider uppercase transition-colors duration-300 hover:underline underline-offset-4"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Preview Section */}
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Foundation</h2>
                  <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Built on the unchanging truth that God is the center of everything
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">God-Centered</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We start with the assumption that God is the center of everything, giving Him basic rights to every individual's life.
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                      <Users className="text-white" size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">Gospel Community</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The Gospel is Jesus, and it defines who we are and how we live our lives in supernatural community.
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                      <ArrowRight className="text-white" size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">Mission Minded</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We love those outside our church family and are eager to let our lives make a difference locally and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest Sermons */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Sermons</h2>
                  <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-600">Growing in our relationship with God</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {recentSermons.map((sermon, index) => (
                    <div key={index} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                      <div className="aspect-video bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                        <Play className="text-white" size={48} />
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
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
                  <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-600">Join us in fellowship and worship</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
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
                        <button className="bg-gray-900 text-white px-6 py-2 hover:bg-gray-700 transition-colors duration-300 text-sm font-medium">
                          RSVP
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gray-900 text-white">
              <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  Join our community and discover how God can transform your life through the power of the Gospel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Plan Your Visit
                  </button>
                  <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300">
                    Connect With Us
                  </button>
                </div>
              </div>
            </section>
          </div>
        );

      case 'about':
      case 'know-god':
      case 'who-we-are':
        return (
          <div className="pt-24 space-y-0">
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">About The Falls Church</h1>
                  <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Discover our story, leadership, and the beliefs that guide our community
                  </p>
                </div>

                <div className="mb-20">
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <p className="text-lg text-gray-600 leading-relaxed">
                        The Falls Church was founded on the radical starting point that God is the basic given reality in the universe. 
                        He was there before we or anything else was in existence - He is simply the most absolute reality.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        From this foundation, we live with the understanding that God has basic rights to every individual's life 
                        as the Creator of all things. We are not a community defined by a natural worldview, but by a supernatural one.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        The Gospel is Jesus, and it is this truth that defines who we are and how we live our lives in community.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 text-center">
                      <Quote size={48} className="text-gray-400 mx-auto mb-4" />
                      <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                        "We believe in the joy of seeing people grow in their relationships with God and therefore live to help 
                        individuals move towards maturity in Christ."
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="mb-20">
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { name: 'Pastor John Smith', role: 'Senior Pastor', description: 'Leading our congregation with wisdom and compassion for over 15 years.' },
                      { name: 'Pastor Sarah Johnson', role: 'Associate Pastor', description: 'Passionate about discipleship and community outreach ministries.' },
                      { name: 'Michael Davis', role: 'Youth Pastor', description: 'Dedicated to engaging young hearts and minds with the love of Christ.' }
                    ].map((leader, index) => (
                      <div key={index} className="text-center bg-gray-50 p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <User className="text-gray-600" size={48} />
                        </div>
                        <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                        <p className="text-gray-600 mb-3 font-medium">{leader.role}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Our Beliefs</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        { title: 'Scripture', description: 'We believe the Bible is the inspired, authoritative Word of God.' },
                        { title: 'Trinity', description: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.' },
                        { title: 'Salvation', description: 'We believe salvation is by grace through faith in Jesus Christ alone.' }
                      ].map((belief, index) => (
                        <div key={index} className="border-l-4 border-gray-300 pl-6">
                          <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">{belief.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{belief.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6">
                      {[
                        { title: 'Church', description: 'We believe the church is the body of Christ, called to worship, fellowship, and service.' },
                        { title: 'Mission', description: 'We believe in the Great Commission to make disciples of all nations.' },
                        { title: 'Return', description: 'We believe in the personal return of Jesus Christ and eternal life.' }
                      ].map((belief, index) => (
                        <div key={index} className="border-l-4 border-gray-300 pl-6">
                          <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">{belief.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{belief.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'sermons':
        return (
          <div className="pt-24 space-y-0">
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">Sermons & Media</h1>
                  <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Growing in our relationship with God through His Word
                  </p>
                </div>

                <div className="flex justify-center mb-12">
                  <div className="bg-gray-100 rounded-full p-2">
                    <div className="flex space-x-2">
                      <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium">All</button>
                      <button className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full font-medium transition-colors">Video</button>
                      <button className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full font-medium transition-colors">Audio</button>
                      <button className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full font-medium transition-colors">Transcripts</button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recentSermons.concat([
                    { title: 'Finding Peace in Chaos', speaker: 'Pastor Sarah Johnson', date: 'June 2, 2025', duration: '40 min' },
                    { title: 'The Heart of Worship', speaker: 'Pastor John Smith', date: 'May 26, 2025', duration: '35 min' },
                    { title: 'Living with Purpose', speaker: 'Michael Davis', date: 'May 19, 2025', duration: '43 min' }
                  ]).map((sermon, index) => (
                    <div key={index} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                      <div className="aspect-video bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                        <Play className="text-white group-hover:scale-110 transition-transform duration-300" size={48} />
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors cursor-pointer">
                          {sermon.title}
                        </h3>
                        <div className="flex items-center text-gray-600 text-sm mb-3">
                          <User size={16} className="mr-2" />
                          {sermon.speaker}
                        </div>
                        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                          <span>{sermon.date}</span>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {sermon.duration}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-gray-900 hover:bg-gray-700 text-white py-2 transition-colors duration-300 text-sm font-medium">
                            Watch
                          </button>
                          <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 transition-colors duration-300 text-sm font-medium">
                            Listen
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'contact':
        return (
          <div className="pt-24 space-y-0">
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
                  <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We'd love to hear from you and welcome you to our community
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="bg-gray-50 border border-gray-200 p-8">
                      <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <MapPin className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                          <div>
                            <p className="font-semibold text-gray-900">Visit Us</p>
                            <p className="text-gray-600">123 Church Street<br />Falls Church, VA 22046</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                          <div>
                            <p className="font-semibold text-gray-900">Call Us</p>
                            <p className="text-gray-600">(703) 555-0123</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Mail className="text-gray-400 mt-1 mr-4 flex-shrink-0" size={20} />
                          <div>
                            <p className="font-semibold text-gray-900">Email Us</p>
                            <p className="text-gray-600">info@thefallschurch.net</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 p-8">
                      <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Service Times</h3>
                      <div className="space-y-4">
                        {[
                          { service: 'Sunday Worship', time: '10:00 AM' },
                          { service: 'Bible Study', time: 'Wednesday 6:30 PM' },
                          { service: 'Youth Group', time: 'Tuesday 7:00 PM' },
                          { service: 'Prayer Meeting', time: 'Friday 7:00 PM' }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <span className="font-semibold text-gray-900">{item.service}</span>
                            <span className="text-gray-600">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 p-8">
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <input 
                          type="text" 
                          placeholder="First Name" 
                          className="p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white"
                        />
                        <input 
                          type="text" 
                          placeholder="Last Name" 
                          className="p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white"
                        />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white"
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white"
                      />
                      <select className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none bg-white">
                        <option>How can we help you?</option>
                        <option>General Information</option>
                        <option>Prayer Request</option>
                        <option>New Member Inquiry</option>
                        <option>Ministry Questions</option>
                        <option>Other</option>
                      </select>
                      <textarea 
                        rows={5}
                        placeholder="Your Message" 
                        className="w-full p-4 border border-gray-300 focus:border-gray-500 focus:outline-none resize-none bg-white"
                      ></textarea>
                      <button className="w-full bg-gray-900 text-white py-4 font-semibold hover:bg-gray-700 transition-colors duration-300">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Minimal Navigation - Only visible when not on home or when scrolled */}
      {(activeSection !== 'home' || isScrolled) && (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activeSection !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => setActiveSection('home')}
                className="font-display text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
              >
                THE FALLS CHURCH
              </button>

              <div className="hidden lg:flex items-center space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`font-medium transition-colors text-sm tracking-wide uppercase ${
                      activeSection === item.id
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </button>
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
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left font-medium text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      )}

      <main>
        {renderSection()}
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
                  <button 
                    key={item.id}
                    onClick={() => setActiveSection(item.id)} 
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </button>
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
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Youtube size={16} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FallsChurchWebsite; 