import Event from "../models/Event.js";
import Registration from "../models/Register.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, date, capacity } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      capacity,
      organizerId: req.user.id
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getAllEvents = async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
};

export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
};
export const registerForEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event)
    return res.status(404).json({ message: "Event not found" });

  if (event.registeredCount >= event.capacity)
    return res.status(400).json({ message: "Event full" });

  const alreadyRegistered = await Registration.findOne({
    userId: req.user.id,
    eventId: event._id
  });

  if (alreadyRegistered)
    return res.status(400).json({ message: "Already registered" });

  await Registration.create({
    userId: req.user.id,
    eventId: event._id
  });

  event.registeredCount++;
  await event.save();

  res.json({ message: "Registered successfully" });
};

export const getMyEvents = async (req, res) => {
  const events = await Event.find({ organizerId: req.user.id });
  res.json(events);
};

export const deleteEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event)
    return res.status(404).json({ message: "Event not found" });

  if (event.organizerId.toString() !== req.user.id)
    return res.status(403).json({ message: "Not authorized" });

  await event.deleteOne();
  res.json({ message: "Event deleted" });
};
