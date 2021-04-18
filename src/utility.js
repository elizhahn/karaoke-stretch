export const formatLyrics = (lyricData) => {
 const formattedLyrics = lyricData.lyrics.split('\n').map(line => {
   return (
     <span>
       {line}
       <br/>
     </span>
   )
 })
  return formattedLyrics
}
