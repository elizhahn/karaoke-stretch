export const formatLyrics = (lyricData) => {
 const formattedLyrics = lyricData.lyrics.split('\n').map((line, i) => {
   return (
     <span key={i}>
       {line}
       <br/>
     </span>
   )
 })
  return formattedLyrics
}

export const modifyData = (songData, genreData) => {
  const modifiedData = songData.reduce((accu, currentSong, i) => {
      accu.push(currentSong);

      const matchedItem = genreData.find(genreItem => genreItem.song_id === currentSong.id);
      let arrayGenres = Object.entries(matchedItem);
      let foundGenres = arrayGenres.filter(item => item.includes(true));

      accu[i].genres = foundGenres.map(genre => genre[0]);
      return accu;
    }, []);

    return modifiedData

}
