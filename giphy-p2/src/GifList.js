import React, {Component} from 'react';
import Gif from './Gif';


class GifList extends Component {
  render (){
   return (
    <div>
      { this.props.searchData.map((gif, i) => {
         return <Gif gif={gif} key={gif.id}/>
      })}

    </div>

  )
 }
}

export default GifList;
