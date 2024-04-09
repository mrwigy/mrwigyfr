import { Component } from 'react';

import Nav from './views/Nav';
import Header from './views/Header';
import About from './views/About';
import Skills from './views/Skills';
import Work from './views/Work';

export default class App extends Component {
	render() {
		return (
			<>
				<Nav />
				<Header />
				<About />
				<Skills />
				<Work />
			</>
		);
	}
}
