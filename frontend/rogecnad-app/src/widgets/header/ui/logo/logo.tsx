import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
			<img
				src='logo.svg'
				alt=''
				style={{ width: 60, height: 60, paddingRight: 10 }}
			/>
			<Typography
				variant='h6'
				sx={{
					mr: 4,
					display: { xs: 'none', md: 'flex' },
					fontFamily: 'Signika Negative',
					fontWeight: 400,
					color: 'inherit',
					textDecoration: 'none',
				}}
			>
				RogeCnad
			</Typography>

			<Typography
				variant='h5'
				sx={{
					mr: 2,
					display: { xs: 'flex', md: 'none' },
					flexGrow: 1,
					fontFamily: 'Signika Negative',
					fontWeight: 400,
					color: 'inherit',
					textDecoration: 'none',
				}}
			>
				RogeCnad
			</Typography>
		</Link>
	);
}

export { Logo };
