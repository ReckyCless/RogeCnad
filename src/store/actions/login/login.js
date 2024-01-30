import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_ROUTES } from '../../../paths.js';

export const login = createApi({
	reducerPath: 'api/login',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_ROUTES.BASE,
	}),
	endpoints: (build) => ({
		postLogIn: build.mutation({
			query: (dataLogin) => ({
				url: `${SERVER_ROUTES.LOGIN}`,
				method: 'POST',
				body: dataLogin,
			}),
		}),
	}),
});

export const { usePostLogInMutation } = login;
