import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout/Layout';

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<HomePage />} />
						<Route path='/about' element={<AboutPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		);
	}
}
