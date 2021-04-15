const checkForErrors = response => {
  if(!response.ok) {
    throw new Error (response.status)
  } else {
    return response.json()
  }
}

export const fetchAllSongData = () => {
  return Promise.all([fetchData('songs'), fetchData('genres')])
  }

const fetchData = (path) => {
  return fetch(`http://localhost:8080/${path}`)
    .then(checkForErrors)
    .then(data => {
      return data
    })
}
