import { useEffect, useState } from 'react';
import {
	Container,
	Box,
	Typography,
	IconButton,
	Divider,
	Button,
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
import './sign-in-page.sass';
import { CustomInput } from '../../shared/inputs/custom-input/custom-input.jsx';
import { ROUTES } from '../../paths.js';
import { usePostLogInMutation } from '../../store/actions/login/login.js';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../store/reducers/auth/aut.slice.js';

function SigInPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showError, setShowError] = useState(false);
	const [errMessage, setErrMessage] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [postLogin, { data, isSuccess, error }] = usePostLogInMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(
				saveUserData({
					token: data?.token,
					role: 'user',
				})
			);
			navigate(ROUTES.MAIN);
		}
		if (error) {
			setShowError(true);
			setErrMessage('Неверный логин/пароль');
		}
	}, [isSuccess, error]);
	const handleSigIn = async () => {
		setShowError(false);

		if (email === '' || password === '') {
			setShowError(true);
			setErrMessage('Заполните поля');
			return;
		}
		await postLogin({
			email: email,
			password: password,
		});
	};

	function handleGoBackClick() {
		navigate('/');
	}

	return (
		<Container
			className='container'
			sx={{
				p: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				zIndex: '0',
			}}
			maxWidth='xl'
		>
			<div className='registration-form_container'>
				<Box className='registration-form'>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							textAlign: 'center',
							justifyContent: 'center',
							padding: '0 15px',
						}}
					>
						<IconButton
							onClick={() => handleGoBackClick()}
							sx={{ alignSelf: 'flex-start', paddingLeft: '0' }}
						>
							<WestIcon
								fontSize='large'
								sx={{
									color: 'whitesmoke',
								}}
							/>
						</IconButton>
						<Typography
							variant='h4'
							sx={{
								flexGrow: 1,
								color: 'whitesmoke',
								fontFamily: 'Oswald',
							}}
						>
							Войти в аккаунт
						</Typography>
					</Box>

					<Divider
						variant='middle'
						sx={{
							height: '5px',
							backgroundColor: 'rgba(118, 37, 66, 1)',
						}}
					/>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							textAlign: 'left',
							padding: '10% 10%',
							flexDirection: 'column',
						}}
					>
						<Typography
							variant='h5'
							sx={{
								color: 'whitesmoke',
							}}
						>
							Электронная почта
						</Typography>
						<CustomInput
							value={email}
							type='text'
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Электронная почта'
						/>

						<Typography
							variant='h5'
							sx={{
								mt: '30px',
								color: 'whitesmoke',
							}}
						>
							Пароль
						</Typography>
						<CustomInput
							value={password}
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Пароль'
						/>
						<Button
							variant='contained'
							onClick={handleSigIn}
							sx={{
								mt: '30px',
								backgroundColor: '#762542',
								fontFamily: `Oswald, sans-serif`,
								textTransform: 'none',
								borderRadius: '40px',
								fontSize: '24px',
								height: '50px',
								'&:hover': {
									backgroundColor: 'rgba(163, 33, 33,0.8);',
								},
							}}
						>
							Войти
						</Button>
						<Typography
							variant='body2'
							sx={{
								color: 'red',
								textAlign: 'center',
								mt: '10px',
							}}
						>
							{showError ? errMessage : ''}
						</Typography>
					</Box>
					<Divider
						variant='middle'
						sx={{
							height: '5px',
							backgroundColor: 'rgba(118, 37, 66, 1)',
						}}
					/>
					<Box
						sx={{
							mt: '30px',
						}}
					>
						<Typography
							variant='h6'
							sx={{
								color: 'rgba(105, 105, 105, 1)',
								fontFamily: 'Oswald',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							Нет аккаунта?
							<Link to={ROUTES.SIGN_UP}>
								<Button
									variant='text'
									sx={{
										textTransform: 'none',
										mr: 2,
										color: 'whitesmoke',
										backgroundColor:
											'rgba(105, 105, 105, 0)',
										'&:hover': {
											backgroundColor:
												'rgba(163, 33, 33,0);',
										},
									}}
								>
									<Typography
										variant='h6'
										sx={{
											textDecoration: 'underline',
											textUnderlinePosition: 'under',
											fontFamily: 'Oswald',
										}}
									>
										Зарегистрироваться
									</Typography>
								</Button>
							</Link>
						</Typography>
					</Box>
				</Box>
			</div>
		</Container>
	);
}

export { SigInPage };
