import React from "react";
import ReactDOM from 'react-dom';
import "./Lyric.scss";

const Lyrics = (props) => {
  return ReactDOM.createPortal(
    (<div className="modal-overlay">
    <section className="modal-content">
     <p className="lyrics">{props.error || props.lyrics}<br/>some text</p>
     <button onClick={props.closeLyrics}>Close</button>
    </section>
    </div>
    ), document.querySelector("#lyricsModal")
  )
}



export default Lyrics;