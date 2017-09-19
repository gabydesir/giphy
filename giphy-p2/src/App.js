import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddGifForm from './AddGifForm';
import GifList from './GifList';
import {emojify} from 'react-emojione';

class App extends Component {
  //setting the state & bidding
  constructor (){
    super();
    this.state = {
      gifs: [],
      inputSearchValue: '',
      inputNumberValue: '',
    }
    // this.newGif = this.newGif.bind(this);
    this.handleInputGifChange = this.handleInputGifChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleGifSubmit = this.handleGifSubmit.bind(this);
  }


  handleInputGifChange(e){
      this.setState({
        inputSearchValue: e.target.value
      });
  }

  handleQuantityChange(e){
      this.setState({
        inputNumberValue: e.target.value
      });
  }

  handleGifSubmit(e) {
    e.preventDefault();
    // e.target.gif = '';
    // e.target.quantity = '';
      // axios(`https://api.giphy.com/v1/gifs/search?q=${this.state.inputSearchValue}&api_key=351c779bdf01493688ea143b2cd2887f&limit=${this.state.inputNumberValue}&offset=0&rating=G`)
      axios(`http://api.giphy.com/v1/gifs/search?q=${this.state.inputSearchValue}&api_key=8d389ff5456642e489c71009f416603d&limit=${this.state.inputNumberValue}&offset=0&rating=G`)
      .then((res) => {
        console.log(res)
        this.setState({
          gifs: res.data.data
      })
    })
  }

  render() {
    //Rendering according to my liking
    return (
      <div className="App">
        <div className="App-header">
          <h2 className='well'>Welcomeee {emojify(':sparkles:')} 🙂</h2>
          <h3 className='welly'>You deserve all the gifts, I mean gifs 🤣 😉</h3>
        </div>
        <AddGifForm
            handleGifSubmit={this.handleGifSubmit}
            handleInputGifChange={this.handleInputGifChange}
            handleQuantityChange={this.handleQuantityChange}
            inputNumberValue={this.state.inputNumberValue}
            inputSearchValue={this.state.inputSearchValue}
        />
        <GifList searchData={this.state.gifs}/>

      </div>
    );
  }
}

export default App;
