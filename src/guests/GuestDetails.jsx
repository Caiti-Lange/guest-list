import { useState, useEffect } from "react";
import { getGuestById } from "../api/api";

export default function GuestDetails({ guestId, setGuestId }) {
    const [recipe, setGuest] = useState();

    useEffect(() => {
        const fetchGuest = async () => {
            const data = await getGuestById(guestId);
            setGuest(data);
        };

        fetchGuest();
    }, [guestId]);

    if (!guest) return <p>Loading...</p>;

    return (
        <article className="guest-details">
            <h1>{guest.name}</h1>
            <p>{guest.email}</p>
            <p>{guest.phone}</p>
            <p>{guest.bio}</p>
            <p>{guest.job}</p>
            <button onClick={() => setGuestId(null)}>Back</button>
        </article>
    );
};