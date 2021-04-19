import React from 'react';
import SongCard from '../SongCard/SongCard';
import PropTypes from 'prop-types';


const MySongLibrary = (props) => {
  const mySongList = props.songs.map(song => {
    return (
      <SongCard
      key={ song.id }
      id={ song.id }
      title={ song.title }
      artist={ song.artist }
      genres={ song.genres }
      album_cover={ song.album_cover }
      handleSong={ props.handleSong }
      buttonIcon={ props.buttonIcon }
      isActive={ true }
      />
    );
  })
  return (
    <main className="my-library">
      {mySongList}
    </main>
  )
  
}

export default MySongLibrary; 

MySongLibrary.propTypes = {
  songs:PropTypes.array.isRequired,
  handleSong: PropTypes.func.isRequired,
  buttonIcon: PropTypes.array.isRequired,
};