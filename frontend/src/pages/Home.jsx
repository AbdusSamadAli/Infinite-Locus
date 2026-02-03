import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Manage Events Effortlessly
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          Create events, manage registrations, and track participation in real-time.
          Built for organizers and attendees.
        </p>

        <div className="flex gap-4">
          <Link
            to="/events"
            className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
          >
            Browse Events
          </Link>

          <Link
            to="/register"
            className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          <div className="p-6 shadow rounded text-center">
            <h3 className="text-xl font-bold mb-3">Create Events</h3>
            <p>
              Organizers can create and manage events with full control
              over capacity and scheduling.
            </p>
          </div>

          <div className="p-6 shadow rounded text-center">
            <h3 className="text-xl font-bold mb-3">Easy Registration</h3>
            <p>
              Users can browse upcoming events and register instantly
              with secure authentication.
            </p>
          </div>

          <div className="p-6 shadow rounded text-center">
            <h3 className="text-xl font-bold mb-3">Real-Time Updates</h3>
            <p>
              Track live registration counts and event status
              with real-time updates.
            </p>
          </div>

        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        © 2026 EventHub • Built for Infinite Locus Hackathon
      </footer>

    </div>
  );
}
