import { IconButton, Typography } from '@mui/material';
import './album-preview.sass';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import {ROUTES} from "../../../paths.js";

function AlbumPreview({
	image,
	title,
	albumId,
	fullTime,
	author,
}) {
	const [isShown, setIsShown] = useState(false);

	return (
		<div
			className='album-preview_container'
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<div className='album-preview_image'>
				<img
					src={image}
					style={{
						width: '250px',
						height: '250px',
						objectFit: 'contain',
					}}
					alt=''
				/>
				{isShown ? (
					<IconButton
						size='small'
						sx={{
							position: 'absolute',
							top: '30%',
							left: '30%',
							backgroundColor: '#2B2B2B',
							width: 80,
							height: 80,
							color: '#762542',
							'&:hover': {
								backgroundColor: '#2B2B2B',
							},
						}}
					>
						<PlayArrowIcon
							fontSize='large'
							sx={{
								height: 80,
								width: 80,
							}}
						/>
					</IconButton>
				) : null}
				{isShown ? (
					<IconButton
						size='small'
						sx={{
							position: 'absolute',
							top: '40%',
							right: '15%',
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
				{isShown ? (
					<Typography
						variant='h5'
						sx={{
							position: 'absolute',
							top: '70%',
							right: '30%',
							width: '120px',
							height: '40px',
							textAlign: 'center',
							backgroundColor: '#2B2B2B',
							borderRadius: '20px',
							color: '#808080',
							fontFamily: 'Oswald',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							textTransform: 'uppercase',
						}}
					>
						{fullTime}
					</Typography>
				) : null}
			</div>
			<Link to={`${ROUTES.ALBUM_BY_ID}/${albumId}`}>
				<div className='album-preview_description'>
					<div className='album-preview_description-title'>
						<Typography
							variant='h5'
							sx={{
								color: '#FFF',
								fontFamily: 'Oswald',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								textTransform: 'uppercase',
							}}
						>
							{title}
						</Typography>
					</div>
					<div className='album-preview_description-author'>
						<Typography
							variant='h6'
							sx={{
								color: '#808080',
								fontFamily: 'Oswald',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							{author}
						</Typography>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default AlbumPreview;
