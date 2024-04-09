import { Component } from 'react';
import { Stack, Typography } from '@mui/material';

export default class About extends Component {
	render() {
		return (
			<Stack className='about' id='about'>
				<Stack className='about_container'>
					<Stack className='about_container_chip'>
						<Typography className='about_container_chip_text'>About me</Typography>
					</Stack>
					<Stack className='about_container_text'>
						<Typography variant='h3' className='about_container_text_h3'>
							Curious about me? Here you have it:
						</Typography>
						<Typography className='about_container_text_typo'>
							I'm a passionate fullstack developer, specializing in javascript development (ReactJS & NodeJS). I'm enthusiastic about bringing the technical and visual aspects of digital products to life. I'm all about user
							experience, design and writing clear, readable, high-performance code.
						</Typography>
						<Typography className='about_container_text_typo'>
							I began my journey as a professional web developer in 2021, and since then I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Today, 3
							years after starting my journey as a web developer, I'm building cutting-edge web applications using technologies such as ReactJs, TypeScript, NodeJS, MUI and more.
						</Typography>
						<Typography className='about_container_text_typo'>I'm a progressive thinker and enjoy working on products from start to finish, from ideation to development.</Typography>
						<Typography className='about_container_text_typo'>
							When I'm not in developer mode, you can find me on or Steam, playing great games with close friends or enjoying my free time. You can join me on{' '}
							<a className='about_container_text_typo_a' href='https://discord.com/users/301505068962807808' target='_blank'>
								Discord
							</a>{' '}
							to talk about your projects, or follow me on{' '}
							<a className='about_container_text_typo_a' href='https://github.com/mrwigy' target='_blank'>
								GitHub.
							</a>
						</Typography>
						<Typography className='about_container_text_typo'>Finally, some quick bits about me.</Typography>
					</Stack>
				</Stack>
			</Stack>
		);
	}
}
