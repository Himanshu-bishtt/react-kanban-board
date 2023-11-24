import Ticket from "../models/ticketModel.js";

export async function getTickets(req, res) {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({
      status: "success",
      results: tickets.length,
      data: {
        tickets,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function getTicket(req, res) {
  try {
    const ticket = await Ticket.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        ticket,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
}

export async function createTicket(req, res) {
  try {
    const tag = req.body.tag.split(", ");
    const newTicket = await Ticket.create({ ...req.body, tag });
    res.status(201).json({ status: "success", data: { ticket: newTicket } });
  } catch (err) {
    res.status(409).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function updateTicket(req, res) {
  try {
    if (Object.keys(req.body).length === 0)
      throw new Error("Body cannot be empty");

    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        ticket,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function deleteTicket(req, res) {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) throw new Error("Ticket does not exist");
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
}
