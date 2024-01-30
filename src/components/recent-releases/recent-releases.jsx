import { Divider, Typography } from '@mui/material';
import './recent-releases.sass';
import AlbumPreview from '../album/album-preview/album-preview.jsx';
import { useGetRecentReleasesAlbumsQuery } from '../../store/actions/music/music.js';
import CircularProgress from '@mui/material/CircularProgress';

function RecentReleases() {
	const { data, error, isLoading } = useGetRecentReleasesAlbumsQuery();
	console.log(data);
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
				{isLoading ? <CircularProgress /> : ''}
				{!isLoading && error ? (
					<Typography variant='body1' sx={{ color: 'red' }}>
						Ошибка соединения с сервером. Попробуйте позже :c
					</Typography>
				) : (
					''
				)}
				{data &&
					data.playlistsList.map((data) => (
						<AlbumPreview
							key={data.id}
							image={data.coverImage}
							title={data.playlistName}
							author={data.creatorName}
							fullTime={data.fullTime || '0:00'}
							albumId={data.id}
						/>
					))}
			</div>
		</div>
	);
}

export default RecentReleases;
