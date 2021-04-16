import React from 'react';
import '../SongCard/SongCard.scss'


const SongCard = ({ id, title, artist, genres, album_cover, handleSong, buttonIcon, isActive }) => {

  const listItems = genres.map(genre => {
    return (
      <li className="genre">{ genre }</li>
    );
  });
  console.log(isActive)
  return (
    <div className='song-card'>
      <img src={ album_cover }/>
      <article className="song-details">
        <h2>{ title }</h2>
        <p>Artist: { artist }</p>
        <ul className="genres">
          { listItems }
        </ul>
      </article>
      <button className={isActive ? "handle-song-btn" : "hidden" } id={id} onClick={() => handleSong(id)}>{ buttonIcon }</button>
    </div>
  );
};

export default SongCard;
