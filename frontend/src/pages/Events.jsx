import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {events.map(e => (
        <div key={e._id} className="border p-4 rounded">
          <h3 className="font-bold">{e.title}</h3>
          <p>{e.description}</p>
          <p>Date: {new Date(e.date).toDateString()}</p>
          <button className="btn mt-2">Register</button>
        </div>
      ))}
    </div>
  );
}
