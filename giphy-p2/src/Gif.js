import React, { Component } from 'react';

class Gif extends Component {
  componentDidUpdate(nextProps){
  return(nextProps.gifdata.image_original_url !== this.props.gifdata.image_original_url);
  }


  render (){
    return (
    <div>
    <p> gif on gif </p>
    <img src={this.props.gifdata.image_original_url}/>
    </div>
    )
   }
}


export default Gif;
