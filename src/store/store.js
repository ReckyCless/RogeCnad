import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth/aut.slice.js';
import { login } from './actions/login/login.js';
import { registration } from './actions/registration/registration.js';
import { music } from './actions/music/music.js';
import { audioReducer } from './reducers/audio/audio.slice.js';

export const store = configureStore({
	reducer: {
		[login.reducerPath]: login.reducer,
		[registration.reducerPath]: registration.reducer,
		[music.reducerPath]: music.reducer,
		auth: authReducer,
		audio: audioReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			login.middleware,
			registration.middleware,
			music.middleware,
		]),
});
