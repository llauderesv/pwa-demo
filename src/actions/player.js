export const login = isLoggedIn => ({
  type: 'LOGIN_USER',
  isLoggedIn,
});

export const logOut = isLoggedOut => ({
  type: 'LOGOUT_USER',
  isLoggedOut,
});

export const loginError = error => ({
  type: 'LOGIN_ERROR',
  errorMessage: error.message,
});
