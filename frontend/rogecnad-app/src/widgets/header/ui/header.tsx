import { AppBar, Toolbar, Container } from '@mui/material';
import { Logo } from './logo/logo';
import { Nav } from './nav/nav';
import { Profile } from './profile/profile';
import { Auth } from './auth/auth';

function Header() {
	const isLoggined = false;
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
