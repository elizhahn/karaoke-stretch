const checkForErrors = response => {
  if(!response.ok) {
    throw new Error (response.status)
  } else {
    return response.json()
  }
}

// export const fetchSongData = () => {
//   // console.log([...fetchAllSongs(), ...fetchAllGenres()])
//   // return [...fetchAllSongs(), ...fetchAllGenres()]
//   console.log(fetchAllGenres())
// }


export const fetchAllSongs = () => {
  return fetch('https://localhost:8080/songs')
    .then(checkForErrors)
    .then(data => {
      return data
    })
}

// export const fetchAllGenres = () => {
//   return fetch('https://carryokay-server.herokuapp.com/genres')
//     .then(checkForErrors)
//     .then(data => {
//       return data
//     })
// }
