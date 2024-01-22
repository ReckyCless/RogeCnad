import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_ROUTES } from '../../../paths.js';

export const registration = createApi({
	reducerPath: 'api/registration',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_ROUTES.BASE,
	}),
	endpoints: (build) => ({
		postRegistration: build.mutation({
			query: (dataReg) => ({
				url: `${SERVER_ROUTES.REGISTRATION}`,
				method: 'POST',
				body: dataReg,
			}),
		}),
	}),
});

export const { usePostRegistrationMutation } = registration;
