# The Falls Church Website

A modern, responsive website for The Falls Church - a God-centered community where the Gospel transforms lives, families, and society.

## Features

- **Modern Design**: Clean, elegant design with smooth animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **SEO Optimized**: Proper metadata and structured data for search engines
- **Accessibility**: WCAG compliant with proper focus management and semantic HTML
- **Beautiful Typography**: Custom fonts with Playfair Display and Inter

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display, Inter)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd TFC-Project
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main homepage component
│   ├── loading.tsx          # Loading UI
│   ├── error.tsx            # Error boundary
│   └── not-found.tsx        # 404 page
├── components/
│   └── ui/                  # Reusable UI components
└── lib/
    └── utils.ts             # Utility functions
```

## Features Overview

### Homepage Sections
- **Hero Section**: Full-screen welcome with church name and navigation
- **Foundation**: Core values and beliefs
- **Latest Sermons**: Recent sermon collection with media controls
- **Upcoming Events**: Church events with RSVP functionality
- **Call to Action**: Invitation to join the community

### Navigation Sections
- **About Us / Know God / Who We Are**: Church story, leadership, and beliefs
- **Sermons**: Media library with filters for video, audio, and transcripts
- **Contact**: Contact information, service times, and contact form

### Responsive Design
- Mobile-first approach
- Collapsible navigation for mobile devices
- Optimized layouts for tablet and desktop
- Touch-friendly interactions

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`. You can modify the colors to match your brand:

```typescript
colors: {
  // Add or modify colors here
}
```

### Fonts
Custom fonts are configured in `src/app/globals.css`. The website uses:
- **Display Font**: Playfair Display (for headings)
- **Body Font**: Inter (for body text)

### Content
Most content can be updated in `src/app/page.tsx`:
- Update church information in the data arrays
- Modify section content and copy
- Add or remove sections as needed

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
Build the project:
```bash
pnpm build
# or
npm run build
```

The `out` folder contains the production build.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this website or The Falls Church:

- **Email**: info@thefallschurch.net
- **Phone**: (703) 555-0123
- **Address**: 123 Church Street, Falls Church, VA 22046

---

Built with ❤️ for The Falls Church community
