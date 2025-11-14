import { useState, useEffect } from "react";
import { getGuest } from "../api/api";

export default function GuestList({ setGuestId }) {
  const [ guest, setGuest] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getGuest();
      setGuest(data);
    };

    fetchGuests();
  }, []);

  return (
    <section>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {guest.map((guest) => (
            <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
              <td>{guest.name}</td>
              <td className="table__job">{guest.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="guestlist__p">Select a guest to see more details.</p>
    </section>
  );
};