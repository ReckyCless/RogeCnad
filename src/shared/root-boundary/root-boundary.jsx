import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function RootBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return <div>Этой страницы не существует!</div>;
		}

		if (error.status === 401) {
			return (
				<div>
					Для просмотра этой страницы вы должны быть авторизованы.
				</div>
			);
		}

		if (error.status === 503) {
			return <div>Соединение отклонено или не установлено.</div>;
		}
	}

	return <div>Что-то пошло не так :C</div>;
}

export { RootBoundary };
