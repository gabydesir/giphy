import React, { Component } from 'react';

class Gif extends Component {

  render (){
    return (
    <div>
    <img src={this.props.oneGif.images.original.url}/>
    </div>
    )
   }
}


export default Gif;
