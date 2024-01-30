import { useState } from 'react';
import {
	Box,
	IconButton,
	Typography,
	Menu,
	Tooltip,
	Avatar,
	MenuItem,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearUserData } from '../../../store/reducers/auth/aut.slice.js';

function Profile({ isLoggined }) {
	const dispatch = useDispatch();
	function handleLogOut() {
		dispatch(clearUserData());
	}

	const settings = [
		{
			title: 'Выйти',
			handler: handleLogOut,
		},
	];

	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		isLoggined && (
			<Box sx={{ flexGrow: 0 }}>
				<Tooltip title='Меню'>
					<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
						<Avatar />
					</IconButton>
				</Tooltip>
				<Menu
					sx={{
						ul: {
							backgroundColor: '#1F1F1F',
						},
						mt: '45px',
					}}
					id='menu-appbar'
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					{settings.map((setting) => (
						<MenuItem
							sx={{
								'&:hover': {
									backgroundColor: 'rgb(97, 87, 87, 0.3);',
								},
							}}
							key={setting.title}
							onClick={() => {
								handleCloseUserMenu();
								setting.handler();
							}}
						>
							<Typography
								textAlign='center'
								sx={{ color: 'whitesmoke' }}
							>
								{setting.title}
							</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
		)
	);
}

export { Profile };
