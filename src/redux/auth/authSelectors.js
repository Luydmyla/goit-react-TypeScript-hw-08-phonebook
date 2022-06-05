const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsRegistered = state => state.auth.isRegistered;
const getToken = state => state.auth.token;
const getError = state => state.auth.error;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRegistered,
  getToken,
  getError,
};
export default authSelectors;
