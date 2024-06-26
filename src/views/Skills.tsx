import { Component } from 'react';
import { CardMedia, Link, Stack, Typography } from '@mui/material';
import { SkillType } from '../vite-env';

type SkillsState = {
	skills: SkillType[];
};

export default class Skills extends Component<any, SkillsState> {
	constructor(props: any) {
		super(props);

		this.state = {
			skills: [],
		};
	}

	componentDidMount(): void {
		fetch('/data/skills.json')
			.then((res) => res.json())
			.then((data: SkillType[]) => {
				this.setState({ skills: data });
			});
	}

	render() {
		const { skills } = this.state;

		return (
			<Stack className='skills' id='skills'>
				<Stack className='skills_container'>
					<Stack className='skills_container_text'>
						<Typography className='skills_container_text_chip'>Skills</Typography>
						<Typography className='skills_container_text_title'>The skills, tools and technologies I am really good at:</Typography>
					</Stack>
					<Stack className='skills_container_cards'>
						{skills.map((skill: SkillType, index: number) => {
							return (
								<Stack className='skills_container_cards_item' key={index}>
									<Link href={skill.link} target='_blank' rel='noreferrer' className='skills_container_cards_item_link' aria-label={skill.name}>
										<CardMedia src={`img/${skill.icon}`} alt={skill.name} component='img' className='skills_container_cards_item_link_img' />
									</Link>
									<Typography className='skills_container_cards_item_title'>{skill.name}</Typography>
								</Stack>
							);
						})}
					</Stack>
				</Stack>
			</Stack>
		);
	}
}
