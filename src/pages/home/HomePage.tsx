import { Component } from 'react';
import { Stack, Typography, List, ListItem, Link, CardMedia } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

export default class HomePage extends Component {
	render() {
		return (
			<Stack className='header'>
				<Stack className='header_left'>
					<List className='header_left_list'>
						<ListItem className='header_left_list_item'>
							<Link className='header_left_list_item_link' href='/' target='_blank' rel='noopener'>
								<GitHubIcon className='header_left_list_item_link_icon' />
							</Link>
						</ListItem>
						<ListItem className='header_left_list_item'>
							<Link className='header_left_list_item_link' href='/' target='_blank' rel='noopener'>
								<LinkedInIcon className='header_left_list_item_link_icon' />
							</Link>
						</ListItem>
						<ListItem className='header_left_list_item'>
							<Link className='header_left_list_item_link' href='/' target='_blank' rel='noopener'>
								<CodeIcon className='header_left_list_item_link_icon' />
							</Link>
						</ListItem>
					</List>
				</Stack>
				<Stack className='header_center'>
					<Typography variant='h1' className='header_center_h1'>
						<Typewriter words={["Hi, I'm Wigy,"]} loop={1} />
					</Typography>
					<Typography variant='h2' className='header_center_h2'>
						<Typewriter words={['FullStack Developer']} loop={1} />
					</Typography>
					<Typography className='header_center_typo'>
						<Typewriter words={['A tech enthusiast for many years']} loop={1} />
					</Typography>
					<Link href='/contact' className='header_center_link'>
						Contact me
					</Link>
				</Stack>
				<Stack className='header_right'>
					<CardMedia className='header_right_img' component='img' image='./assets/img/1656940565.gif' alt='Developer GIF' />
				</Stack>
			</Stack>
		);
	}
}
