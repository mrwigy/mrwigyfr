import { Component } from 'react';
import { Stack, Typography, Link, CardMedia } from '@mui/material';

export default class Contact extends Component {
	render() {
		return (
			<Stack className='contact' id='contact'>
				<Stack className='contact_container'>
					<Stack className='contact_container_text'>
						<Typography className='contact_container_text_chip'>Contact</Typography>
						<Typography className='contact_container_text_title'>What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</Typography>
					</Stack>
					<Stack className='contact_container_cards'>
						<Link className='contact_container_cards_link' href='mailto:jasonfel1@outlook.be' target='_blank' aria-label='Email'>
							<CardMedia src='img/mail.png' alt='GitHub' component='img' className='contact_container_cards_link_img' />
						</Link>
						<Link className='contact_container_cards_link' href='https://discord.com/users/301505068962807808' target='_blank' aria-label='Discord'>
							<CardMedia src='img/discord.png' alt='GitHub' component='img' className='contact_container_cards_link_img' />
						</Link>
						<Link className='contact_container_cards_link' href='https://github.com/mrwigy' target='_blank' aria-label='GitHub'>
							<CardMedia src='img/github.png' alt='GitHub' component='img' className='contact_container_cards_link_img' />
						</Link>
					</Stack>
				</Stack>
			</Stack>
		);
	}
}
