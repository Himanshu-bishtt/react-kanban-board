import { TICKETS, USERS } from "../constants";

export async function getAllTickets(): Promise<any> {
  try {
    const res = await fetch(`${TICKETS}`);
    if (!res.ok) throw new Error("Error loading data. Please try again");
    const data = await res.json();

    return data;
  } catch (err: any) {
    alert(err.message);
  }
}

export async function getAllUsers() {
  try {
    const res = await fetch(USERS);
    if (!res.ok) throw new Error("Error loading data. Please try again");
    const data = await res.json();
    return data;
  } catch (err: any) {
    alert(err.message);
  }
}

export async function deleteCard(_id: string) {
  try {
    await fetch(`${TICKETS}/${_id}`, {
      method: "DELETE",
    });
  } catch (err: any) {
    alert(err.message);
  }
}
