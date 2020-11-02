import React, { useEffect, useState } from 'react';
import { Switch, Route, } from "react-router-dom";

import Home from "./Pages/Home";
import BlogPosts from './Pages/BlogPosts';
import api from "./Services/callApis";

function App() {
	const [articles, setArticles] = useState([]);


	const getPosts = async () => {
		const data = await api.getPostsMedium();
		setArticles(data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (


		<div className="main-app">
			<Switch>
				<Route exact path='/'>
					<Home articles={articles.slice(0, 3)} />
				</Route>
				<Route path="/blog">

					<BlogPosts articles={articles} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
