import { createSlice } from '@reduxjs/toolkit';
import {
	removeUserDataCookie,
	setUserDataCookie,
} from '../../../user-data/user-data-cookie.js';

const initialState = {
	accessToken: null,
	role: 'no_auth',
	isLoggined: false,
};
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		saveUserData(state, action) {
			const updatedUser = {
				isLoggined: true,
				accessToken: action.payload.token,
				role: action.payload.role || 'no_auth',
			};

			setUserDataCookie(updatedUser);

			state.isLoggined = !!action.payload.role;
			state.accessToken = action.payload.token;
			state.role = action.payload.role || 'no_auth';
		},
		clearUserData(state) {
			removeUserDataCookie();

			state.isLoggined = false;
			state.accessToken = null;
			state.role = 'no_auth';
		},
	},
});

const { actions, reducer } = authSlice;

export const { saveUserData, clearUserData } = actions;

export { reducer as authReducer };
