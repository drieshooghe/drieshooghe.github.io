import { Component } from "react";

class NavBar extends Component {
	render() {
		return <ul className="flex w-full justify-center">
		<li className="flex mr-2">
			<a className="trans text-center block border border-white rounded-full py-2 px-4 hover:shadow-2xl text-white" href="https://github.com/drieshooghe" target="_blank">Github</a>
		</li>
		<li className="flex mr-2">
			<a className="trans text-center block border border-white rounded-full py-2 px-4 hover:shadow-2xl text-white" href="https://be.linkedin.com/in/drieshooghe" target="_blank">Linkedin</a>
		</li>
	</ul>
	}
}

export default NavBar;