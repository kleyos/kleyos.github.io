const obj = {
	pinPong: {
		name: 'React App - PinPong Game',
		link: '\Items\new-pinpong-app\index.html',
		secondName: 'The PinPong Game',
		description: 'My training project via ReactJS. Welcome to play!',
		img: '',
		list: ['React JS', 'Vanila JS', 'ES6']
	},

	theEarth: {
		name: 'Landing page "The Earth"',
		link: '\Items\Landing\index.html',
		secondName: 'My diploma project of the courses "I am a Frontend Developer". The main point of the landing is opening of the alien supermarket.',
		description: 'Technology stack: Bootstrap 3, jQuery, Ajax, php script for sending e-mail. Check valid data. Adaptive design',
    	img: 'img/theEarth.png',
    	list: ['HTML5','CSS3','jQuery',' Bootstrap 3', 'Ajax', 'PHP']
	},

	omega:{
		name: 'Колл центр Omega Contact',
		link: 'http://kley.ho.ua/Omega/',
		secondName: 'Landing Page Omega Contact.',
		description: `Development of landing page for company Contact Omega. 
		              A Mobile First approach . Adaptability. 
		              Cross-browser compatibility: latest versions of IE, Safari, Chrome and FF; 
		              mobile Safari (iOS 8) and Chrome (Android 5). 
		              The project used libraries: jasny-bootstrap, font-awesome, equalHeights, mb.ytplayer. 
		              BEM, using SCSS for CSS. Build via Grunt.`,
    	img: 'img/Omega.png',
    	list: ['HTML5','CSS3','jQuery',' Bootstrap 3 Grid', 'Ajax', 'PHP', 'Sass', 'Grunt']
	},

	smartDevelop: {
		name: 'Landing Page тренинга',
		link: 'http://kley.ho.ua/Smart Develop/',
		secondName: 'Landing Page Smart Develop.',
		description: '<mark>Landing Page в стадии разработки</mark>',
		img: '',
		list: ['HTML5','CSS3','SVG','Bootstrap 3 Grid','Sass','Grunt']

	}
}

for (const ob in obj){

	const {name, link, secondName, description, img} = obj[ob];
	const listItems = obj[ob].list;

	const htmlPanel =  `<div class="panel-heading">
						    <h3 class="item__title panel-title">
						        <a class="item__link" href="${link}">${name}</a>
						    </h3>
					    </div>
				      	<div class="panel-body">
				          <ul class="item__list"></ul>
				          <div class="item__description">
				            <p>${secondName}</p>
				            <p>${description}</p>
				          </div>
				          <div class="link">
				            <a class="item__link" href="${link}">
				            	<img class="link__img" src="${img}" alt="site screen">
				            </a>
				          </div> 
				     	</div>`;

	const wrapper = document.querySelector('.wrapper');
	const div = document.createElement('div');

	div.className = 'item panel panel-default';
	div.innerHTML += htmlPanel;
	wrapper.appendChild(div);

	const itemList = div.querySelector('.item__list');


	listItems.forEach(item => itemList.innerHTML += `<li class="list__item">${item}</li>`);
}






