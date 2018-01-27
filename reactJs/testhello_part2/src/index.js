import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import TopNav from './component/nav/navbar.js';

import TopNavigationItem from './component/TopNavigationComponent.js';
import TopNavigationAddItem from './component/TopNavigationAddComponent.js';

import $ from 'jquery';


class TopNavigation extends React.Component{

	constructor(){
		super();

		this.chanagStatus = this.chanagStatus.bind(this);
		this.newsAdd = this.newsAdd.bind(this);
		this.addTask = this.addTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);

		this.updateTask = this.updateTask.bind(this);
		this.state = {
			names: ['Pankaj', 'Sudhir', 'Ramesh', 'Raju', 'Ganesh'],
			tasks: [{
				name: 'Butter Milk',
				completed:false 
			},{
				name: 'Buy Cheese',
				completed:false 
			},{
				name: 'Buy Bread',
				completed:false 
			},{
				name: 'Buy Vegitable',
				completed:false 
			},{
				name: 'Buy Bread',
				completed:false 
			}],
			currentTask: '',
			news: [
					{
					"status": "ok",
					"source": "bbc-news",
					"sortBy": "top",
					"articles": [{
						"author": "BBC News",
						"title": "Brexit 'could be model for Turkey'",
						"description": "Germany's foreign minister says a \"smart\" Brexit deal could be a model for Turkey and Ukraine.",
						"url": "http://www.bbc.co.uk/news/world-europe-42482873",
						"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/160E/production/_99364650_043562068-1.jpg",
						"publishedAt": "2017-12-26T11:13:50Z"
					}, {
						"author": "BBC News",
						"title": "UK frigate escorts Russian warship",
						"description": "The Royal Navy says HMS St Albans was called to monitor the Russian ship's activity near UK waters.",
						"url": "http://www.bbc.co.uk/news/uk-42481216",
						"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/14C22/production/_99362058_5255b345-d6af-4f6a-a21c-a806ea8194d2.jpg",
						"publishedAt": "2017-12-26T00:12:03Z"
					}, {
						"author": "BBC News",
						"title": "Liberians vote in delayed run-off poll",
						"description": "An ex-football star and a vice-president are vying to replace the woman who has been in power for 12 years.",
						"url": "http://www.bbc.co.uk/news/world-africa-42481278",
						"urlToImage": "https://ichef.bbci.co.uk/images/ic/1024x576/p05rv21y.jpg",
						"publishedAt": "2017-12-26T05:01:43Z"
					}, {
						"author": "BBC News",
						"title": "'Rocket Man' lands in Seoul",
						"description": "Meet the leading impersonator of North Korean leader Kim Jong-un.",
						"url": "http://www.bbc.co.uk/news/world-asia-42428718",
						"urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/D49F/production/_99313445_p05rprmd.jpg",
						"publishedAt": "2017-12-26T00:01:30Z"
					}, {
						"author": "BBC News",
						"title": "Egypt executes 15 over Sinai attacks",
						"description": "It is the biggest series of hangings since 2015 in Egypt, which is battling an insurgency.",
						"url": "http://www.bbc.co.uk/news/world-middle-east-42483537",
						"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/15EF6/production/_99364898_mediaitem99364897.jpg",
						"publishedAt": "2017-12-26T12:11:27Z"
					}, {
						"author": "BBC News",
						"title": "New clashes in Peru over Fujimori's pardon",
						"description": "Police clash with thousands protesting the pardoning of jailed ex-President Alberto Fujimori.",
						"url": "http://www.bbc.co.uk/news/world-latin-america-42481281",
						"urlToImage": "https://ichef.bbci.co.uk/images/ic/1024x576/p05s0w4f.jpg",
						"publishedAt": "2017-12-26T04:38:53Z"
					}, {
						"author": "BBC News",
						"title": "Hate group memorial to victim removed",
						"description": "Justine Damond was shot by a Somali-American police officer after reporting a suspected crime near her home.",
						"url": "http://www.bbc.co.uk/news/world-us-canada-42482921",
						"urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/EEAE/production/_97020116_mediaitem97020115.jpg",
						"publishedAt": "2017-12-26T10:36:43Z"
					}, {
						"author": "BBC Sport",
						"title": "Spurs 2-0 Saints - Kane breaks record",
						"description": "Kane breaks Shearer's record - listen on Radio 5 live plus text updates as Tottenham host Southampton in the first of eight Premier League matches on Boxing Day.",
						"url": "http://www.bbc.co.uk/sport/live/football/40956109",
						"urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-sport-opengraph/1.1.1/images/bbc-sport-logo.png",
						"publishedAt": "2017-12-26T13:13:09Z"
					}, {
						"author": "BBC News",
						"title": "Universities could face 'no-platform' fine",
						"description": "Minister Jo Johnson will warn in a Boxing Day speech that institutions have to protect free speech.",
						"url": "http://www.bbc.co.uk/news/education-42481329",
						"urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/5E99/production/_98471242_p05kwy9c.jpg",
						"publishedAt": "2017-12-26T02:43:41Z"
					}, {
						"author": "BBC News",
						"title": "Chinese activist jailed for eight years",
						"description": "Wu Gan, best known by the alias Super Vulgar Butcher, is known for mischievous online campaigns.",
						"url": "http://www.bbc.co.uk/news/world-asia-china-42482916",
						"urlToImage": "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/C03C/production/_97321294_image2.jpg",
						"publishedAt": "2017-12-26T07:29:08Z"
					}]
				}
			]
		}
	}

	newsAdd(){
		let that = this;  
		$.ajax({
			url: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=487d3a39170841f1ab33b73430da1c76',
			type: 'json',
			cache: false,
			success: function (data) {
				that.state.news.push(data)
			 	console.log(data)
			},
			error: function(xhr, status, response){
				console.log(status);
			}		
		})
	}
	updateTask(newVal){
		this.setState({
			currentTask: newVal.target.value
		})
	}

	addTask(evt){
		evt.preventDefault();
		let tasks = this.state.tasks;
		let currentTask = this.state.currentTask;

		tasks.push({
			name: currentTask,
			completed: false
		})

		this.setState({
			tasks:tasks,
			currentTask:''
		})
	}

	deleteTask(index){
		console.log(index);

		let tasks = this.state.tasks;
		tasks.splice(index, 1)

		this.setState(
		{
			tasks: tasks
		}
		)
	}

	chanagStatus(index){
		var tasks = this.state.tasks;
		var task = tasks[index];

		task.completed = !task.completed;

		this.setState({
			tasks: tasks
		})
	}
	render() {
		return (

				<section>
					<TopNav newsItem={this.state.news[0].articles} />
					<div className="container mt-30 pt-30">
									
						<TopNavigationAddItem 
							currentTask={this.state.currentTask}
							updateTask = {this.updateTask}
							addTask = {this.addTask}
						 />
						<ul>
							{
							this.state.tasks.map( (task, index) => {
							 	return <TopNavigationItem  
							 				clickHandler={this.chanagStatus}
							 				index={index}
							 				detail={task}
							 				key={index}
							 				deleteTask={this.deleteTask}
							 				/>
								})
							}
						</ul>
					</div>	
				</section>
			) 
		}
	}
ReactDom.render( <TopNavigation/> , document.getElementById('root'))