import React, { Component } from 'react';

class AddGifForm extends Component {
  render () {
    return (
      <form
      className='add-gif-form'
      onSubmit={this.props.handleGifSubmit}
      >
      <input
          type='text'
          value={this.props.inputSearchValue}
          placeholder='Search Gif'
          name='gif'
          onChange={this.props.handleInputGifChange}
         /><br/>

      <input
          type='text'
          value={this.props.inputNumberValue}
          name='quantity'
          placeholder='Number of Gifs'
          onChange={this.props.handleQuantityChange}
          /><br/>

      <button id='submit'> ALL THE GIFF</button>
    </form>
    );
  }
}

export default AddGifForm;
