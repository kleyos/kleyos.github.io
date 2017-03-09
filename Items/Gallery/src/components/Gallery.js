import React from 'react';
import Image from './Image';

function Gallery(props) {

	return (
		<div className='gallery'>
			{props.data.map( (img, index) => 
                 <Image key={index} 
                      url={img.image_url} 
                      name={img.name}
                      id={img.id}/>
                      )
			}
		</div>
		)
}

export default Gallery;