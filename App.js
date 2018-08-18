import React from 'react';
import './index.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }

  search(){
    console.log('this.state', this.state);
    const base_url = 'https://api.spotify.com/v1/search?api_key=ccc6db3570d5460a9a0dca13d717158fq=';
    const fetch_url = base_url + this.state.query;
    console.log('fetch_url', fetch_url);
  }

  render() {
    return (
        <div  className="apply">
          <div className="app-title">Music master</div>
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
                  <button type="button" className="btn btn-default" onClick={() => this.search()}>
                     <span className="glyphicon glyphicon-search"></span> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="profile">
            <div>Artist Picture</div>
            <div>Artist Name</div>
          </div>
          <div className="gallery">Gallery</div>
        </div>

    );
  }
}

export default App;
