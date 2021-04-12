import React from 'react';
import SongCard from '../SongCard/SongCard';
import '../SongLibrary/SongLibrary.css'

const SongLibrary = ({ songs }) => {
  const allSongs = songs.map(song => {
    return (
      <SongCard 
      className="song-card"
      title={ song.title }
      artist={ song.artist }
      genres={ song.genres }
      album_cover={ song.album_cover }
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