import React from 'react';
import './index.css';
import Profile from './profile';
import Gallery from './gallery'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search(){
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    let FETCH_URL = BASE_URL + "q=" + this.state.query + "&type=artist&limit=1&access_token= Put your access token here";
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      console.log('artist', json);
     this.setState({artist});

     FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&access_token= Put your access token here`
     fetch(FETCH_URL, {
       method: 'GET'
     })
     .then(response => response.json())
     .then(json => {
       console.log('artists top tracks', json);
       const tracks = json.tracks;
       this.setState({tracks})
     })
    });
  }

  render() {
    return (
        <div  className="apply">
          <div className="app-title">Trackify</div>
          <div className="searching">
            <form>
              <div className="init">
                <input typeof="text" className="form-control" placeholder="Search for an artist"
                  value = {this.state.query}
                  onChange = {event => {this.setState({query: event.target.value})}}
                  onKeyPress={event => {
                    if(event.key === 'Enter'){
                      this.search()
                    }
                  }}
                  />

                <div>
                  <button type="button" className="btn" onClick={() => this.search()}>
                     <span className="glitch"></span> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        {
          this.state.artist !== null
          ?
            <div>
              <Profile
                  artist={this.state.artist} />
                <Gallery
                  tracks = {this.state.tracks}
                  />
            </div>
          : <div></div>
        }
        </div>

    );
  }
}

export default App;
