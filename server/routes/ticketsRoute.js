import express from "express";

import {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../controllers/ticketsController.js";

const router = express.Router();

router.route("/").get(getTickets).post(createTicket);
router.route("/:id").get(getTicket).patch(updateTicket).delete(deleteTicket);

export default router;
