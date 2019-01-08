import React, { Component } from 'react';
import './App.css';

const movieInfo = [
  {
    "title": "MONSOON III",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit nisi at sodales congue. Curabitur blandit scelerisque dui sit amet aliquam. Sed commodo turpis ut maximus commodo. Suspendisse leo magna, faucibus et massa vel, tincidunt aliquet nisl. Nullam luctus nulla risus, eu ultrices velit volutpat vitae.",
    "img": "https://i.vimeocdn.com/video/595198868_505x160.jpg"
  },
  {
    "title": "BEAMS",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit nisi at sodales congue. Curabitur blandit scelerisque dui sit amet aliquam. Sed commodo turpis ut maximus commodo. Suspendisse leo magna, faucibus et massa vel, tincidunt aliquet nisl. Nullam luctus nulla risus, eu ultrices velit volutpat vitae.",
    "img": "https://i.vimeocdn.com/video/589972810_530x315.jpg"
  },
  {
    "title": "Move 2",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit nisi at sodales congue. Curabitur blandit scelerisque dui sit amet aliquam. Sed commodo turpis ut maximus commodo. Suspendisse leo magna, faucibus et massa vel, tincidunt aliquet nisl. Nullam luctus nulla risus, eu ultrices velit volutpat vitae.",
    "img": "https://i.vimeocdn.com/video/590587169_530x315.jpg",
  },
];

class Section extends Component {

  render() {
    let h2;
    if (this.props.movieNum === 0){
      h2 = <h2 style={{'color': '#000000'}}>{movieInfo[this.props.movieNum].title}</h2>;
    }
    else {
      h2 = <h2>{movieInfo[this.props.movieNum].title}</h2>;
    }
    if (this.props.flipped === "true"){
      return(
        <div className="section-container">
          <div className="section-text-wrapper">
            <div className="section-text">
              {h2}
              <p>{movieInfo[this.props.movieNum].description}</p>
            </div>
          </div>
          <div>
            <img className="section-image" src={movieInfo[this.props.movieNum].img} alt="movie"></img>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="section-container">
          <div>
            <img className="section-image" src={movieInfo[this.props.movieNum].img} alt="movie"></img>
          </div>
          <div className="section-text-wrapper">
            <div className="section-text">
              {h2}
              <p>{movieInfo[this.props.movieNum].description}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Section;