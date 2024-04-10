import { Component } from 'react';
import { List, ListItem, Link, IconButton, Stack, Typography } from '@mui/material';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

type NavContentState = {
	inDrawer: boolean;
	darkMode: boolean;
};

export default class NavContent extends Component<any, NavContentState> {
	constructor(props: any) {
		super(props);

		this.state = {
			inDrawer: this.props.inDrawer,
			darkMode: false,
		};
	}

	handleDarkModeToggle = () => {
		const { darkMode } = this.state;

		if (darkMode) {
			this.setState({ darkMode: false });
			document.documentElement.style.setProperty('--rich-black', '#030712');
			document.documentElement.style.setProperty('--light-rich-black', '#111827');
			document.documentElement.style.setProperty('--gunmetal', '#1f2937');
			document.documentElement.style.setProperty('--charcoal', '#374151');
			document.documentElement.style.setProperty('--lavender', '#e5e7fa');
		} else {
			this.setState({ darkMode: true });
			document.documentElement.style.setProperty('--rich-black', '#FFFFFF');
			document.documentElement.style.setProperty('--light-rich-black', '#F9FAFB');
			document.documentElement.style.setProperty('--gunmetal', '#FFFFFF');
			document.documentElement.style.setProperty('--charcoal', '#E5E7EB');
			document.documentElement.style.setProperty('--lavender', '#111827');
		}
	};

	render() {
		const { inDrawer, darkMode } = this.state;

		return (
			<>
				<List className='nav_container_navigation_list'>
					<ListItem className='nav_container_navigation_list_item'>
						<Link className='nav_container_navigation_list_item_link' href='#about' aria-label='About'>
							About
						</Link>
					</ListItem>
					<ListItem className='nav_container_navigation_list_item'>
						<Link className='nav_container_navigation_list_item_link' href='#skills' aria-label='Skills'>
							Skills
						</Link>
					</ListItem>
					<ListItem className='nav_container_navigation_list_item'>
						<Link className='nav_container_navigation_list_item_link' href='#work' aria-label='Work'>
							Work
						</Link>
					</ListItem>
					<ListItem className='nav_container_navigation_list_item'>
						<Link className='nav_container_navigation_list_item_link' href='#contact' aria-label='Contact'>
							Contact
						</Link>
					</ListItem>
				</List>
				<Stack className='nav_container_navigation_divider'></Stack>
				<Stack className='nav_container_navigation_action'>
					{inDrawer ? (
						<Stack className='nav_container_drawer_bottom'>
							<Typography className='nav_container_drawer_bottom_typo'>Toggle Light/Dark Mode</Typography>
							<IconButton className='nav_container_navigation_action_button' aria-label='Toggle light/dark mode' onClick={this.handleDarkModeToggle}>
								{darkMode ? <BedtimeIcon className='nav_container_navigation_action_button_icon' /> : <WbSunnyIcon className='nav_container_navigation_action_button_icon' />}
							</IconButton>
						</Stack>
					) : (
						<IconButton className='nav_container_navigation_action_button' aria-label='Toggle light/dark mode' onClick={this.handleDarkModeToggle}>
							{darkMode ? <BedtimeIcon className='nav_container_navigation_action_button_icon' /> : <WbSunnyIcon className='nav_container_navigation_action_button_icon' />}
						</IconButton>
					)}
				</Stack>
			</>
		);
	}
}
