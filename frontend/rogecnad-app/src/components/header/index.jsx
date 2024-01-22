import { AppBar, Toolbar, Container } from '@mui/material';
import { Logo } from './logo/logo.jsx';
import { Nav } from './nav/nav.jsx';
import { Profile } from './profile/profile.jsx';
import { Auth } from './auth/auth.jsx';
import { useSelector } from 'react-redux';

function Header() {
	const authData = useSelector((store) => store.auth);
	const { isLoggined } = authData;
	return (
		<AppBar position='static' sx={{ backgroundColor: '#171717' }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Logo />
					<Nav />
					<Profile isLoggined={isLoggined} />
					<Auth isLoggined={!isLoggined} />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export { Header };
