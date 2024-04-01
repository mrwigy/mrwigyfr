import { Component } from 'react';
import { List, ListItem, Link } from '@mui/material';

type ListContentProps = {
	styleList: string;
};

export default class Layout extends Component<ListContentProps> {
	constructor(props: ListContentProps) {
		super(props);
	}
	render() {
		const { styleList } = this.props;

		return (
			<List className={styleList}>
				<ListItem className='nav_right_li'>
					<Link href='/'>Home</Link>
				</ListItem>
				<ListItem className='nav_right_li'>
					<Link href='/about'>Info</Link>
				</ListItem>
				<ListItem className='nav_right_li'>
					<Link href='/skills'>Skills</Link>
				</ListItem>
				<ListItem className='nav_right_li'>
					<Link href='/projects'>Projects</Link>
				</ListItem>
				<ListItem className='nav_right_li'>
					<Link href='/contact'>Contact</Link>
				</ListItem>
			</List>
		);
	}
}
