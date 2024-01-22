import StarIcon from '@mui/icons-material/Star';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import './track-card.sass';
import { IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import secondsToMMSS from '../../../utils/secondsToMMSS.js';
import { useDispatch, useSelector } from 'react-redux';
import PauseIcon from '@mui/icons-material/Pause';
import {
	setCurrentTrack,
	setPlaying,
} from '../../../store/reducers/audio/audio.slice.js';

function TrackCard({ id, action, image, title, author, time, src }) {
	const dispatch = useDispatch();
	const [isShown, setIsShown] = useState(false);
	const formattedDuration = secondsToMMSS(time);
	const audioData = useSelector((store) => store.audio);
	const { currentTrack, isPlaying } = audioData;

	const handleToggleAudio = (track) => {
		if (currentTrack.id !== track.id) {
			dispatch(
				setCurrentTrack({
					id: id,
					src: src,
					image: image,
					title: title,
					author: author,
					time: time,
				})
			);
			return dispatch(setPlaying(true));
		}

		isPlaying ? dispatch(setPlaying(false)) : dispatch(setPlaying(true));
	};

	return (
		<div
			className={
				isPlaying && currentTrack.id === id
					? 'track-card_container track-card_container-active'
					: 'track-card_container'
			}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<div className='track-card_title'>
				<Typography
					variant='h6'
					sx={{
						color: '#FFF',
						fontFamily: 'Oswald',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						paddingBottom: '5px',
					}}
				>
					{id}
				</Typography>
				{action === 'up' ? (
					<ArrowUpwardIcon
						fontSize='large'
						sx={{ fill: '#277625' }}
					/>
				) : null}
				{action === 'down' ? (
					<ArrowDownwardIcon
						fontSize='large'
						sx={{ fill: '#811F1F' }}
					/>
				) : null}
				{action === 'star' ? (
					<StarIcon fontSize='large' sx={{ fill: '#762542' }} />
				) : null}
				{action === 'default' ? (
					<HorizontalRuleIcon
						fontSize='large'
						sx={{ fill: '#696969' }}
					/>
				) : null}
			</div>
			<div className='track-card_body'>
				<div className='track-card_body-image'>
					<img
						src={image}
						style={{
							width: '70px',
							height: '70px',
							objectFit: 'contain',
						}}
						alt=''
					/>
					{isShown ? (
						<IconButton
							size='small'
							sx={{
								position: 'absolute',
								top: '10px',
								left: '12px',
								backgroundColor: '#2B2B2B',
								color: '#762542',
								'&:hover': {
									backgroundColor: '#2B2B2B',
								},
							}}
							onClick={() => {
								const track = {
									id: id,
								};
								handleToggleAudio(track);
							}}
						>
							{isPlaying && currentTrack.id === id ? (
								<PauseIcon fontSize='large' />
							) : (
								<PlayArrowIcon fontSize='large' />
							)}
						</IconButton>
					) : null}
				</div>
				<div className='track-card_body-detail'>
					<Typography
						variant='h6'
						sx={{
							color: '#FFF',
							fontFamily: 'Oswald',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{title}
					</Typography>
					<Typography
						variant='body1'
						sx={{
							textTransform: 'uppercase',
							color: '#808080',
							fontFamily: 'Oswald',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{author}
					</Typography>
					{isShown ? (
						<IconButton
							size='small'
							sx={{
								position: 'absolute',
								top: '-10px',
								right: '-120px',
								backgroundColor: '#2B2B2B',
								color: '#762542',
								'&:hover': {
									backgroundColor: '#2B2B2B',
								},
							}}
						>
							<FavoriteBorderIcon fontSize='large' />
						</IconButton>
					) : null}
				</div>
			</div>
			<div className='track-card_time'>
				<Typography
					variant='body2'
					sx={{
						color: '#808080',
						fontFamily: 'Oswald',
						fontSize: '16px',
						lineHeight: '1.2',
					}}
				>
					{formattedDuration}
				</Typography>
			</div>
		</div>
	);
}

export default TrackCard;
