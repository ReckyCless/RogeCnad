import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import './main-layut.sass';
import {Header} from "../../../components/header/index.jsx";
import Player from "../../../components/player/player.jsx";
import {Footer} from "../../../components/footer/footer.jsx";


function MainLayout() {
	return (
		<>
			<Header />
			<main className='main'>
				<Container sx={{ p: '20px' }} maxWidth='xl'>
					<Outlet />
				</Container>
			</main>
			<Player />
			<Footer />
		</>
	);
}

export { MainLayout };
