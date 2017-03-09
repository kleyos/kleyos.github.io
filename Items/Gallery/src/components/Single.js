import React, {Component} from 'react';
import Image from './Image';

class Single extends Component {
  
  render() {
    const { imgId } = this.props.params;
        
    const i= this.props.data.findIndex((img) => img.id === +imgId );
    const dt = this.props.data[i];

    return (
      <div className='single-photo'>
        <Image url={dt.image_url} name={dt.name}/>
        <p className='image-description'>{dt.description}</p>
      </div>
    )
  }
}

export default Single;
