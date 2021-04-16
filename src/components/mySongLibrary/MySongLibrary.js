import React from 'react';
import SongCard from '../SongCard/SongCard';
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