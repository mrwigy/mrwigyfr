import { Component } from 'react';
import { CardMedia, Stack, Typography } from '@mui/material';

type SkillsState = {
	skills: [];
};

export default class Skills extends Component<any, SkillsState> {
	constructor(props: any) {
		super(props);

		this.state = {
			skills: [],
		};
	}

	componentDidMount(): void {
		fetch('./data/skills.json')
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					skills: data,
				});
			});
	}

	render() {
		const { skills } = this.state;
		console.log(skills);

		return (
			<Stack className='skills'>
				<Typography variant='h3' className='skills_title'>
					Technical skills
				</Typography>
				<Stack className='skills_grid'>
					{skills.map((skill: any) => {
						return (
							<Stack className='skills_grid_card' id='item1'>
								<CardMedia className='skills_grid_card_img' component='img' image={`/img/${skill.icon}`} />
								<Typography className='skills_grid_card_typo'>{skill.name}</Typography>
							</Stack>
						);
					})}
				</Stack>
			</Stack>
		);
	}
}
