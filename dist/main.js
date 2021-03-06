'use strict';

var obj = {
	worldmap: {
		name: 'React-Redux-World-Map-Component',
		link: 'items/map/',
		secondName: 'The chart component that showing analysis of the data',
		description: 'Project based on React/Redux. <br>\n\t\t\t\t\t Requirements: Show map of the world and the cities with population more than 500 000 by default.<br>\n\t\t\t\t\t Also, the component must have a field for filtering. User inputted value of population and we can see markers<br>\n\t\t\t\t\t of the cities where population more or equal this value',
		img: 'img/map.png',
		list: ['React JS', 'Redux', 'ES6', 'd3-geo API']
	},
	chart: {
		name: 'React-Redux-Chart-Component',
		link: 'items/charts/',
		secondName: 'The chart component that showing analysis of the data',
		description: 'Project based on React/Redux. <br>\n\t\t\t\t\t Requirements: The slider will give you the number of days\n\t\t\t\t\t for which we need to show the analysis for. When we click on the buttons,<br>\n\t\t\t\t\t it will enable/disable the respective lines. For the sake of this task, you\n\t\t\t\t\t can assume static data.',
		img: 'img/chart.png',
		list: ['React JS', 'Redux', 'WebPack', 'Vanilla JS', 'ES6', 'Charts']
	},
	table: {
		name: 'React-Redux-Table-Component',
		link: 'items/table/',
		secondName: 'The table component with filtering, sorting, paging and acync functions',
		description: 'Project via React/Redux/Routing. <br>\n\t\t\t\t\t Requirements: To write a table component which fetching data and\n\t\t\t\t\t building the table. Table should have additional abilities for users like sorting,\n\t\t\t\t\t filtering and pagination. <br>\n\t\t\t\t\t When the user enters on the page he selects the dataset: small, large or own.\n\t\t\t\t\t Then data is loaded from the server and according to the data is constructed the table.</br>\n\t\t\t\t\t The user can click on the table line and see information in a block under the table',
		img: 'img/table.png',
		list: ['React JS', 'Redux', 'Fetch API', 'WebPack', 'Vanilla JS', 'ES6']
	},

	Schedule: {
		name: 'React App - Schedule Time Sheet',
		link: 'items/Schedule/index.html',
		secondName: 'Time Sheet. A component that will draw a weekly cycle',
		description: 'Project via ReactJS.\n\t\t\t\t\t  Requirements: To write a component that will draw a weekly\n\t\t\t\t\t  cycle (calendar for the week).\n\t\t\t\t\tInput data JSON\n\t\t<br><code>{<br>\n\t\t "mo": [\n\t\t      {\n\t\t        "bt": 240,\n\t\t        "et": 779\n\t\t      }\n\t\t ],<br>\n\t\t "tu": [\n\t\t ],<br>\n\t\t "we": [\n\t\t ],<br>\n\t\t "th": [\n\t\t   {\n\t\t  "bt": 240,\n\t\t        "et": 779\n\t\t   },\n\t\t   {\n\t\t  "bt": 1140,\n\t\t        "et": 1319\n\t\t   }\n\t\t ],<br>\n\t\t "fr": [\n\t\t   {\n\t\t  "bt": 660,\n\t\t        "et": 1019\n\t\t   }\n\t\t ],<br>\n\t\t "sa": [\n\t\t      {\n\t\t        "bt": 0,\n\t\t        "et": 1439\n\t\t      }\n\t\t    ],<br>\n\t\t "su": []<br>\n\t\t}</code> <br>\n\t\tThe interval of the one cell is one hour. In JSON file pass 59 minutes. Sample:\n\t\tInterval of hours 1:00 to 2:00 = 60 to 119\n\t\tMinute of the all day (0 - 1439).\n\t\tAlso, the component must be clickable, that is to give the user the opportunity to select the desired interval\n\t\t(in this case are hours) and return json file in the same form as the input data(based on of the interval what\n\t\tselected by user). The selected cell is a darker color, than non-selected cell. Should be a possible to select\n\t\tthe desired range holding the left button of the mouse. Selected range should become dark color.\n\t\tWhen we toggle click on the column "all day" all cells of the interval should become selected or non-selected.\n\t\t<mark>Output object you can see in console</mark>',
		img: 'img/Schedule.png',
		list: ['React JS', 'Redux', 'WebPack', 'Vanilla JS', 'ES6']
	},
	starwars: {
		name: 'List of Star-Wars Personages',
		link: 'items/plastic-jam/',
		secondName: 'Using SWAPI',
		description: 'The SPA via React/Redux. <br>\n\t\t\t\t\t Requirements: To write aa test site with a list of the Star Wars personages\n\t\t\t\t\t from this https://swapi.co.\n\t\t\t\t\t 1. use any template;\n\t\t\t\t\t 2.add checkbox \u201Clike\u201D to every row in your list.\n\t\t\t\t\t Checkbox should save its state after page reloading;\n\t\t\t\t\t 3. add animation (on your own);\n\t\t\t\t\t 4. pass the validators\u2019 tests without mistakes;\n\t\t\t\t\t 5.deploy to any server;',
		img: '',
		list: ['React JS', 'Redux', 'Fetch API', 'WebPack', 'Vanilla JS', 'ES6']
	},
	Gallery: {
		name: 'The Gallery',
		link: 'items/Gallery/',
		secondName: '',
		description: 'Project via ReactJS. <br>\n\t\t\t\t\t Requirements: To write a component using  fetch() to get data and\n\t\t\t\t\t show the gallery of pictures. Press any picture and show selected picture using\n\t\t\t\t\t react-routing.<br>\n\t\t\t\t\t This project was built via React-Native too. You can see on my Github page',
		img: 'img/gallery.gif',
		list: ['React JS', 'Redux', 'Fetch API', 'React-Routing', 'WebPack', 'Vanilla JS', 'ES6']
	},

	pinPong: {
		name: 'React App - PinPong Game',
		link: 'items/new-pinpong-app/index.html',
		secondName: 'The PinPong Game',
		description: 'My training project via ReactJS. Welcome to play!',
		img: 'img/pinpong.png',
		list: ['React JS', 'Vanila JS', 'ES6']
	},

	theEarth: {
		name: 'Landing page "The Earth"',
		link: 'items/Landing/index.html',
		secondName: 'My diploma project of the courses "I am a Frontend Developer". The main point of the landing is opening of the alien supermarket.',
		description: 'Technology stack: Bootstrap 3, jQuery, Ajax, php script for sending e-mail. Check valid data. Adaptive design',
		img: 'img/theEarth.png',
		list: ['HTML5', 'CSS3', 'jQuery', ' Bootstrap 3', 'Ajax', 'PHP']
	},

	omega: {
		name: 'Колл центр Omega Contact',
		link: 'http://kley.ho.ua/Omega/',
		secondName: 'Landing Page Omega Contact.',
		description: 'Development of landing page for company Contact Omega.\n\t\t              A Mobile First approach . Adaptability.\n\t\t              Cross-browser compatibility: latest versions of IE, Safari, Chrome and FF;\n\t\t              mobile Safari (iOS 8) and Chrome (Android 5).\n\t\t              The project used libraries: jasny-bootstrap, font-awesome, equalHeights, mb.ytplayer.\n\t\t              BEM, using SCSS for CSS. Build via Grunt.',
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

	var htmlPanel = '<div class="panel-heading">\n\t\t\t\t\t\t    <h3 class="item__title panel-title">\n\t\t\t\t\t\t        <a class="item__link" href="' + link + '">' + name + '</a>\n\t\t\t\t\t\t    </h3>\n\t\t\t\t\t    </div>\n\t\t\t\t      \t<div class="panel-body">\n\t\t\t\t          <ul class="item__list"></ul>\n\t\t\t\t          <div class="item__description">\n\t\t\t\t            <p>' + secondName + '</p>\n\t\t\t\t            <p>' + description + '</p>\n\t\t\t\t          </div>\n\t\t\t\t          <div class="link">\n\t\t\t\t            <a class="item__link" href="' + link + '">\n\t\t\t\t            \t<img class="link__img" src="' + img + '" alt="site screen">\n\t\t\t\t            </a>\n\t\t\t\t          </div>\n\t\t\t\t     \t</div>';

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
