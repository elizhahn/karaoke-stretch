import React from "react";

const UserSongLibrary = ({ songs }) => {
  const userSongList = songs.map(song => {
    return  <SongCard
    key = { song.id } 
    id = { song.id }
    title={ song.title }
    artist={ song.artist }
    genres={ song.genres }
    album_cover={ song.album_cover }
    />
  })
  return (
    <section className="user-library">
      {userSongList}
    </section>
  )
}

export default UserSongLibrary; 