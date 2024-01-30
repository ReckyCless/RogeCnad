import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
	name: 'audio',
	initialState: {
		nextTrack: null,
		prevTrack: null,
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
		setNextTrack: (state, action) => {
			state.nextTrack = action.payload;
			state.isPlaying = true;
		},
		setPrevTrack: (state, action) => {
			state.prevTrack = action.payload;
			state.isPlaying = true;
		},
	},
});

const { actions, reducer } = audioSlice;

export const { setCurrentTrack, setPlaying, setNextTrack, setPrevTrack } =
	actions;

export { reducer as audioReducer };
