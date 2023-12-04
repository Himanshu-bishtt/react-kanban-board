import { USERS } from "../constants";

export async function getAllUsers() {
  try {
    const res = await fetch(USERS);
    if (!res.ok) throw new Error("Error loading data. Please try again");
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}
