import React from 'react';
import './App.css';
<<<<<<< HEAD
import bootstrap from './axios';
import ErrorBoundary from './error-boundary';
import Login from './login';
import Account from './account';
import AppList from './app-list';
import useBackend from './use-backend';
import {getWebIntegrationId, getTenantUrl} from './util';

require('babel-polyfill');

function App() {

  const url = new URL(window.location.href);

  const tenantUrl = getTenantUrl();

  const webIntegrationId = getWebIntegrationId();

  bootstrap(tenantUrl, webIntegrationId);

  const [user, userError, userIsLoading] = useBackend({ url: '/v1/users/me' });
  const needsLogin = userError && userError.response && userError.response.status === 401;
  let view;

  if (userIsLoading) {
    view = (<p>Loading...</p>);
  } else if (needsLogin) {
    view = <Login tenantUrl={tenantUrl} webIntegrationId={webIntegrationId} />
  } else if (userError) {
    view = (<div>Unable to fetch user, likely misconfigured tenant/web integration. <pre><code>{userError.stack}</code></pre></div>);
  } else {
    view = (
    <React.Fragment>
      <Account tenantUrl={tenantUrl} />
      <AppList tenantUrl={tenantUrl} userId={user.id} />
    </React.Fragment>
    );
  }

  return (
    <ErrorBoundary>{view}</ErrorBoundary>
  );
=======
import Flickr from 'flickr-sdk';
import photos from './images';

class App extends React.Component {

  componentDidMount() {
    const flickr = new Flickr('d74804db9d9e1435539d3f15b5cbfe06');
    //const photos = [];
    flickr.photos.search({
      tags: 'Nature',
      per_page: 500,
      is_getty: true,
      safe_search: 1,
    }).then(function (res) {
      console.log(res.body);
      res.body.photos.photo.forEach((photo) => {
        console.log(photo);
        flickr.photos.getInfo({ photo_id: photo.id }).then((res) => {
          //photos.push(res.body.photo);
          //console.log(JSON.stringify(photos));
        });
      });
    }).catch(function (err) {
      console.error('bonk', err);
    });

  }
  state = { sliderValue: 0, bulletPosition: 0 };

  showSliderValue(e) {

    this.bullet.innerHTML = this.slider.value;
    var bulletPosition = (this.slider.value / this.slider.max);
    this.setState({ sliderValue: (this.slider.value), bulletPosition: (bulletPosition * 390)});
  }

  render() {
    return (
      <div className="App">
        <div className="photos">
          {photos.map((photo) => (
            <div className="photo" key={photo.id} style={{backgroundImage: 'url("https://farm' + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + '.jpg)"'}}></div>
          ))}
        </div>
        <div className="filters">
          <div className="container">
            <div className="range-slider">
              <span style={{ left: this.state.bulletPosition +'px'}} id="rs-bullet" ref={el => this.bullet = el} className="rs-label">0</span>
              <input ref={el => this.slider = el} onChange={(e) => this.showSliderValue(e)} id="rs-range-line" className="rs-range" type="range" value={this.state.sliderValue} min="0" max="7000"></input>
            </div>
            <div className="box-minmax">
              <span>0</span><span>7000</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
>>>>>>> 3ad8bc304f9d84b9a84e31da67ce04bc20b96e16
}

export default App;
