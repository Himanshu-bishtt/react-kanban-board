import fs from "fs";
import express from "express";
import cors from "cors";

const tickets = JSON.parse(fs.readFileSync("data/tickets.json", "utf-8"));
const users = JSON.parse(fs.readFileSync("data/users.json", "utf-8"));

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/v1/tickets", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tickets.length,
    data: {
      tickets,
    },
  });
});

app.get("/api/v1/tickets/:id", (req, res) => {
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
});

app.post("/api/v1/tickets", (req, res) => {
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
    res.status(200).json({
      status: "success",
      results: tickets.length,
      data: {
        tickets,
      },
    });
  });
});

export default app;
