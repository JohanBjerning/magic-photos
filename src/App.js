import React from 'react';
import './App.css';
import Flickr from 'flickr-sdk';

function App() {

  const flickr = new Flickr('d74804db9d9e1435539d3f15b5cbfe06');
  const photos = [];
  flickr.photos.search({
    text: 'doggo',
    per_page: 500
  }).then(function (res) {
    console.log(res.body);
    res.body.photos.photo.forEach((photo) => {
      flickr.photos.getInfo({photo_id: photo.id}).then( (res) => {
        console.log(res.body);
        photos.push(res.body.photo);
        console.log(JSON.stringify(photos));
      });
    });
  }).catch(function (err) {
    console.error('bonk', err);
  });

  return (
    <div className="App">

    </div>
  );
}

export default App;
