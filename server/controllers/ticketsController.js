import fs from "fs";
import { users } from "../app.js";

const tickets = JSON.parse(fs.readFileSync("data/tickets.json", "utf-8"));

export function getTickets(req, res) {
  res.status(200).json({
    status: "success",
    results: tickets.length,
    data: {
      tickets,
    },
  });
}

export function getTicket(req, res) {
  const ticketId = `CAM-${req.params.id}`;

  const ticket = tickets.find((t) => t.id === ticketId);

  if (!ticket)
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });

  res.status(200).json({
    status: "success",
    data: {
      ticket,
    },
  });
}

export function createTicket(req, res) {
  const { title, tag, user, status, priority } = req.body;

  const newId = Number(tickets.at(-1).id.split("-").at(1)) + 1;

  const newTags = tag.split(", ");

  const newUserId = users.find(
    (u) => u.name.toLowerCase() === user.toLowerCase()
  ).id;

  const newTicket = {
    id: `CAM-${newId}`,
    title,
    tag: newTags,
    userId: newUserId,
    status,
    priority,
  };

  tickets.push(newTicket);

  fs.writeFile("data/tickets.json", JSON.stringify(tickets), (err) => {
    if (err) {
      return res.status(409).json({
        status: "fail",
        message: "Internal server error",
      });
    }
    res.status(201).json({
      status: "success",
      results: tickets.length,
      data: {
        tickets,
      },
    });
  });
}

export function updateTicket(req, res) {
  const id = `CAM-${req.params.id}`;

  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ status: "fail", message: "Request body cannot be empty" });
  }

  const ticket = tickets.find((t) => t.id === id);
  const ticketIndex = tickets.findIndex((t) => t.id === id);

  const newTag = req.body?.tag?.split(", ") || ticket.tag;

  let newUserId = ticket.userId;
  if (req.body.user) {
    newUserId =
      users.find((u) => u.name.toLowerCase() === req.body.user.toLowerCase())
        .id || ticket.userId;
  }

  const newTitle = req.body?.title || ticket.title;
  const newStatus = req.body?.status || ticket.status;
  const newPriority = req.body?.priority || ticket.priority;

  const updatedTicket = {
    ...ticket,
    title: newTitle,
    tag: newTag,
    userId: newUserId,
    status: newStatus,
    priority: newPriority,
  };

  tickets.splice(ticketIndex, 1, updatedTicket);

  fs.writeFile("data/tickets.json", JSON.stringify(tickets), (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        ticket: updatedTicket,
      },
    });
  });
}

export function deleteTicket(req, res) {
  const id = `CAM-${req.params.id}`;

  const updatedTickets = tickets.filter((t) => t.id !== id);

  fs.writeFile("data/tickets.json", JSON.stringify(updatedTickets), (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
      });
    }
    res.status(200).json({
      status: "success",
      results: updatedTickets.length,
      data: {
        tickets: updatedTickets,
      },
    });
  });
}
