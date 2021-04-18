import React from "react";
import ReactDOM from 'react-dom';
import "./Lyric.scss";
import { MdClose } from "react-icons/md";

const Lyrics = (props) => {
  return ReactDOM.createPortal(
    (<div className="modal-overlay">
      <section className="modal-content">
        <button onClick={props.closeLyrics} className="modal-close-btn">{<MdClose className="modal-close-icon"/>}</button>
        <p className="lyrics">{props.error || props.lyrics}</p>
      </section>
    </div>
    ), document.querySelector("#lyricsModal")
  )
}



export default Lyrics;