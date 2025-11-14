import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🐾 ALWAYS CARE ANIMAL CLINIC
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            💖 Your feedback helps us care better for the voiceless.
          </p>
          <p className="text-lg text-gray-500">
            We value your opinion and strive to provide the best care for your beloved animals
          </p>
        </div>

        {/* Clinic Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ghatkopar Card */}
          <Link href="/ghatkopar">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">📍 Ghatkopar Branch</h2>
                <p className="text-blue-100">Click to submit feedback</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Share your experience with our Ghatkopar clinic
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Fill Feedback Form →</span>
                  <span className="text-4xl">🐶</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Kandivali Card */}
          <Link href="/kandivali">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">📍 Kandivali Branch</h2>
                <p className="text-purple-100">Click to submit feedback</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Share your experience with our Kandivali clinic
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">Fill Feedback Form →</span>
                  <span className="text-4xl">🐱</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Win Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            🎁 Monthly Raffle Draw
          </h3>
          <p className="text-xl text-gray-800 mb-2">
            Every month, <span className="font-bold">3 feedback entries</span> win:
          </p>
          <p className="text-2xl font-bold text-white">
            Free Blood Test or Vaccination for a Stray! 💉
          </p>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            📝 Why Your Feedback Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🩺</div>
              <h4 className="font-semibold text-gray-800 mb-2">Improve Care Quality</h4>
              <p className="text-gray-600 text-sm">
                Help us enhance our medical services and treatment protocols
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h4 className="font-semibold text-gray-800 mb-2">Better Experience</h4>
              <p className="text-gray-600 text-sm">
                Your feedback helps reduce waiting times and improve facilities
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🐾</div>
              <h4 className="font-semibold text-gray-800 mb-2">Support Strays</h4>
              <p className="text-gray-600 text-sm">
                Win free services for street animals in need
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            🏥 Always Care Animal Clinic - Committed to excellence in veterinary care
          </p>
          <p className="text-sm text-gray-500">
            Your feedback is confidential and helps us serve you and your pets better
          </p>
        </div>
      </div>
    </div>
  );
}
