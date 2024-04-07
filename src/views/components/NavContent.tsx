import { Component } from 'react';
import { List, ListItem, Link, IconButton, Stack, Typography } from '@mui/material';

import WbSunnyIcon from '@mui/icons-material/WbSunny';

type NavContentState = {
	inDrawer: boolean;
};

export default class NavContent extends Component<any, NavContentState> {
	constructor(props: any) {
		super(props);

		this.state = {
			inDrawer: this.props.inDrawer,
		};
	}

	render() {
		const { inDrawer } = this.state;

		return (
			<>
				<List className='nav_container_navigation_list'>
					<ListItem className='nav_container_navigation_list_item'>
						<Link className='nav_container_navigation_list_item_link' href='/'>
							About
						</Link>
					</ListItem>
					<ListItem className='nav_container_navigation_list_item'>
						<Link className='nav_container_navigation_list_item_link' href='/'>
							Work
						</Link>
					</ListItem>
					<ListItem className='nav_container_navigation_list_item'>
						<Link className='nav_container_navigation_list_item_link' href='/'>
							Testimonials
						</Link>
					</ListItem>
					<ListItem className='nav_container_navigation_list_item'>
						<Link className='nav_container_navigation_list_item_link' href='/'>
							Contact
						</Link>
					</ListItem>
				</List>
				<Stack className='nav_container_navigation_divider'></Stack>
				<Stack className='nav_container_navigation_action'>
					{inDrawer ? (
						<Stack className='nav_container_drawer_bottom'>
							<Typography className='nav_container_drawer_bottom_typo'>Toggle Light/Dark Mode</Typography>
							<IconButton className='nav_container_navigation_action_button'>
								<WbSunnyIcon className='nav_container_navigation_action_button_icon' />
							</IconButton>
						</Stack>
					) : (
						<IconButton className='nav_container_navigation_action_button'>
							<WbSunnyIcon className='nav_container_navigation_action_button_icon' />
						</IconButton>
					)}
				</Stack>
			</>
		);
	}
}
