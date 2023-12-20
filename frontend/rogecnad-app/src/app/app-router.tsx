import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/pages/layouts';
import { MainPage } from '@/pages/main-page';
import { ErrorPage } from '@/pages/error';
import { SigInPage } from '@/pages/sign-in/ui/sign-in-page';
import { ROUTES } from '@/shared/routing';
import { SignUpPage } from '@/pages/sign-up/ui/sign-up-page';
import { AlbumPage } from '@/pages/album-page';

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: ROUTES.MAIN,
				element: <MainPage />,
			},
			{
				path: `${ROUTES.ALBUM_BY_ID}/:albumID`,
				element: <AlbumPage />,
			},
		],
	},
	{
		element: <SigInPage />,
		errorElement: <ErrorPage />,
		path: ROUTES.SIGN_IN,
	},
	{
		element: <SignUpPage />,
		errorElement: <ErrorPage />,
		path: ROUTES.SIGN_UP,
	},
]);
