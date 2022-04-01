import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoviePlayer = (props) => {
  
  let { videoId } = useParams();
  
  return (
    <>
      <iframe id="player" type="text/html" width="640" height="360"
        src={`http://www.youtube.com/embed/${videoId}`}
        frameborder="0"></iframe>

    </>
  )
};
export default MoviePlayer;