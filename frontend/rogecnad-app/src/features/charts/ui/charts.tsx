import { Divider, Typography } from '@mui/material';
import TrackCard from '@/entities/track/ui/track-card/track-card';
import './charts.sass';

const mockData = [
	{
		id: '1',
		action: 'star',
		image: 'pyala_fin.jpg',
		title: 'Пыяла',
		author: 'Аигел',
		time: '3:30',
	},
	{
		id: '2',
		action: 'up',
		image: 'pyala_fin.jpg',
		title: 'Пыяла',
		author: 'Аигел',
		time: '3:30',
	},
	{
		id: '3',
		action: 'down',
		image: 'pyala_fin.jpg',
		title: 'Пыяла',
		author: 'Аигел',
		time: '3:30',
	},
	{
		id: '4',
		action: 'default',
		image: 'pyala_fin.jpg',
		title: 'Пыяла',
		author: 'Аигел',
		time: '3:30',
	},
	{
		id: '5',
		action: 'up',
		image: 'pyala_fin.jpg',
		title: 'Пыяла',
		author: 'Аигел',
		time: '3:30',
	},
	{
		id: '6',
		action: 'up',
		image: 'pyala_fin.jpg',
		title: 'Пыяла',
		author: 'Аигел',
		time: '3:30',
	},
	{
		id: '7',
		action: 'down',
		image: 'pyala_fin.jpg',
		title: 'Пыяла',
		author: 'Аигел',
		time: '3:30',
	},
	{
		id: '8',
		action: 'default',
		image: 'pyala_fin.jpg',
		title: 'Пыяла',
		author: 'Аигел',
		time: '3:30',
	},
];

function Charts() {
	return (
		<div className='charts_container'>
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
				Чарты
			</Typography>
			<Divider
				variant='middle'
				sx={{
					height: '5px',
					backgroundColor: 'rgba(118, 37, 66, 1)',
				}}
			/>
			<div className='charts_track-list'>
				{mockData.map((data) => (
					<TrackCard
						id={data.id}
						action={data.action}
						author={data.author}
						time={data.time}
						image={data.image}
						title={data.title}
						key={data.id}
					/>
				))}
			</div>
		</div>
	);
}

export default Charts;
