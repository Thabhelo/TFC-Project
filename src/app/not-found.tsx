import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="font-display text-3xl font-semibold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist. Let us help you find your way back home.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            Return Home
          </Link>
          
          <div className="text-sm text-gray-500 mt-8">
            <p>Need help finding something?</p>
            <p className="font-medium mt-2">Contact us at:</p>
            <p className="font-medium">info@thefallschurch.net</p>
            <p className="font-medium">(263)719073586</p>
          </div>
        </div>
      </div>
    </div>
  )
} 