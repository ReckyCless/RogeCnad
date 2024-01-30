import './player.sass';
import { Box, IconButton, Slider, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VolumeUp } from '@mui/icons-material';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { useDispatch, useSelector } from 'react-redux';
import PauseIcon from '@mui/icons-material/Pause';
import { useEffect, useState } from 'react';
import {
	setCurrentTrack,
	setPlaying,
} from '../../store/reducers/audio/audio.slice.js';
import secondsToMMSS from '../../utils/secondsToMMSS.js';
import { audio } from '../../constants.js';

const TRACK_BTN = {
	NEXT: 'NEXT',
	PREV: 'PREV',
};

function Player() {
	const audioData = useSelector((store) => store.audio);
	const dispatch = useDispatch();
	const { isPlaying, currentTrack, nextTrack, prevTrack } = audioData;
	const [volume, setVolume] = useState(50);
	const [currentTime, setCurrentTime] = useState(0);
	const [repeat, setRepeat] = useState(false);
	const formattedCurrentTime = secondsToMMSS(currentTime);
	const formattedTime = secondsToMMSS(currentTrack.time);
	const sliderCurrentTime = Math.round(
		(currentTime / currentTrack.time) * 100
	);
	const likesArr = localStorage.getItem('likes');
	const isLikedLS = likesArr.includes(currentTrack.id);
	const [isLiked, setIsLiked] = useState(isLikedLS);

	useEffect(() => {
		if (currentTrack.id && currentTrack.src !== audio.src) {
			audio.src = currentTrack.src;
			audio.currentTime = 0;
			audio.play();
		}
	}, [currentTrack.id]);

	useEffect(() => {
		if (!isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
	}, [isPlaying]);

	useEffect(() => {
		const timeInterval = setInterval(() => {
			setCurrentTime(audio.currentTime);
		}, 1000);

		return () => {
			clearInterval(timeInterval);
		};
	}, []);

	useEffect(() => {
		if (audio.ended) dispatch(setPlaying(false));
		if (audio.ended && repeat) {
			audio.play();
			dispatch(setPlaying(true));
		}
	}, [audio.ended]);

	useEffect(() => {
		if (audio.ended && repeat) {
			audio.play();
			dispatch(setPlaying(true));
		}
	}, [repeat]);

	const handleChangeValue = (_, value) => {
		setVolume(value);

		audio.volume = value / 100;
	};

	useEffect(() => {
		console.log(volume);
	}, [volume]);
	const handlePlayStop = () => {
		dispatch(setPlaying(!isPlaying));
	};

	const handleChangeCurrentTime = (_, value) => {
		const time = Math.round((value / 100) * currentTrack.time);

		setCurrentTime(time);
		audio.currentTime = time;
	};

	const handleChangeRepeat = () => {
		setRepeat(!repeat);
	};

	const handleNextPrevTrack = (trackBtn) => {
		if (TRACK_BTN.NEXT === trackBtn && nextTrack) {
			return dispatch(setCurrentTrack(nextTrack));
		}

		if (TRACK_BTN.PREV === trackBtn && prevTrack) {
			return dispatch(setCurrentTrack(prevTrack));
		}
	};
	return (
		<div className='player_container'>
			<div className='player_header'>
				<div className='player_header-time'>{formattedCurrentTime}</div>
				<Slider
					step={1}
					min={0}
					max={100}
					value={sliderCurrentTime || 0}
					onChange={handleChangeCurrentTime}
					valueLabelFormat={(value) => {
						return formattedCurrentTime;
					}}
					aria-label='Default'
					valueLabelDisplay={currentTrack.time ? 'auto' : 'off'}
					disabled={!currentTrack.id}
					sx={{
						marginLeft: '10px',
						color: '#762542',
						width: '95%',
						height: '5px',
						'& .MuiSlider-rail': {
							color: 'gray',
						},
						'& .MuiSlider-thumb': {
							color: 'white',
						},
					}}
				/>
				<div
					className='player_header-time'
					style={{ paddingLeft: '20px' }}
				>
					{formattedTime || '999:9'}
				</div>
			</div>
			<div className='player_body'>
				<div className='player_body-left'>
					<img
						src={currentTrack.image}
						style={{
							height: 70,
							width: 70,
							borderRadius: 10,
						}}
						alt='Avatar'
					/>
					<Box sx={{ paddingLeft: '10px' }}>
						<Typography
							variant='h5'
							sx={{
								textTransform: 'uppercase',
								color: 'white',
								fontFamily: 'Oswald',
								display: 'flex',
							}}
						>
							{currentTrack.title}
						</Typography>
						<Typography
							variant='h6'
							sx={{
								textTransform: 'uppercase',
								color: '#808080',
								fontFamily: 'Oswald',
								display: 'flex',
							}}
						>
							{currentTrack.author}
						</Typography>
					</Box>
					<Box
						sx={{
							ml: '35px',
							position: 'relative',
						}}
					>
						<IconButton
							size='small'
							sx={{
								top: '-5px',
								position: 'absolute',
								backgroundColor: 'rgba(43,43,43,0)',
								color: '#762542',
								'&:hover': {
									backgroundColor: 'rgb(43,43,43)',
								},
							}}
						>
							<FavoriteIcon fontSize='large' />
						</IconButton>
					</Box>
				</div>

				<div className='player_body-right'>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Stack
							spacing={2}
							direction='row'
							sx={{ mb: 1 }}
							alignItems='center'
						>
							<IconButton
								size='small'
								sx={{
									backgroundColor: 'rgba(43,43,43,0)',
									color: '#762542',
									'&:hover': {
										backgroundColor: 'rgb(43,43,43)',
									},
								}}
							>
								<VolumeUp fontSize='large' />
							</IconButton>
							<Slider
								step={1}
								min={0}
								max={100}
								aria-label='Default'
								valueLabelDisplay='auto'
								onChange={handleChangeValue}
								sx={{
									color: '#762542',
									width: '100px',
									height: '5px',
									'& .MuiSlider-rail': {
										color: 'gray',
									},
									'& .MuiSlider-thumb': {
										color: 'white',
									},
								}}
							/>
						</Stack>
						<IconButton
							size='small'
							sx={{
								backgroundColor: 'rgba(43,43,43,0)',
								color: '#762542',
								'&:hover': {
									backgroundColor: 'rgb(43,43,43)',
								},
							}}
						>
							<ShuffleIcon fontSize='large' />
						</IconButton>
						<IconButton
							size='small'
							onClick={() => {
								handleNextPrevTrack(TRACK_BTN.PREV);
							}}
							disabled={!prevTrack}
							sx={{
								backgroundColor: 'rgba(43,43,43,0)',
								color: '#762542',
								'&:hover': {
									backgroundColor: 'rgb(43,43,43)',
								},
								'&:disabled': {
									color: '#3d282f',
								},
							}}
						>
							<KeyboardDoubleArrowLeftIcon fontSize='large' />
						</IconButton>
						<IconButton
							size='small'
							sx={{
								backgroundColor: 'rgba(43,43,43,0)',
								color: '#762542',
								'&:hover': {
									backgroundColor: 'rgb(43,43,43)',
								},
							}}
							onClick={handlePlayStop}
						>
							{isPlaying ? (
								<PauseIcon fontSize='large' />
							) : (
								<PlayArrowIcon fontSize='large' />
							)}
						</IconButton>
						<IconButton
							size='small'
							onClick={() => {
								handleNextPrevTrack(TRACK_BTN.NEXT);
							}}
							disabled={!nextTrack}
							sx={{
								backgroundColor: 'rgba(43,43,43,0)',
								color: '#762542',
								'&:hover': {
									backgroundColor: 'rgb(43,43,43)',
								},
								'&:disabled': {
									color: '#3d282f',
								},
							}}
						>
							<KeyboardDoubleArrowRightIcon fontSize='large' />
						</IconButton>
						<IconButton
							size='small'
							sx={{
								backgroundColor: repeat
									? 'rgb(43,43,43)'
									: 'rgba(43,43,43,0)',
								color: '#762542',
								'&:hover': {
									backgroundColor: 'rgb(43,43,43)',
								},
							}}
							onClick={handleChangeRepeat}
						>
							<RepeatOneIcon fontSize='large' />
						</IconButton>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default Player;
