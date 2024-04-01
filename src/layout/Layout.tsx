import { Component } from 'react';
import { Link, Stack, Drawer } from '@mui/material';
import { Outlet } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import ListContent from './components/ListContent';

type LayoutState = {
	open: boolean;
};

export default class Layout extends Component {
	state: LayoutState = {
		open: false,
	};

	handleModal = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;

		return (
			<>
				<Stack className='nav'>
					<Stack className='nav_left'>
						<Link className='nav_left_link' href='/'>
							Jason
						</Link>
					</Stack>
					<Stack className='nav_right'>
						<ListContent styleList={'nav_right_ul'} />
						<MenuIcon className='nav_right_burger' onClick={this.handleModal} />
					</Stack>
				</Stack>
				<Drawer anchor='top' open={open} onClose={this.handleModal}>
					<ListContent styleList={'style.nav_right_ul_drawer'} />
				</Drawer>
				<Outlet />
			</>
		);
	}
}
