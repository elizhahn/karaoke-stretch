export const formatLyrics = (lyricData, songTitle) => {
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
