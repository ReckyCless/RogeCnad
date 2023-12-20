import { Divider, IconButton, Typography } from '@mui/material';
import './album-page.sass';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CustomInput } from '@/shared/ui';

const mockData = {
	albumID: 'soap_bubbles',
	image: 'soap_bubbles.png',
	author: 'алёна швец',
	title: 'Cлёзы пахнут ванилью и морем',
	trackCount: 7,
	fullTime: '50 мин',
	tracks: [
		{
			trackID: 1,
			title: 'Cлёзы пахнут ванилью и морем',
			image: 'soap_bubbles.png',
			author: 'алёна швец.',
			listeners: '321315',
			duration: '9999:00',
		},
		{
			trackID: 2,
			title: 'Cлёзы пахнут ванилью и морем',
			image: 'soap_bubbles.png',
			author: 'алёна швец.',
			listeners: '1156',
			duration: '9999:00',
		},
		{
			trackID: 3,
			title: 'Cлёзы пахнут ванилью и морем',
			image: 'soap_bubbles.png',
			author: 'алёна швец.',
			listeners: '517',
			duration: '9999:00',
		},
		{
			trackID: 4,
			title: 'Cлёзы пахнут ванилью и морем',
			image: 'soap_bubbles.png',
			author: 'алёна швец.',
			listeners: '155',
			duration: '9999:00',
		},
		{
			trackID: 5,
			title: 'Cлёзы пахнут ванилью и морем',
			image: 'soap_bubbles.png',
			author: 'алёна швец.',
			listeners: '113',
			duration: '9999:00',
		},
		{
			trackID: 6,
			title: 'Cлёзы пахнут ванилью и морем',
			image: 'soap_bubbles.png',
			author: 'алёна швец.',
			listeners: '125',
			duration: '9999:00',
		},
		{
			trackID: 7,
			title: 'Cлёзы пахнут ванилью и морем',
			image: 'soap_bubbles.png',
			author: 'алёна швец.',
			listeners: '65',
			duration: '9999:00',
		},
	],
};

