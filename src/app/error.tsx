'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md mx-auto">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again or contact us if the problem persists.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            Try again
          </button>
          <div className="text-sm text-gray-500">
            <p>Need help? Contact us at:</p>
            <p className="font-medium">info@thefallschurch.net</p>
            <p className="font-medium">(703) 555-0123</p>
          </div>
        </div>
      </div>
    </div>
  )
} 