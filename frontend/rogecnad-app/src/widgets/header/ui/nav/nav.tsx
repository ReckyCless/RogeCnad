import { useState } from 'react';
import {
	Box,
	IconButton,
	Typography,
	Menu,
	Button,
	MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/routing';
import { CustomInput } from '@/shared/ui';

type Page = {
	name: string;
	title: string;
	path: string;
};

type Pages = Page[];

const pages: Pages = [
	{
		name: 'main',
		title: 'Главная',
		path: ROUTES.MAIN,
	},
];

function Nav() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
					display: { xs: 'flex', md: 'none' },
				}}
			>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					onClick={handleOpenNavMenu}
					color='inherit'
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id='menu-appbar'
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
						ul: {
							backgroundColor: '#1F1F1F',
						},
					}}
				>
					{pages.map((page) => (
						<Link to={page.path} key={page.name}>
							<MenuItem
								sx={{
									'&:hover': {
										backgroundColor:
											'rgb(97, 87, 87, 0.3);',
									},
								}}
								onClick={handleCloseNavMenu}
							>
								<Typography
									textAlign='center'
									sx={{
										color: 'whitesmoke',
										fontWeight: 400,
										fontFamily: `'Oswald', sans-serif`,
									}}
								>
									{page.title}
								</Typography>
							</MenuItem>
						</Link>
					))}
				</Menu>
			</Box>

			<Box
				sx={{
					flexGrow: 1,
					display: { xs: 'none', md: 'flex' },
					alignItems: 'center',
				}}
			>
				{pages.map((page) => (
					<Link to={page.path} key={page.name}>
						<Button
							onClick={handleCloseNavMenu}
							sx={{
								my: 2,
								color: 'whitesmoke',
								display: 'block',
								fontWeight: 400,
								fontFamily: `'Oswald', sans-serif`,
								textTransform: 'none',
							}}
						>
							{page.title}
						</Button>
					</Link>
				))}

				<Box
					sx={{
						marginLeft: '20%',
					}}
				>
					<CustomInput
						type='search'
						value=''
						onChange={() => {
							console.log('search');
						}}
						placeholder='Поиск...'
						style={{
							height: '30px',
						}}
						iconStyle={{
							top: '-4px',
						}}
					/>
				</Box>
			</Box>
		</>
	);
}

export { Nav };
