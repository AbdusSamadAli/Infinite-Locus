import { useState } from "react";
import axios from "../api/axios";

export default function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    capacity: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("/events", {
        ...form,
        capacity: Number(form.capacity)
      });
      alert("Event created successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Event
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        <label className="block text-sm font-medium mb-1">
          Event Title
        </label>
        <input
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Tech Conference 2025"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          required
        />

        <label className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          className="w-full border rounded px-3 py-2 mb-4 resize-none focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Brief description of the event"
          rows={3}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <label className="block text-sm font-medium mb-1">
          Event Date
        </label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          required
        />

        <label className="block text-sm font-medium mb-1">
          Capacity
        </label>
        <input
          type="number"
          min="1"
          className="w-full border rounded px-3 py-2 mb-6 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="100"
          onChange={(e) =>
            setForm({ ...form, capacity: e.target.value })
          }
          required
        />

        <button
          disabled={loading}
          className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Creating event..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}
