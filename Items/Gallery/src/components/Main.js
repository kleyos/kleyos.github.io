import React, { Component } from 'react';
import {getData} from '../actions/actionCreators';

class Main extends Component {

  componentDidMount(){
    const url = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF';
    
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {console.log();getData(responseJson.photos)} )
      .catch( error => console.error(error));
  }
    
  render() {
    return (
      <div className='App'>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    );
  }
}

export default Main;
