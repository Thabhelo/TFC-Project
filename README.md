# The Falls Church Website

A modern, responsive website for The Falls Church - a God-centered community in Victoria Falls, Zimbabwe where the Gospel transforms lives, families, and society.

## About The Falls Church

Founded in 2018-2019 by Wessie and Somien van der Westhuizen, The Falls Church began as a church plant in Victoria Falls, Zimbabwe. After initial reconnaissance trips and an information evening in January 2019, the church held its first public meeting in October 2020. The church ordained its first elders in May 2023 and released its first team of deacons in March 2025.

**Location**: Victoria Falls Primary School Hall, Victoria Falls, Zimbabwe  
**Contact**: +263 719073586 | office@thefallschurch.net  
**Service Times**: 8:30am (Summer) / 9:00am (Winter)

## Features

- **Complete Church Website**: 6 full pages with authentic content and navigation
- **Interactive Animations**: Framer Motion animations throughout with smooth transitions
- **Image Carousels**: Auto-playing carousels with manual navigation for church events
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Google Maps Integration**: Interactive map showing actual church location
- **Contact Forms**: Functional contact forms with validation
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Accessibility**: WCAG compliant with proper focus management
- **Modern Typography**: Playfair Display headings with Inter body text

## Tech Stack

- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom design system and shadcn/ui components
- **Animations**: Framer Motion for smooth, professional animations
- **Icons**: Lucide React icon library
- **Typography**: Google Fonts (Playfair Display, Inter)
- **Maps**: Google Maps iframe integration
- **Forms**: React state management with validation

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Thabhelo/TFC-Project.git
cd TFC-Project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
TFC-Project/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx           # About page with church story and leadership
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact page with form and Google Maps
│   │   ├── know-god/
│   │   │   └── page.tsx           # Spiritual journey content with biblical teachings
│   │   ├── sermons/
│   │   │   └── page.tsx           # Sermons page with filtering and search
│   │   ├── who-we-are/
│   │   │   └── page.tsx           # Church history with image carousels
│   │   ├── globals.css            # Global styles and Tailwind directives
│   │   ├── header.tsx             # Navigation component
│   │   ├── layout.tsx             # Root layout with metadata and fonts
│   │   ├── page.tsx               # Homepage with hero, sermons, and events
│   │   ├── loading.tsx            # Loading spinner component
│   │   ├── error.tsx              # Error boundary component
│   │   └── not-found.tsx          # 404 page component
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx         # Reusable button component
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn, formatDate, etc.)
│   └── types/
│       └── index.ts               # TypeScript type definitions
├── public/
│   ├── favicon.ico                # Church favicon
│   └── site.webmanifest          # PWA manifest
├── components.json                # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── pnpm-lock.yaml               # Package lock file
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Pages Overview

### 🏠 Homepage (`/`)
- **Hero Section**: Church name with animated typography
- **Latest Sermons**: Featured sermon cards with play functionality
- **Upcoming Events**: Church events with RSVP buttons
- **Call to Action**: Visitor invitation with navigation links
- **Footer**: Contact info and social media (Facebook: @tfczim)

### ℹ️ About Page (`/about`)
- **Church Story**: Complete founding history from 2018-2025
- **Leadership Team**: Wessie and Somien van der Westhuizen profiles
- **Foundation Values**: God-Centered, Gospel Community, Mission Minded
- **Quote Component**: Inspirational church quotes with animations

### 🙏 Know God Page (`/know-god`)
- **Biblical Teaching**: Dallas Willard content with scripture verses
- **Heart & Mind Transformation**: Proverbs, Corinthians, Romans passages
- **Scripture Cards**: Interactive cards with Matthew, Jeremiah verses
- **Spiritual Journey**: Content about pursuing God with animations

### 👥 Who We Are Page (`/who-we-are`)
- **Founding Story**: Authentic 2018-2025 church planting journey
- **Image Carousels**: Four auto-playing carousels for church events
- **Partnership Statement**: Apostolic movement connections
- **Community Events**: Prayer Launch 2020, Family Braai 2024, Fellowship

### 🎙️ Sermons Page (`/sermons`)
- **Filtering System**: Filter by series, speaker, topic
- **Search Functionality**: Search sermons by title or content
- **Sermon Cards**: Animated cards with speaker, date, duration
- **Featured Series**: Highlighted sermon collections

### 📞 Contact Page (`/contact`)
- **Interactive Form**: Contact form with validation and success states
- **Google Maps**: Embedded map showing Victoria Falls Primary School
- **Service Times**: Summer (8:30am) and Winter (9:00am) schedules
- **Contact Info**: Phone (+263 719073586), email, physical address
- **FAQ Section**: Common questions with expandable answers

### Branch Naming Convention
- `feature/` - New features
- `fix/` - Bug fixes
- `update/` - Content or dependency updates
- `refactor/` - Code improvements

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**The Falls Church**
- **Website**: [thefallschurch.net](https://thefallschurch.net)
- **Email**: office@thefallschurch.net
- **Phone**: +263 719073586
- **Location**: Victoria Falls Primary School Hall, Victoria Falls, Zimbabwe
- **Facebook**: [@tfczim](https://www.facebook.com/tfczim)

**Technical Support**
For website technical issues or contributions, please create an issue on GitHub.

---

Built with ❤️ for The Falls Church.
*"But if anyone loves God, he is known by God." - 1 Corinthians 8:3*
