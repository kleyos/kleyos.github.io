import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

//import data from './data/data.json';

// create an object for the default data

const defaultState = {
  data:[]
};

const store = createStore(rootReducer, defaultState);

export default store;
