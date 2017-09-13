import React, {Component} from 'react';
import Gif from './Gif';


class GifList extends Component {
  render (){
   return (
    <div>

    <Gif gifdata={this.props.gifdata}/>
     <button onClick={this.props.newGif}>CLICK MEEEEEE</button>
    </div>

  )
 }
}

export default GifList;
