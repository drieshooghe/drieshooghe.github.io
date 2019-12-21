import { Component } from 'react';
import Head from 'next/head';
import PageTitle from "./page-title";
import NavBar from "./navbar";

class App extends Component {
	render() {
		return <div>
			<Head>
				<title>Dries Hooghe</title>
				<link href="https://fonts.googleapis.com/css?family=Kulim+Park|Long+Cang&display=swap" rel="stylesheet"></link>
			</Head>
			<div className='app'>
				<article className="container flex flex-col w-full h-full justify-center items-center">
					<PageTitle/>
					<NavBar/>
				</article>
			</div>
		</div>;
	}
}

export default App
