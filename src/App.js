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

class App extends Component {

  render() {

    function Section(props) {
      let h2;
      if (props.movieNum == 0){
        h2 = <h2 style={{'color': '#000000'}}>{movieInfo[props.movieNum].title}</h2>;
      }
      else {
        h2 = <h2>{movieInfo[props.movieNum].title}</h2>;
      }
      if (props.flipped == "true"){
        return(
          <div className="section-container">
            <div className="section-text-wrapper">
              <div className="section-text">
                {h2}
                <p>{movieInfo[props.movieNum].description}</p>
              </div>
            </div>
            <div className="section-image">
              <img src={movieInfo[props.movieNum].img}></img>
            </div>
          </div>
        );
      }
      else {
        return(
          <div className="section-container">
            <div className="section-image">
              <img src={movieInfo[props.movieNum].img}></img>
            </div>
            <div className="section-text-wrapper">
              <div className="section-text">
                {h2}
                <p>{movieInfo[props.movieNum].description}</p>
              </div>
            </div>
          </div>
        );
      }


    }


    return (
      <div className="App">
          <section className="section-1">
            <Section movieNum="0"/>
          </section>
          <section className="section-2">
            <Section movieNum="1" flipped="true"/>
          </section>
          <section className="section-3">
            <Section movieNum="2" />
          </section>
      </div>
    );
  }
}

export default App;
