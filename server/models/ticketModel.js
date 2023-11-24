import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A ticket must have a title"],
    trim: true,
  },
  tag: {
    type: [String],
    required: false,
  },
  userId: {
    type: String,
    required: [true, "A ticket must be assigned to a user"],
  },
  status: {
    type: String,
    required: [true, "A ticket must have a status"],
  },
  priority: {
    type: Number,
    required: [true, "A ticket must have a priority"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Ticket = new mongoose.model("Ticket", ticketSchema);

export default Ticket;
