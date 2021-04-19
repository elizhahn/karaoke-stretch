import React from 'react';
import SongCard from '../SongCard/SongCard';
import PropTypes from 'prop-types';
import './MySongLibrary.scss';

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
    <section className="my-library">
      {mySongList}
    </section>
  )
  
}

export default MySongLibrary; 

MySongLibrary.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  album_cover: PropTypes.string.isRequired,
  handleSong: PropTypes.func.isRequired,
  buttonIcon: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired
};