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
    if (!res.ok) throw new Error("A ticket must be assigned to a user");
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}
