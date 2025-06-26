'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NavigationItem } from '@/types'

interface HeaderProps {
  navigation: NavigationItem[]
  activeSection: string
  onSectionChange: (sectionId: string) => void
  showHeader?: boolean
}

export default function Header({ 
  navigation, 
  activeSection, 
  onSectionChange, 
  showHeader = true 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showHeader && activeSection === 'home' && !isScrolled) {
    return null
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || activeSection !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onSectionChange('home')}
            className="font-display text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            THE FALLS CHURCH
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
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
                  onSectionChange(item.id)
                  setMobileMenuOpen(false)
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
  )
}