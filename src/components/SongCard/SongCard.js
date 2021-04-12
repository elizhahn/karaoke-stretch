import React from 'react';
import '../SongCard/SongCard.css'

const SongCard = (props) => {
  const { title, artist, genres, album_cover } = props;

  const listItems = genres.map(genre => {
    return (
      <li> { genre } </li>
    );
  });

  return (
    <div className='song-card'>
      <h2>{ title }</h2>
      <p>{ artist }</p>
      <ul>
        { listItems }
      </ul>
      <img src={ album_cover }/>
    </div>
  );
};

export default SongCard;