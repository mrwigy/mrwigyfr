import { Component } from 'react';
import { Stack, Typography, TextField, Button } from '@mui/material';

export default class Contact extends Component {
	render() {
		return (
			<Stack sx={style.contact} direction='row'>
				<Stack sx={style.contact_left}>
					<Stack sx={style.contact_left_box} direction='row'>
						<Stack>
							<LinkedInIcon sx={style.contact_left_box_icon} />
						</Stack>
						<Stack>
							<Typography sx={style.contact_left_box_content_typography}>Ajoutez-moi</Typography>
							<Typography>Jason Felgenhauer</Typography>
						</Stack>
					</Stack>
					<Stack sx={style.contact_left_box} direction='row'>
						<Stack>
							<MarkEmailReadIcon sx={style.contact_left_box_icon} />
						</Stack>
						<Stack>
							<Typography sx={style.contact_left_box_content_typography}>Email</Typography>
							<Typography>jasonfel1@outlook.be</Typography>
						</Stack>
					</Stack>
					<Stack sx={style.contact_left_box} direction='row'>
						<Stack>
							<LocationOnIcon sx={style.contact_left_box_icon} />
						</Stack>
						<Stack>
							<Typography sx={style.contact_left_box_content_typography}>Location</Typography>
							<Typography>Mons, Belgique</Typography>
						</Stack>
					</Stack>
				</Stack>
				<Stack sx={style.contact_right}>
					<Stack>
						<form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column' }}>
							<TextField sx={style.contact_right_input} name='name' placeholder='Nom' />
							<TextField sx={style.contact_right_input} name='email' placeholder='email' />
							<TextField sx={style.contact_right_input} name='subject' placeholder='objet' />
							<TextField sx={style.contact_right_input} name='message' placeholder='message' multiline rows={4} />
							<Button sx={style.contact_right_button} type='submit'>
								Envoyez votre message
							</Button>
						</form>
					</Stack>
				</Stack>
			</Stack>
		);
	}
}
