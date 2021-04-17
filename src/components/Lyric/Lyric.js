import React from "react";
import ReactDOM from 'react-dom';
import "./Lyrics.scss";

const Lyrics = (props) => {
  
  return ReactDOM.createPortal(
    (<div className="modal-overlay">
    <section className="modal-content">
     <p classname="lyrics">{props.lyrics}</p>
     <button onClick={props.closeLyrics}>Close</button>
    </section>
    </div>
    ), document.querySelector("#lyricsModal")
  )
}



export default Lyrics;