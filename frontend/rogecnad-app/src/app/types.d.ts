declare type RootState = ReturnType<
	typeof import('./app-store').store.getState
>;
declare type RootDispatch = typeof import('./app-store').store.dispatch;
