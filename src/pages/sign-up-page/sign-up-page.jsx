import { useEffect, useState } from 'react';
import {
	Container,
	Box,
	Typography,
	IconButton,
	Divider,
	Button,
	Checkbox,
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
import './sign-up-page.sass';
import { CustomInput } from '../../shared/inputs/custom-input/custom-input.jsx';
import CustomSelect from '../../shared/selectors/custom-select/custom-select.jsx';
import { ROUTES } from '../../paths.js';
import { usePostRegistrationMutation } from '../../store/actions/registration/registration.js';

const dataMonths = [
	{ value: '1', title: 'Январь' },
	{ value: '2', title: 'Февраль' },
	{ value: '3', title: 'Март' },
	{ value: '4', title: 'Апрель' },
	{ value: '5', title: 'Май' },
	{ value: '6', title: 'Июнь' },
	{ value: '7', title: 'Июль' },
	{ value: '8', title: 'Август' },
	{ value: '9', title: 'Сентябрь' },
	{ value: '10', title: 'Октябрь' },
	{ value: '11', title: 'Ноябрь' },
	{ value: '12', title: 'Декабрь' },
];
function SignUpPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [login, setLogin] = useState('');
	const [birthDay, setBirthDay] = useState({
		day: '30',
		months: '01',
		year: '1900',
	});
	const [showError, setShowError] = useState(false);
	const [errMessage, setErrMessage] = useState('');
	const navigate = useNavigate();

	const [postRegistration, { data, isSuccess, error }] =
		usePostRegistrationMutation();

	useEffect(() => {
		if (isSuccess) {
			navigate(ROUTES.SIGN_IN);
		}
		if (error) {
			console.log(error);
			setShowError(true);
			setErrMessage(error.data.description);
		}
	}, [isSuccess, error]);

	const handleReg = async () => {
		setShowError(false);

		if (email === '' || password === '' || login === '') {
			setShowError(true);
			setErrMessage('Заполните поля');
			return;
		}

		await postRegistration({
			email: email,
			username: login,
			password: password,
			birthDate: '01.01.1970',
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
							Регистрация
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
							placeholder='Email'
						/>

						<Typography
							variant='h5'
							sx={{
								mt: '30px',
								color: 'whitesmoke',
							}}
						>
							Логин
						</Typography>
						<CustomInput
							value={login}
							type='text'
							onChange={(e) => setLogin(e.target.value)}
							placeholder='Логин'
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

						<Typography
							variant='h5'
							sx={{
								mt: '30px',
								color: 'whitesmoke',
							}}
						>
							Дата рождения
						</Typography>

						<Box className='registration-form_date-picker'>
							<div className='date-picker_day'>
								<CustomInput
									type='number'
									value=''
									onChange={() => console.log('day')}
									placeholder='30'
								/>
							</div>
							<div className='date-picker_month'>
								<CustomSelect
									data={dataMonths}
									onChange={() => console.log('month')}
								/>
							</div>
							<div className='date-picker_year'>
								<CustomInput
									type='number'
									value=''
									onChange={() => console.log('year')}
									placeholder='1900'
								/>
							</div>
						</Box>

						<Typography
							variant='body1'
							sx={{
								mt: '30px',
								color: 'whitesmoke',
							}}
						>
							<Checkbox
								/*checked={checked}
								onChange={handleChange}*/
								inputProps={{ 'aria-label': 'controlled' }}
								sx={{
									color: 'white',
									'&.Mui-checked': {
										color: '#762542',
									},
								}}
							/>
							Я прочитал и согласен с{' '}
							<Link to={ROUTES.SIGN_IN}>
								<span
									style={{
										textDecoration: 'underline',
										textUnderlinePosition: 'under',
										fontFamily: 'Oswald',
										color: '#762542',
									}}
								>
									Политикой конфиденциальности RogeCnad
								</span>
							</Link>
						</Typography>

						<Button
							variant='contained'
							onClick={handleReg}
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
							Регистрация
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
							Есть аккаунт?
							<Link to={ROUTES.SIGN_IN}>
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
										Войти в аккаунт
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

export { SignUpPage };
