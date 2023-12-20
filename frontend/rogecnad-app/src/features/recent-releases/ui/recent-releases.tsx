import { Divider, Typography } from '@mui/material';
import AlbumPreview from '@/entities/album/ui/album-preview/album-preview';
import './recent-releases.sass';

const mockData = [
	{
		id: '1',
		albumId: 'soap_bubbles',
		image: 'soap_bubbles.png',
		title: 'Мыльные пузыри',
		author: 'алёна швец.',
		fullTime: '3:30',
	},
	{
		id: 2,
		albumId: 'soap_bubbles',
		image: 'soap_bubbles.png',
		title: 'Мыльные пузыри',
		author: 'алёна швец.',
		fullTime: '3:30',
	},
	{
		id: 3,
		albumId: 'soap_bubbles',
		image: 'soap_bubbles.png',
		title: 'Мыльные пузыри',
		author: 'алёна швец.',
		fullTime: '3:30',
	},
	{
		id: 4,
		albumId: 'soap_bubbles',
		image: 'soap_bubbles.png',
		title: 'Мыльные пузыри',
		author: 'алёна швец.',
		fullTime: '3:30',
	},
	{
		id: 5,
		albumId: 'soap_bubbles',
		image: 'soap_bubbles.png',
		title: 'Мыльные пузыри',
		author: 'алёна швец.',
		fullTime: '3:30',
	},
];

function RecentReleases() {
	return (
		<div className='recent-releases_container'>
			<div className='recent-releases_header'>
				<Typography
					variant='h3'
					sx={{
						flexGrow: 1,
						color: 'whitesmoke',
						fontFamily: 'Oswald',
						paddingBottom: 1,
						textAlign: 'center',
					}}
				>
					Недавно вышедшие
				</Typography>
				<Divider
					variant='middle'
					sx={{
						height: '5px',
						backgroundColor: 'rgba(118, 37, 66, 1)',
					}}
				/>
			</div>
			<div className='recent-releases_list'>
				{mockData.map((data) => (
					<AlbumPreview
						key={data.id}
						image={data.image}
						title={data.title}
						author={data.author}
						fullTime={data.fullTime}
						albumId={data.albumId}
					/>
				))}
			</div>
		</div>
	);
}

export default RecentReleases;
