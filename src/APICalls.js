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
  return fetch(`https://carryokay-server.herokuapp.com/${path}`)
    .then(checkForErrors)
}

export const fetchLyrics = (artist, songtitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${songtitle}`)
  .then(checkForErrors)
}
