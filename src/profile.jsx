import React from 'react';
import './index.css';

class Profile extends React.Component{
  render(){
    console.log('this.props', this.props);
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
    artist = this.props.artist !== null ? this.props.artist : artist;

    return(
      <div>
        <img
          alt="Profile"
          className="profile-img"
          src={artist.images[0].url}
          />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">{artist.followers.total} Followers</div>
          <div className="profile-genres">
            {
              artist.genres.map((genre, index) => {
                if(artist.genres.length > 1){
                  genre = genre !== artist.genres[artist.genres.length-1] ? `${genre}, ` : ` & ${genre}`;
                }
                return(
                  <span key={index}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
