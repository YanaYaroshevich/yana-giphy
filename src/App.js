import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import GifContainer from "./GifContainer/GifContainer";

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<GifContainer/>
			</div>
		);
	}
}

export default App;
