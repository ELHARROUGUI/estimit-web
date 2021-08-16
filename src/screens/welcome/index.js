import { useEffect, useState } from "react";
import { getRooms } from "../../services/room";
export default function Welcome() {
  const [rooms, setRooms] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    let mounted = true;
    getRooms().then((items) => {
      if (mounted) {
        if (Array.isArray(items)) setRooms(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>ESTIMIT - Welcome</h1>
      <div>
        <h2>Create room</h2>
        <label>Username</label>
        <input
          type="text"
          onChange={(event) => setNameInput(event.target.value)}
          value={nameInput}
        />
        <button type="submit">Create room</button>
      </div>
      <div>
        <h2>Join room</h2>
        <label>Room title</label>
        <input
          type="text"
          onChange={(event) => setTitleInput(event.target.value)}
          value={titleInput}
        />
        <button type="submit">Join room</button>
      </div>
      <ul>
        {rooms.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
