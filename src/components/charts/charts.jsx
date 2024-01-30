import { Divider, Typography } from '@mui/material';
import './charts.sass';
import TrackCard from '../track/track-card/track-card.jsx';
import { useGetChartsListQuery } from '../../store/actions/music/music.js';
import CircularProgress from '@mui/material/CircularProgress';

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
				<div
					style={{
						display: !data ? 'flex' : 'none',
						justifyContent: 'center',
					}}
				>
					{isLoading ? <CircularProgress /> : ''}
					{!isLoading && error ? (
						<Typography variant='body1' sx={{ color: 'red' }}>
							Ошибка соединения с сервером. Попробуйте позже :c
						</Typography>
					) : (
						''
					)}
				</div>
				{data &&
					data.trackList.map((track, index) => (
						<TrackCard
							id={index + 1}
							trackId={track.id}
							action='default'
							author={track.uploaderName}
							time={track.duration}
							image={track.trackCoverBytes}
							title={track.trackName}
							src={track.fishingLink}
							key={track.id}
							prevTrack={data.trackList[index - 1] ?? null}
							nextTrack={data.trackList[index + 1] ?? null}
						/>
					))}
			</div>
		</div>
	);
}

export default Charts;
