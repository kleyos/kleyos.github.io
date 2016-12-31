'use strict';

var obj = {
	pinPong: {
		name: 'React App - PinPong Game',
		link: `\Items\\new-pinpong-app\\\index.html`,
		secondName: 'The PinPong Game',
		description: 'My training project via ReactJS. Welcome to play!',
		img: '',
		list: ['React JS', 'Vanila JS', 'ES6']
	},

	theEarth: {
		name: 'Landing page "The Earth"',
		link: '\Items\\Landing\\index.html',
		secondName: 'My diploma project of the courses "I am a Frontend Developer". The main point of the landing is opening of the alien supermarket.',
		description: 'Technology stack: Bootstrap 3, jQuery, Ajax, php script for sending e-mail. Check valid data. Adaptive design',
		img: 'img/theEarth.png',
		list: ['HTML5', 'CSS3', 'jQuery', ' Bootstrap 3', 'Ajax', 'PHP']
	},

	omega: {
		name: 'Колл центр Omega Contact',
		link: 'http://kley.ho.ua/Omega/',
		secondName: 'Landing Page Omega Contact.',
		description: 'Development of landing page for company Contact Omega. \n\t\t              A Mobile First approach . Adaptability. \n\t\t              Cross-browser compatibility: latest versions of IE, Safari, Chrome and FF; \n\t\t              mobile Safari (iOS 8) and Chrome (Android 5). \n\t\t              The project used libraries: jasny-bootstrap, font-awesome, equalHeights, mb.ytplayer. \n\t\t              BEM, using SCSS for CSS. Build via Grunt.',
		img: 'img/Omega.png',
		list: ['HTML5', 'CSS3', 'jQuery', ' Bootstrap 3 Grid', 'Ajax', 'PHP', 'Sass', 'Grunt']
	},

	smartDevelop: {
		name: 'Landing Page тренинга',
		link: 'http://kley.ho.ua/Smart Develop/',
		secondName: 'Landing Page Smart Develop.',
		description: '<mark>Landing Page в стадии разработки</mark>',
		img: '',
		list: ['HTML5', 'CSS3', 'SVG', 'Bootstrap 3 Grid', 'Sass', 'Grunt']

	}
};

var _loop = function _loop(ob) {
	var _obj$ob = obj[ob],
	    name = _obj$ob.name,
	    link = _obj$ob.link,
	    secondName = _obj$ob.secondName,
	    description = _obj$ob.description,
	    img = _obj$ob.img;

	var listItems = obj[ob].list;

	var htmlPanel = '<div class="panel-heading">\n\t\t\t\t\t\t    <h3 class="item__title panel-title">\n\t\t\t\t\t\t        <a class="item__link" href="' + link + '">' + name + '</a>\n\t\t\t\t\t\t    </h3>\n\t\t\t\t\t    </div>\n\t\t\t\t      \t<div class="panel-body">\n\t\t\t\t          <ul class="item__list"></ul>\n\t\t\t\t          <div class="item__description">\n\t\t\t\t            <p>' + secondName + '</p>\n\t\t\t\t            <p>' + description + '</p>\n\t\t\t\t          </div>\n\t\t\t\t          <div class="link">\n\t\t\t\t            <a class="item__link" href="' + link + '">\n\t\t\t\t            \t<img class="link__img" src="' + img + '" alt="site screen">\n\t\t\t\t            </a>\n\t\t\t\t          </div> \n\t\t\t\t     \t</div>';

	var wrapper = document.querySelector('.wrapper');
	var div = document.createElement('div');

	div.className = 'item panel panel-default';
	div.innerHTML += htmlPanel;
	wrapper.appendChild(div);

	var itemList = div.querySelector('.item__list');

	listItems.forEach(function (item) {
		return itemList.innerHTML += '<li class="list__item">' + item + '</li>';
	});
};

for (var ob in obj) {
	_loop(ob);
}
//# sourceMappingURL=main.js.map
