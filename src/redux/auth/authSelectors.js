export const selectIsLoggedIn = s => s.auth.isLoggedIn;
export const selectUserName = s => s.auth.user.name;
export const selectIsRefreshing = s => s.auth.isRefreshing;
export const selectToken = s => s.auth.token;
export const selectAuthError = s => s.auth.error;
