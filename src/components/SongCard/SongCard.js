import React from 'react';
import '../SongCard/SongCard.css'

const SongCard = ({ id, title, artist, genres, album_cover, handleSong }) => {
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
      <button onClick={() => handleSong(id)}>Add</button>
    </div>
  );
};

export default SongCard;