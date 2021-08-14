import { useEffect, useState } from "react";
import "./styles.css";
import { getRooms } from "./services/room";

export default function App() {
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
      <h1>Hello CodeSandbox</h1>
      <ul>
        {rooms.map((item) => (
          <li key={item.item}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
}
