import { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Stack, Link, Typography, CardMedia } from '@mui/material';

import { SkillType } from '../vite-env';

type HeaderState = {
	tech: string[];
};

export default class Header extends Component<any, HeaderState> {
	constructor(props: any) {
		super(props);

		this.state = {
			tech: [],
		};
	}

	componentDidMount(): void {
		fetch('/data/skills.json')
			.then((res) => res.json())
			.then((data) => {
				const tech = data.map((skill: SkillType) => skill.name);
				this.setState({
					tech,
				});
			});
	}

	render() {
		const { tech } = this.state;

		return (
			<Stack className='header'>
				<Stack className='header_left'>
					<Typography variant='h1' className='header_left_h1'>
						<Typewriter words={["Hi, I'm Test,"]} loop={1} />
					</Typography>
					<Typography variant='h2' className='header_left_h2'>
						<Typewriter words={['FullStack Developer']} loop={1} />
					</Typography>
					<Typography className='header_left_typo'>
						I work with{' '}
						<span>
							<Typewriter words={tech} loop cursor />
						</span>
					</Typography>
					<Link href='/contact' className='header_left_link'>
						Contact me
					</Link>
				</Stack>
				<Stack className='header_right'>
					<CardMedia className='header_right_img' component='img' image='/img/1656940565.gif' alt='Developer GIF' />
				</Stack>
			</Stack>
		);
	}
}
