import React, { Component } from 'react';

class AddGifForm extends Component {
  render () {
    return (
      <form
      className='add-gif-form'
      onSubmit={this.props.handleGifSubmit}
      >
      <input
          id= 'input1'
          type='text'
          value={this.props.inputSearchValue}
          placeholder='Search Gif'
          name='gif'
          onChange={this.props.handleInputGifChange}
         /><br/>

      <input
          id='input2'
          type='text'
          value={this.props.inputNumberValue}
          name='quantity'
          placeholder='Number of Gifs'
          onChange={this.props.handleQuantityChange}
          /><br/>

      <button className='circle'> All THE GIFF</button>
    </form>
    );
  }
}

export default AddGifForm;
