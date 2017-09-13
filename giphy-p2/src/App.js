import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddGifForm from './AddGifForm';
import GifList from './GifList';

class App extends Component {
  //setting the state & bidding
  constructor (){
    super();
    this.state = {
      apiData: {},
    }
    this.newGif = this.newGif.bind(this);
    this.handleInputGifChange = this.handleInputGifChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  newGif (){
    // calling the API
    axios('https://api.giphy.com/v1/gifs/random?api_key=351c779bdf01493688ea143b2cd2887f&tag=&rating=G')
      .then((res) => {
        console.log(res)
      this.setState({
        apiData: res.data.data
      })
    })
  }

  handleInputGifChange(e){
      this.setState({
        handleInputGifChange: e.target.value
      });
  }

  handleQuantityChange(e){
      this.setState({
        handleQuantityChange: e.target.value
      });
  }

  handleGifSubmit(){

  }


  render() {
    //Rendering according to my liking
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Gif App</h2>
        </div>
        <AddGifForm
            handleGifSubmit={this.handleGifSubmit}
            handleInputGifChange={this.handleInputGifChange}
            handleQuantityChange={this.handleQuantityChange}
        />

        <GifList gifdata={this.state.apiData}
                 newGif={this.newGif}/>
      </div>
    );
  }
}

export default App;
