const remoteURL = "http://localhost:5002"

export default {
 
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
  },
  getAllUsers() {
    return fetch(`${remoteURL}/users`).then(e => e.json())
  },
  postNewUser(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(e => e.json())
  },
 
 
  getPoster(id) {
    return fetch(`${remoteURL}/posterData/${id}`).then(e => e.json())
  },
  getAllPosters() {
    let myUser = sessionStorage.getItem("credentials")
    let myUserNumber = Number(myUser)
    return fetch(`${remoteURL}/posterData?userId=${myUserNumber}`).then(e => e.json())
  },
  getAllPostersTemplates() {
    return fetch(`${remoteURL}/posterData`).then(e => e.json())
  },
  postNewPoster(newPoster) {
    return fetch(`${remoteURL}/posterData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoster)
    }).then(e => e.json())
  },

  /* added delete function */
  deletePoster(id) {
    return fetch(`${remoteURL}/Poster/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  },
}