const obj = {
	worldmap:{
		name:'React-Redux-World-Map-Component',
		link:'items/map/',
		secondName: `The chart component that showing analysis of the data`,
		description:`Project based on React/Redux. <br>
					 Requirements: Show map of the world and the cities with population more than 500 000 by default.<br>
					 Also, the component must have a field for filtering. User inputted value of population and we can see markers<br>
					 of the cities where population more or equal this value`,
		img: 'img/map.png',
		list:['React JS', 'Redux', 'ES6', 'd3-geo API']
	},
	chart:{
		name:'React-Redux-Chart-Component',
		link:'items/charts/',
		secondName: `The chart component that showing analysis of the data`,
		description:`Project based on React/Redux. <br>
					 Requirements: The slider will give you the number of days
					 for which we need to show the analysis for. When we click on the buttons,<br>
					 it will enable/disable the respective lines. For the sake of this task, you
					 can assume static data.`,
		img: 'img/chart.png',
		list:['React JS', 'Redux', 'WebPack', 'Vanilla JS', 'ES6', 'Charts']
	},
	table:{
		name:'React-Redux-Table-Component',
		link:'items/table/',
		secondName: `The table component with filtering, sorting, paging and acync functions`,
		description:`Project via React/Redux/Routing. <br>
					 Requirements: To write a table component which fetching data and
					 building the table. Table should have additional abilities for users like sorting,
					 filtering and pagination. <br>
					 When the user enters on the page he selects the dataset: small, large or own.
					 Then data is loaded from the server and according to the data is constructed the table.</br>
					 The user can click on the table line and see information in a block under the table`,
		img: 'img/table.png',
		list:['React JS', 'Redux', 'Fetch API', 'WebPack', 'Vanilla JS', 'ES6']
	},

	Schedule: {
		name: 'React App - Schedule Time Sheet',
		link: 'items/Schedule/index.html',
		secondName: 'Time Sheet. A component that will draw a weekly cycle' ,
		description: `Project via ReactJS.
					  Requirements: To write a component that will draw a weekly
					  cycle (calendar for the week).
					Input data JSON
		<br><code>{<br>
		 "mo": [
		      {
		        "bt": 240,
		        "et": 779
		      }
		 ],<br>
		 "tu": [
		 ],<br>
		 "we": [
		 ],<br>
		 "th": [
		   {
		  "bt": 240,
		        "et": 779
		   },
		   {
		  "bt": 1140,
		        "et": 1319
		   }
		 ],<br>
		 "fr": [
		   {
		  "bt": 660,
		        "et": 1019
		   }
		 ],<br>
		 "sa": [
		      {
		        "bt": 0,
		        "et": 1439
		      }
		    ],<br>
		 "su": []<br>
		}</code> <br>
		The interval of the one cell is one hour. In JSON file pass 59 minutes. Sample:
		Interval of hours 1:00 to 2:00 = 60 to 119
		Minute of the all day (0 - 1439).
		Also, the component must be clickable, that is to give the user the opportunity to select the desired interval
		(in this case are hours) and return json file in the same form as the input data(based on of the interval what
		selected by user). The selected cell is a darker color, than non-selected cell. Should be a possible to select
		the desired range holding the left button of the mouse. Selected range should become dark color.
		When we toggle click on the column "all day" all cells of the interval should become selected or non-selected.
		<mark>Output object you can see in console</mark>`,
		img: 'img/Schedule.png',
		list: ['React JS', 'Redux', 'WebPack', 'Vanilla JS', 'ES6']
	},
	starwars:{
		name:'List of Star-Wars Personages',
		link:'items/plastic-jam/',
		secondName: `Using SWAPI`,
		description:`The SPA via React/Redux. <br>
					 Requirements: To write aa test site with a list of the Star Wars personages
					 from this https://swapi.co.
					 1. use any template;
					 2.add checkbox “like” to every row in your list.
					 Checkbox should save its state after page reloading;
					 3. add animation (on your own);
					 4. pass the validators’ tests without mistakes;
					 5.deploy to any server;`,
		img: '',
		list:['React JS', 'Redux', 'Fetch API', 'WebPack', 'Vanilla JS', 'ES6']
	},
	Gallery:{
		name:'The Gallery',
		link:'items/Gallery/',
		secondName: ``,
		description:`Project via ReactJS. <br>
					 Requirements: To write a component using  fetch() to get data and
					 show the gallery of pictures. Press any picture and show selected picture using
					 react-routing.<br>
					 This project was built via React-Native too. You can see on my Github page`,
		img: 'img/gallery.gif',
		list:['React JS', 'Redux', 'Fetch API', 'React-Routing', 'WebPack', 'Vanilla JS', 'ES6']
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






