export interface NavigationItem {
    name: string
    id: string
    submenu?: string[]
  }
  
  export interface Event {
    title: string
    date: string
    time: string
    location: string
    description?: string
    rsvpRequired?: boolean
  }
  
  export interface Sermon {
    title: string
    speaker: string
    date: string
    duration: string
    videoUrl?: string
    audioUrl?: string
    transcript?: string
    tags?: string[]
  }
  
  export interface Ministry {
    name: string
    description: string
    icon: string
    leader?: string
    meetingTime?: string
    location?: string
  }
  
  export interface Leader {
    name: string
    role: string
    description: string
    imageUrl?: string
    email?: string
  }
  
  export interface ContactInfo {
    address: string
    phone: string
    email: string
    socialMedia: {
      facebook?: string
      instagram?: string
      youtube?: string
      twitter?: string
    }
  }
  
  export interface ServiceTime {
    service: string
    time: string
    description?: string
  }