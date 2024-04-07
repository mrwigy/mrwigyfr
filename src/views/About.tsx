import { Component } from 'react';
import { Stack, Typography, CardMedia } from '@mui/material';

type AboutState = {
	numProjects: number;
	numTechnologies: number;
};

export default class About extends Component<any, AboutState> {
	constructor(props: any) {
		super(props);

		this.state = {
			numProjects: 0,
			numTechnologies: 0,
		};
	}

	currentYear: number = new Date().getFullYear() - 2021;
	componentDidMount(): void {
		fetch('./data/projects.json')
			.then((res) => res.json())
			.then((data) => this.setState({ numProjects: data.length }));

		fetch('./data/skills.json')
			.then((res) => res.json())
			.then((data) => this.setState({ numTechnologies: data.length }));
	}

	render() {
		const { numProjects, numTechnologies } = this.state;

		return (
			<Stack className='about'>
				<Stack className='about_left'>
					<CardMedia className='about_left_img' component='img' image='/img/1656940853.gif' />
				</Stack>
				<Stack className='about_right'>
					<Stack>
						<Typography className='about_right_top_typo'>Hello, I'm Wigy, developer and video game enthusiast. If you'd like to entrust me with the development of your project, don't hesitate to contact me :)</Typography>
					</Stack>
					<Stack className='about_right_center'>
						<Stack className='about_right_center_card'>
							<Stack className='about_right_center_card_top'>
								<Typography className='about_right_center_card_top_typo'>{numProjects}</Typography>
							</Stack>
							<Stack className='about_right_center_card_body'>
								<Typography className='about_right_center_card_body_typo'>Completed projects</Typography>
							</Stack>
						</Stack>
						<Stack className='about_right_center_card'>
							<Stack className='about_right_center_card_top'>
								<Typography className='about_right_center_card_top_typo'>{numTechnologies}</Typography>
							</Stack>
							<Stack className='about_right_center_card_body'>
								<Typography className='about_right_center_card_body_typo'>Technologies used</Typography>
							</Stack>
						</Stack>
						<Stack className='about_right_center_card'>
							<Stack className='about_right_center_card_top'>
								<Typography className='about_right_center_card_top_typo'>{this.currentYear}</Typography>
							</Stack>
							<Stack className='about_right_center_card_body'>
								<Typography className='about_right_center_card_body_typo'>Years of experience</Typography>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		);
	}
}
