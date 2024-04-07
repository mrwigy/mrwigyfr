import { Component } from 'react';
import { Link, Stack, IconButton, Drawer, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import NavContent from './components/NavContent';

type NavState = {
	open: boolean;
};

export default class Nav extends Component<any, NavState> {
	constructor(props: any) {
		super(props);

		this.state = {
			open: false,
		};
	}

	handleModal = (): void => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;

		return (
			<Stack className='nav'>
				<Stack className='nav_container'>
					<Link className='nav_container_link' href='/'>
						{'<WIGY />'}
					</Link>
					<Stack className='nav_container_navigation'>
						<NavContent inDrawer={false} />
					</Stack>
					<Stack className='nav_container_burger'>
						<IconButton className='nav_container_burger_button' onClick={this.handleModal}>
							<MenuIcon className='nav_container_burger_button_icon' />
						</IconButton>
					</Stack>
					<Drawer className='nav_container_drawer' anchor='right' open={open} onClose={this.handleModal}>
						<Stack className='nav_container_drawer_top'>
							<Typography className='nav_container_drawer_top_typo'>{'<WIGY />'}</Typography>
							<IconButton className='nav_container_drawer_top_button' onClick={this.handleModal}>
								<CloseIcon className='nav_container_drawer_top_button_icon' />
							</IconButton>
						</Stack>
						<NavContent inDrawer={true} />
					</Drawer>
				</Stack>
			</Stack>
		);
	}
}
