import React from "react";

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
      handleSong={ this.props.handleSong }
      buttonIcon={ this.props.buttonIcon }
      />
    );
  })
  return (
    <section>
      {mySongList}
    </section>
  )
  
}

export default MySongLibrary; 