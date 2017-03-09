function setData(state=[], action){ 
	
	switch(action.type){
		case 'GET_DATA':
			console.log('state')
			return [...action.photos];
		default:
			return state;
	} 
	console.log(state)
}

export default setData;