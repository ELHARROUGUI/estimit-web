import { useEffect, useState } from "react";
import { getRooms } from "../../services/room";
export default function Welcome() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    let mounted = true;
    getRooms().then((items) => {
      if (mounted) {
        setRooms(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>ESTIMIT - ROOM</h1>
      <ul>
        {rooms.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
