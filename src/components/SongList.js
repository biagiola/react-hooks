import React, { useState, useEffect } from 'react'; //imr
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => { //sfc

  const[songs, setSongs] = useState([
    { id: 1, band: 'Tame Impala', title: 'It might be time', year: 2019},
    { id: 2, band: 'DMAS', title: 'Silver', year: 2019}
  ]);

  const [age, setAge] = useState(20); // set age = 20

  const addSong = (title) => {
    setSongs([...songs, { band: 'Oasis', title: title, id: uuid() }]);
  }

  // this useEffect only will execute when songs changes.
  useEffect( () => {
    console.log('useEffect hook song ran', songs);
  }, [songs])
  
  // this useEffect only will execute when age changes.
  useEffect( () => {
    console.log('useEffect hook age ran', age);
  }, [age])

  return (
    <div className="song-list">
      <ul>
        { songs.map(song => {
          return ( <li key={song.id}> {song.band} - {song.title}</li> )
        })}
      </ul>
      <NewSongForm addSong={addSong }/>
      <button onClick={ () => setAge(age+1) }>Add 1 to age: {{age}}</button>
    </div>
  );
}

export default SongList;
