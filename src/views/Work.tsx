import { Component } from 'react';
import { Button, CardMedia, IconButton, Stack, Typography } from '@mui/material';

import LaunchIcon from '@mui/icons-material/Launch';
import { ProjectType } from '../vite-env';

type WorkState = {
	projects: Array<{
		name: string;
		description: string;
		technologies: Array<string>;
		image: string;
		link: string;
		source: string;
	}>;
	load: number;
};

export default class Work extends Component<any, WorkState> {
	constructor(props: any) {
		super(props);

		this.state = {
			projects: [],
			load: 3,
		};
	}

	componentDidMount(): void {
		fetch('/data/projects.json')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ projects: data });
			});
	}

	render() {
		const { projects, load } = this.state;

		return (
			<Stack className='work' id='work'>
				<Stack className='work_container'>
					<Stack className='work_container_text'>
						<Typography className='work_container_text_chip'>Work</Typography>
						<Typography className='work_container_text_title'>Some of the projects I've built:</Typography>
					</Stack>
					<Stack className='work_container_cards'>
						{projects.slice(0, load).map((project: ProjectType, index: number) => {
							return (
								<Stack className={`work_container_cards_item ${index % 2 !== 0 && 'reverse'}`} key={index}>
									<Stack className='work_container_cards_item_media'>
										<a href={project.link} target='_blank'>
											<CardMedia src={`projectImg/${project.image}`} alt={project.description} component='img' className='work_container_cards_item_media_img' />
										</a>
									</Stack>
									<Stack className='work_container_cards_item_text'>
										<Typography className='work_container_cards_item_text_h1'>{project.name}</Typography>
										<Typography className='work_container_cards_item_text_desc'>{project.description.length > 200 ? project.description.slice(0, 200) + '...' : project.description}</Typography>
										<Stack className='work_container_cards_item_text_tech'>
											{project.technologies.map((tech: string) => {
												return <Typography className='work_container_cards_item_text_tech_typo'>{tech}</Typography>;
											})}
										</Stack>
										<Stack className='work_container_cards_item_link'>
											<IconButton className='work_container_cards_item_link_button' href={project.source ? project.source : project.link} target='_blank'>
												<LaunchIcon className='work_container_cards_item_link_button_icon' />
											</IconButton>
										</Stack>
									</Stack>
								</Stack>
							);
						})}
					</Stack>
					{projects.length > load && (
						<Stack className='work_container_load'>
							<Button
								className='work_container_load_button'
								onClick={() => {
									this.setState({ load: load + 3 });
								}}
							>
								Load More
							</Button>
						</Stack>
					)}
				</Stack>
			</Stack>
		);
	}
}
