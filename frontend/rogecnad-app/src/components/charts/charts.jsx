import { Divider, Typography } from '@mui/material';
import './charts.sass';
import TrackCard from '../track/track-card/track-card.jsx';
import { useDispatch } from 'react-redux';
import { useGetChartsListQuery } from '../../store/actions/music/music.js';
import CircularProgress from '@mui/material/CircularProgress';

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
	const { data, error, isLoading } = useGetChartsListQuery();

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
				<div style={{display:'flex', justifyContent:'center'}}>
					{isLoading ? <CircularProgress /> : ''}
					{!isLoading && error ? <Typography variant='body1' sx={{color: 'red'}}>Ошибка соединения с сервером. Попробуйте позже :c</Typography> : ''}
				</div>
				{data && data.trackList.map((track, index) => (
					<TrackCard
						id={index + 1}
						action='default'
						author={track.uploaderName}
						time={track.duration}
						image={track.trackCoverBytes}
						title={track.trackName}
						src={track.fishingLink}
						key={track.id}
					/>
				))}
			</div>
		</div>
	);
}

export default Charts;
