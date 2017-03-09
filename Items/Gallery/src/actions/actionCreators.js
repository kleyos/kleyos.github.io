import store from '../store';

export function getData(photos) {
  store.dispatch( {type: 'GET_DATA', photos} )
}
