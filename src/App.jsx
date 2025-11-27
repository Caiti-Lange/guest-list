import {useState} from "react";
//components
import GuestList from "./guests/GuestList";
import GuestDetails from "./guests/GuestDetails";

export default function App() {
  const [guestId, setGuestId] = useState();
  return (
    <main>
      {guestId ? (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </main>
  );
}
