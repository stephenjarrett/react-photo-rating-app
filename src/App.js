import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery.js';
import Image from './Image.js';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      images: [{
        id: 1000,
        score: 3
      },
      {
        id: 1001,
        score: 0
      },
      {
        id: 1002,
        score: 0
      }],
      currentId: 1000
      };
    }

  render() {


    return (
      <div className="App">

          <h1>Rate the Photos</h1>

          <button onClick={this._imageBackward} className="button btn">&lt;</button>
          <Image source={`https://picsum.photos/400/500?image=${this.state.currentId}`} />
          <button onClick={this._imageForward} className="button btn">&gt;</button>
        <div>
          Score: {this._returnScoreById()}
        </div>
        <button onClick={this._increaseScore} className="button">+</button>
        <button onClick={this._decreaseScore} className="button">-</button>


      </div>
    );
  }

  _imageForward = () => {
    let nextId = this.state.currentId;
    if (this.state.currentId === 1002) {
      nextId = 1000;
    } else {
      nextId = this.state.currentId + 1;
    }

    this.setState({
      currentId: nextId
    });    
  }
  
  _imageBackward = () => {
    let previousId = this.state.currentId
    if (this.state.currentId === 1000) {
      previousId = 1002;
    } else {
      previousId = this.state.currentId -1;
    }

    this.setState({
      currentId: previousId
    });
  }

  _findImageById = () => {
    let theImage = this.state.images.find(image => image.id === this.state.currentId);
    if (!theImage) {
      theImage = this.state.images[0];
    }
    return theImage
  }

  _returnScoreById = () => {
    let theImage = this.state.images.find(image => image.id === this.state.currentId);
    if (!theImage) {
      theImage = this.state.images[0];
    }
    return theImage.score
  }

  _increaseScore = () => {
    let theImage = this._findImageById();
    let newScore = theImage.score + 1;
    let newImage = {
      ...theImage,
      score: newScore
    };
    console.log(newImage);

    let newScoreArray = this.state.images.map(image => {
      if (image.id === this.state.currentId) {
        return newImage;
      } else {
        return image;
      }
    })

    // set the state
    this.setState({
      images: newScoreArray
    })    
  }

  _decreaseScore = () => {
    let theImage = this._findImageById();
    let newScore = theImage.score + -1;
    let newImage = {
      ...theImage,
      score: newScore
    };
  

    let newScoreArray = this.state.images.map(image => {
      if (image.id === this.state.currentId) {
        return newImage;
      } else {
        return image;
      }
    })

    // set the state
    this.setState({
      images: newScoreArray
    })
  }
}

export default App;
