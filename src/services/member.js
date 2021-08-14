import {API} from "../config";
export function getMembers() {
  return fetch(`${API}/members`)
    .then(data => data.json())
}

export function createMember(member) {
 return fetch(`${API}/members`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ member })
 })
   .then(data => data.json())
}