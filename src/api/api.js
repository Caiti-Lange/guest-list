import { API } from "../constants";

export async function getGuest() {
  try {
    const response = await fetch(API);
    const result = await response.json();

    if (result.success) {
      return result.data;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGuestById(id) {
  try {
    const response = await fetch(`${API}/${id}`);
    const result = await response.json();

    if (result.success) {
      return result.data;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}