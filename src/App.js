//import Component
import React, { useState } from 'react';
import Song from './component/Song'
import Player from './component/Player'
//import Util
import data from './Util'
//Import style scss
import './style/app.scss'
function App() {
  //State
  const [songs,setSongs]=useState(data());
  const [currentSong,SetCurrentSong]=useState(songs[0]);
  const [isPlaying,SetIsPlaying]=useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
      isPlaying={isPlaying} 
      SetIsPlaying={SetIsPlaying}
      currentSong={currentSong}

      />
    </div>
  );
}

export default App;
