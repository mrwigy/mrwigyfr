import { Component } from 'react';
import { Stack, Typography, CardMedia } from '@mui/material';

export default class Header extends Component {
	render() {
		return (
			<Stack className='header'>
				<Stack className='header_container'>
					<Stack className='header_container_logo'>
						<CardMedia className='header_container_logo_img' component='img' image='/img/logo.png' alt='logo' />
						<Stack className='header_container_logo_shape'></Stack>
					</Stack>
					<Stack className='header_container_text'>
						<Typography variant='h1' className='header_container_text_h1'>
							Hi, I'm Wigy
						</Typography>
						<Typography variant='h2' className='header_container_text_h2'>
							FullStack Developer
						</Typography>
						<Typography className='header_container_text_p'>
							I'm a full-stack developer focused on creating exceptional digital experiences that are fast, accessible, visually appealing and responsive. If you'd like to get started on a web project, contact me
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		);
	}
}
