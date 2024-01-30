import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_ROUTES } from '../../../paths.js';

export const music = createApi({
	reducerPath: 'api/music',
	baseQuery: fetchBaseQuery({
		baseUrl: SERVER_ROUTES.BASE,
	}),
	endpoints: (build) => ({
		getChartsList: build.query({
			query: () => `${SERVER_ROUTES.CHARTS}`,
		}),
		getRecentReleasesAlbums: build.query({
			query: () => `${SERVER_ROUTES.ALBUMS}`,
		}),
		postAlbumById: build.mutation({
			query: (dataAlbum) => ({
				url: `${SERVER_ROUTES.ALBUM_BY_ID}`,
				method: 'POST',
				body: dataAlbum,
			}),
		}),
	}),
});

export const {
	useGetChartsListQuery,
	useGetRecentReleasesAlbumsQuery,
	usePostAlbumByIdMutation,
} = music;
