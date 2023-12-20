import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SessionSliceState =
	| {
			accessToken: string;
			userId: string;
			isAuthorized: true;
	  }
	| {
			isAuthorized: false;
			accessToken?: string;
			userId?: string;
	  };

type SessionSliceAction = {
	userId: string;
	accessToken: string;
};

const initialState: SessionSliceState = {
	isAuthorized: false,
};

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		clearSession: (state) => {
			state.accessToken = undefined;
			state.userId = undefined;
			state.isAuthorized = false;
		},
		setSession: (
			state: SessionSliceState,
			action: PayloadAction<SessionSliceAction>
		) => {
			state.isAuthorized = true;
			state.accessToken = action.payload.accessToken;
			state.userId = action.payload.userId;
		},
	},
});

/*export const selectIsAuthorized = (state: RootState) =>
	state.session.isAuthorized;

export const selectState = (state: RootState) => state.session.userId;*/
