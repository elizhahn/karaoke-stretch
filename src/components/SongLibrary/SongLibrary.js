import React from 'react';
import SongCard from '../SongCard/SongCard';
import '../SongLibrary/SongLibrary.css'

const SongLibrary = ({ songs, handleSong }) => {
  const allSongs = songs.map(song => {
    return (
      <SongCard 
      key={song.id}
      id={song.id}
      title={ song.title_title }
      artist={ song.artist }
      genres={ song.genres }
      album_cover={ song.album_cover }
      handleSong={handleSong}
      />
    );
  });
  return (
    <div className='library'>
      {allSongs}
    </div>
  );
};

export default SongLibrary;