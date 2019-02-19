import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Time from './time';


 const Board = ({ files }) => (
 		<section className="body">
 			<Header/>
 			<div className="board">
 				<div className="board-items">
 					{files.map( item => 
 						<>
	 						<List key={item.id} files={files} file={item}/>
	 					</>
 					)}
 				</div>
 			</div>
 		</section>
 	)

 const Header = () => (
 	<div className="container">
	 	<div className="heading">
	 		<div className="icon"><i className="fab fa-hacker-news-square"></i></div>
	 		<div className="title">
	 			<h4>Hacker News</h4> 
	 			<ul className="menu">
		 			<li>new</li>
		 			<li>threads
		 			</li>
		 			<li>comments</li>
		 			<li>show</li>
		 			<li>ask</li>
		 			<li>jobs</li>
		 			<li>submit</li>
	 			</ul>
	 		</div>
	 	</div>
 	</div>
 	)

const Index = ({ files, file} ) => (
		<div className="index">
			{files.indexOf(file) + 1}.
		</div>
)

const List = ({ files, file }) => (
	<main className="list-item">
		<div className="top">
			<span className="numbering">
				<Index files={files} file={file}/>
				<i className="fas fa-sort-up"></i>
			</span>
			<span className="message"> {file.message}</span>
			<span className="site">({file.website})</span>
		</div>
		
		<div className="bottom">
			{file.points} points by {file.author} <Time time={file.timestamp}/> |
			flag | hide | {file.nocomments} comments | instapaper | save to pocket 
		</div>
	</main>
	) 



const news = [
	{
		id:0,
		message: "Why I'm suing the U.S Government",
		website: "bunniestudios.com",
		points: 1346,
		author: "ivank",
		timestamp: "2018-12-28 21:50:30",
		nocomments: 257
	},
	{
		id:1,
		message: "Zenzizenzizenzic",
		website: "wikipedia.org",
		points: 140,
		author: "vinchuco",
		timestamp: "2018-12-28 21:52:57",
		nocomments: 40
	},
	{
		id:2,
		message: "A practical security guide for web developers",
		website: "github.com",
		points: 72,
		author: "zianwar",
		timestamp: "2019-01-01 23:20:30",
		nocomments: 79
	},
	{
		id:3,
		message: "I got arrested in Kazakhstan and represented myself in court",
		website: "medium.com",
		points: 370,
		author: "drpp",
		timestamp: "2019-01-01 23:50:30",
		nocomments: 79
	},
	{
		id:4,
		message: "Sculpture of Housing Prices Ripping San Francisco Apart",
		website: "dougmccune.com",
		points: 254,
		author: "dougmccune",
		timestamp: "2019-01-01 18:45:30",
		nocomments: 149
	},
	{
		id:5,
		message: "Practical Guide to Bare Metal C++",
		website: "gitbooks.io",
		points: 175,
		author: "adamnemecek",
		timestamp: "2019-01-01 18:45:30",
		nocomments: 31
	},
	{
		id:6,
		message: "Superformula",
		website: "wikipedia.org",
		points: 77,
		author: "GuiA",
		timestamp: "2019-01-01 19:45:30",
		nocomments: 17
	},
	{
		id:7,
		message: "Police asked 3D printing lab to recreate a dead man's fingers to unlock phone",
		website: "fusion.net",
		points: 109,
		author: "theandrewballey",
		timestamp: "2019-01-01 20:30:10",
		nocomments: 57
	},
	{
		id:8,
		message: "Edward Snowden's New Research Aims to keep Smartphones from Betraying Owners",
		website: "theintercept.com",
		points: 190,
		author: "secfirstmd",
		timestamp: "2019-01-01 17:45:30",
		nocomments: 69
	},
	{
		id:9,
		message: "Assessing IBM's POWER8, Part 1: A Low Level Look at little Endian",
		website: "anandtech.com",
		points: 24,
		author: "tambourine",
		timestamp: "2019-01-01 22:00:30",
		nocomments: 1
	}
]




ReactDOM.render(<Board files={news} />, document.querySelector('#root'));