export function AlbumPage() {
	return (
		<div className='album-page_container'>
			<div className='album-page_header'>
				<div className='album-page_header-image'>
					<img
						src={mockData.image}
						style={{
							width: '250px',
							height: '250px',
							objectFit: 'contain',
						}}
						alt=''
					/>
				</div>
				<div className='album-page_header-body'>
					<div className='album-page_header-body-type'>
						<Typography
							variant='h6'
							sx={{
								color: '#808080',
								fontFamily: 'Oswald',
								display: 'flex',
							}}
						>
							Альбом
						</Typography>
					</div>
					<div className='album-page_header-body-title'>
						<Typography
							variant='h4'
							sx={{
								color: '#FFF',
								fontFamily: 'Oswald',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							{mockData.title}
						</Typography>
					</div>
					<div className='album-page_header-body-description'>
						<div className='album-page_header-body-description_avatar'>
							<AccountCircleIcon
								fontSize='large'
								sx={{
									color: '#762542',
									fill: '#762542',
									width: 60,
									height: 60,
								}}
							/>
						</div>
						<div className='album-page_header-bottom-body-description_track-count'>
							<Typography
								variant='h6'
								sx={{
									color: '#808080',
									fontFamily: 'Oswald',
									display: 'flex',
								}}
							>
								<p style={{ textTransform: 'uppercase' }}>
									{mockData.author}
								</p>
								<p
									style={{
										color: '#762542',
										padding: '0 10px',
									}}
								>
									|
								</p>
								{mockData.trackCount} треков,{' '}
								{mockData.fullTime} мин.
							</Typography>
						</div>
					</div>
				</div>
			</div>
			<Divider
				variant='fullWidth'
				sx={{
					height: '5px',
					backgroundColor: 'rgba(118, 37, 66, 1)',
				}}
			/>

			<div className='album-page_body'>
				<div className='album-page_body-actions'>
					<div className='album-page_body-actions-left'>
						<IconButton
							size='medium'
							sx={{
								color: '#762542',
								'&:hover': {
									backgroundColor: '#2B2B2B',
								},
							}}
						>
							<PlayArrowIcon
								fontSize='large'
								sx={{
									width: '50px',
									height: '50px',
								}}
							/>
						</IconButton>
						<IconButton
							size='medium'
							sx={{
								color: '#762542',
								'&:hover': {
									backgroundColor: '#2B2B2B',
								},
							}}
						>
							<ShuffleIcon
								fontSize='large'
								sx={{
									width: '50px',
									height: '50px',
								}}
							/>
						</IconButton>
						<IconButton
							size='medium'
							sx={{
								color: '#762542',
								'&:hover': {
									backgroundColor: '#2B2B2B',
								},
							}}
						>
							<FavoriteBorderIcon
								fontSize='large'
								sx={{
									width: '50px',
									height: '50px',
								}}
							/>
						</IconButton>
					</div>
					<div className='album-page_body-actions-right'>
						<CustomInput
							type='search'
							value=''
							onChange={() => {
								console.log('search');
							}}
							placeholder='Поиск...'
						/>
					</div>
				</div>
				<div className='album-page_body-table'>
					<div className='album-page_body-table_header'>
						<div
							style={{
								color: '#808080',
								fontFamily: 'Oswald',
								fontSize: '18px',
							}}
							className='album-page_body-table-first'
						>
							#
						</div>
						<div
							style={{
								color: '#808080',
								fontFamily: 'Oswald',
								fontSize: '18px',
							}}
							className='album-page_body-table-second'
						>
							Название
						</div>
						<div
							style={{
								color: '#808080',
								fontFamily: 'Oswald',
								fontSize: '18px',
							}}
							className='album-page_body-table-third'
						>
							Прослушиваний
						</div>
						<div
							style={{
								color: '#808080',
								fontFamily: 'Oswald',
								fontSize: '18px',
							}}
							className='album-page_body-table-fourth'
						/>
						<div
							style={{
								color: '#808080',
								fontFamily: 'Oswald',
								fontSize: '18px',
							}}
							className='album-page_body-table-fifth'
						>
							Длительность
						</div>
					</div>

					<div className='album-page_body-table_body'>
						{mockData.tracks.map((track) => (
							<div
								key={track.trackID}
								className='album-page_body-table_body-track'
							>
								<div
									style={{
										color: '#808080',
										fontFamily: 'Oswald',
										fontSize: '18px',
									}}
									className='album-page_body-table-first'
								>
									{track.trackID}
								</div>
								<div
									style={{
										color: '#808080',
										fontFamily: 'Oswald',
										fontSize: '18px',
										display: 'flex',
									}}
									className='album-page_body-table-second'
								>
									<img
										src={track.image}
										style={{
											height: 50,
											width: 50,
											borderRadius: 10,
										}}
										alt=''
									/>
									<div
										style={{
											marginLeft: '10px',
										}}
									>
										<Typography
											variant='h6'
											sx={{
												color: '#FFF',
												fontFamily: 'Oswald',
												display: 'flex',
											}}
										>
											{track.title}
										</Typography>
										<Typography
											variant='body2'
											sx={{
												color: '#808080',
												fontFamily: 'Oswald',
												display: 'flex',
											}}
										>
											{track.author}
										</Typography>
									</div>
								</div>
								<div
									style={{
										color: '#808080',
										fontFamily: 'Oswald',
										fontSize: '18px',
									}}
									className='album-page_body-table-third'
								>
									{track.listeners}
								</div>
								<div
									style={{
										color: '#808080',
										fontFamily: 'Oswald',
										fontSize: '18px',
									}}
									className='album-page_body-table-fourth'
								>
									<IconButton
										size='small'
										sx={{
											backgroundColor: 'rgba(43,43,43,0)',
											color: '#762542',
											'&:hover': {
												backgroundColor: '#423a3a',
											},
										}}
									>
										<FavoriteBorderIcon fontSize='large' />
									</IconButton>
								</div>
								<div
									style={{
										color: '#808080',
										fontFamily: 'Oswald',
										fontSize: '18px',
									}}
									className='album-page_body-table-fifth'
								>
									{track.duration}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
