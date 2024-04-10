import { Component } from 'react';
import { Stack, Typography } from '@mui/material';

export default class Footer extends Component {
	render() {
		return (
			<Stack className='footer'>
				<Stack className='footer_container'>
					<Typography className='footer_container_text'>{new Date().getFullYear()} | Coded with ❤️️ by Mr__Wigy</Typography>
				</Stack>
			</Stack>
		);
	}
}
