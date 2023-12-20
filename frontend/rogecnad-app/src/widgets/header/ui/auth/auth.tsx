import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/routing';

type AuthProps = {
	isLoggined: boolean;
};

function Auth({ isLoggined }: AuthProps) {
	return (
		isLoggined && (
			<>
				<Link to={ROUTES.SIGN_IN}>
					<Button
						variant='text'
						sx={{
							fontWeight: 400,
							fontFamily: `'Oswald', sans-serif`,
							textTransform: 'none',
							mr: 2,
							color: 'whitesmoke',
						}}
					>
						Войти
					</Button>
				</Link>
				<Link to={ROUTES.SIGN_UP}>
					<Button
						variant='contained'
						sx={{
							backgroundColor: '#762542',
							fontWeight: 400,
							fontFamily: `'Oswald', sans-serif`,
							textTransform: 'none',
							'&:hover': {
								backgroundColor: 'rgba(163, 33, 33,0.8);',
							},
						}}
					>
						Регистрация
					</Button>
				</Link>
			</>
		)
	);
}

export { Auth };
