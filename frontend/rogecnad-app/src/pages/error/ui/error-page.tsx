import { useNavigate } from 'react-router-dom';
import { RootBoundary } from '@/shared/ui';
import './error-page.sass';

function ErrorPage() {
	const navigate = useNavigate();

	function handleGoMainPageClick() {
		navigate('/');
	}
	return (
		<main className='error'>
			<h1>Упс!</h1>
			<p>Извините, произошла непредвиденная ошибка.</p>
			<div className='error-message'>
				<i>
					<RootBoundary />
				</i>
			</div>
			<button
				type='button'
				className='error-button'
				onClick={handleGoMainPageClick}
			>
				<span>Вернуться на главную страницу</span>
			</button>
		</main>
	);
}

export { ErrorPage };
