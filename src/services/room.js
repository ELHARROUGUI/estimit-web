import { API } from "../config";
export function getRooms() {
  return fetch(`{API}/rooms`).then((data) =>
    data.json()
  );
}

export function createRoom(room) {
  return fetch(`${API}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ room })
  }).then((data) => data.json());
}
