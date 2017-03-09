import React, {Component} from 'react';
import { Link } from 'react-router';

class Image extends Component {
	
	render() {
		return (
			<div className='image'>
				<Link to={`/image/${this.props.id}`}>
					<img src={this.props.url} alt={this.props.name} />
					<p >{this.props.name}</p>
				</Link>
			</div> )
	}
}

export default Image;
