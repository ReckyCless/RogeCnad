const ROUTES = {
	MAIN: '/',
	CHARTS: '#',
	SEARCH: '#',
	SIGN_IN: '/sign-in',
	SIGN_UP: '/sign-up',
	ALBUM_BY_ID: '/album',
};

const SERVER_ROUTES = {
	BASE: 'https://localhost:7183',
	LOGIN: '/SignIn',
	REGISTRATION: '/Register',
	CHARTS: '/GetTrackList',
	ALBUMS: '/GetAlbums',
	ALBUM_BY_ID: '/GetPlaylistTrackList',
};

export { ROUTES, SERVER_ROUTES };
