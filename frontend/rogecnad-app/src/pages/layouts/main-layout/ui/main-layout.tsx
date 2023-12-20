import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import './main-layut.sass';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import Player from '@/widgets/player/ui/player.tsx';

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
