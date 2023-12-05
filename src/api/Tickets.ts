import { TICKETS } from "../constants";
import { Ticket } from "../types";

export async function getAll(): Promise<any> {
  try {
    const res = await fetch(`${TICKETS}`);
    if (!res.ok) throw new Error("Error loading data. Please try again");
    const data = await res.json();

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function get(_id: string | undefined) {
  try {
    const res = await fetch(`${TICKETS}/${_id}`);
    if (!res.ok) throw new Error("Error loading ticket data. Please try again");
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function remove(_id: string | undefined) {
  try {
    await fetch(`${TICKETS}/${_id}`, {
      method: "DELETE",
    });
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function create(ticket: Ticket) {
  try {
    const res = await fetch(TICKETS, {
      method: "POST",
      body: JSON.stringify(ticket),
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Error creating a new ticket");
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function update(updatedTicket: Ticket, _id: string | undefined) {
  try {
    const res = await fetch(`${TICKETS}/${_id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedTicket),
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Error updating ticket");
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}
