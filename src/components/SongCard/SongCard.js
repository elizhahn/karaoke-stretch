import React from 'react';
import '../SongCard/SongCard.css'

const SongCard = ({ song_title, artist, genres, album_cover }) => {
  const listItems = genres.map(genre => {
    return (
      <li className="genre">{ genre }</li>
    );
  });

  return (
    <div className='song-card'>
      <img src={ album_cover }/>
      <article className="song-details">
        <h2>{ song_title }</h2>
        <p>Artist: { artist }</p>
        <ul className="genres">Genres:
          { listItems }
        </ul>
      </article>
      <button class="add-btn">Add</button>
    </div>
  );
};

export default SongCard;