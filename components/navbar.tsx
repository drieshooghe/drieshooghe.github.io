import { Component } from "react";

class NavBar extends Component {
	render() {
		return <section className="flex flex-col md:flex-row w-full justify-center">
		<div className="flex justify-center mb-4 md:mr-2 md:mb-0">
			<a className="trans text-center block w-40 md:w-auto border border-white rounded-full py-2 px-4 hover:shadow-2xl text-white" href="https://github.com/drieshooghe" target="_blank">Github</a>
		</div>
		<div className="flex justify-center mb-4 md:mr-2 md:mb-0">
			<a className="trans text-center block w-40 md:w-auto border border-white rounded-full py-2 px-4 hover:shadow-2xl text-white" href="https://be.linkedin.com/in/drieshooghe" target="_blank">Linkedin</a>
		</div>
	</section>
	}
}

export default NavBar;