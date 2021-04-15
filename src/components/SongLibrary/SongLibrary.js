import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SongCard from '../SongCard/SongCard';
import '../SongLibrary/SongLibrary.css'

const SongLibrary = ({ songs, handleSong, buttonIcon }) => {
  const allSongs = songs.map(song => {
    return (
      <SongCard
      key={ song.id }
      id={ song.id }
      title={ song.title_title }
      artist={ song.artist }
      genres={ song.genres }
      album_cover={ song.album_cover }
      handleSong={ handleSong }
      buttonIcon={ buttonIcon }
      />
    );
  });
  return (
    <div className='library'>
      <SearchBar />
      {allSongs}
    </div>
  );
};

export default SongLibrary;
