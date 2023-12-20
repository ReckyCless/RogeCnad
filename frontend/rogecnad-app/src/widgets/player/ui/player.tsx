import './player.sass';
import { Box, IconButton, Slider, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VolumeUp } from '@mui/icons-material';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ShuffleIcon from '@mui/icons-material/Shuffle';

function Player() {
	return (
		<div className='player_container'>
			<div className='player_header'>
				<div className='player_header-time'>0:00</div>
				<Slider
					defaultValue={50}
					aria-label='Default'
					valueLabelDisplay='auto'
					sx={{
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
				<div className='player_header-time'>999:59</div>
			</div>
			<div className='player_body'>
				<div className='player_body-left'>
					<img
						src='soap_bubbles.png'
						style={{
							height: 70,
							width: 70,
							borderRadius: 10,
						}}
						alt=''
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
							Пыяла
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
							АИГЕЛ
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
								defaultValue={50}
								aria-label='Default'
								valueLabelDisplay='auto'
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
							sx={{
								backgroundColor: 'rgba(43,43,43,0)',
								color: '#762542',
								'&:hover': {
									backgroundColor: 'rgb(43,43,43)',
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
						>
							<PlayArrowIcon fontSize='large' />
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
						>
							<KeyboardDoubleArrowRightIcon fontSize='large' />
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
