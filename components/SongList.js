import React, { useState } from 'react'; //imr
import uuid from 'uuid/v1';

const SongList = () => { //sfc

  const[songs, setSongs] = useState([
    { id: 1, band: 'Tame Impala', title: 'It might be time', year: 2019},
    { id: 2, band: 'DMAS', title: 'Silver', year: 2019}
  ]);

  const addSong = () => {
    setSongs([...songs, { band: 'Oasis', title: 'new song added', id: uuid() }]);
  }

  return (
    <div className="song-list">
      <ul>
        { songs.map(song => {
          return ( <li key={song.id}> {song.band} - {song.title}</li> )
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
}

export default SongList;