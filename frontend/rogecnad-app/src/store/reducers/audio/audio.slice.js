import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
	name: 'audio',
	initialState: {
		currentTrack: {
			id: null,
			src: null,
			image: null,
			title: null,
			author: null,
			time: null,
		},
		isPlaying: false,
	},
	reducers: {
		setCurrentTrack: (state, action) => {
			state.currentTrack = action.payload;
		},
		setPlaying: (state, action) => {
			state.isPlaying = action.payload;
		},
	},
});

const { actions, reducer } = audioSlice;

export const { setCurrentTrack, setPlaying } = actions;

export { reducer as audioReducer };
