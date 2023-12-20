import StarIcon from '@mui/icons-material/Star';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import './track-card.sass';
import { IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type TrackCardProps = {
	id: string;
	action: string;
	image: string;
	title: string;
	author: string;
	time: string;
};

function TrackCard({ id, action, image, title, author, time }: TrackCardProps) {
	const [isShown, setIsShown] = useState(false);

	return (
		<div
			className='track-card_container'
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
						>
							<PlayArrowIcon fontSize='large' />
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
					{time}
				</Typography>
			</div>
		</div>
	);
}

export default TrackCard;
