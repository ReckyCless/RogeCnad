import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.sass';
import {MainLayout} from "./pages/layouts/main-layout/main-layout.jsx";
import {ErrorPage} from "./pages/error-page/error-page.jsx";
import {MainPage} from "./pages/main-page/main-page.jsx";
import {AlbumPage} from "./pages/album-page/album-page.jsx";
import {SigInPage} from "./pages/sign-in-page/sign-in-page.jsx";
import {SignUpPage} from "./pages/sign-up-page/sign-up-page.jsx";
import {ROUTES} from "./paths.js";
import {store} from "./store/store.js";

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
