import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  isFetchingCurrentUser: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // extraReducers: {},
  extraReducers: {
    // ми викоистовумо асинк санк, тому тут екстаедюсеи, для коожного кейсу - фулфілд - коли все добе, пендінг, реджекткд робимо міні редюсери
    [authOperations.register.fulfilled](state, action) {
      // також ми викоистовуемо тут імме, тому можемо якоби мутіpовати наш стейт (а це цілий обьект) напряму (тобто його копію).
      console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      // и успішній реєстраціі ставимо із логін тру
      state.isRegistered = true;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      if (!action.payload) {
        return;
      }
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      //  action.payload - це наш обект юзера
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
  },
});

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   // extraReducers: {},
//   extraReducers: {
//     // ми викоистовумо асинк санк, тому тут екстаедюсеи, для коожного кейсу - фулфілд - коли все добе, пендінг, реджекткд робимо міні редюсери
//     [authOperations.register.fulfilled](state, action) {
//       // також ми викоистовуемо тут імме, тому можемо якоби мутіpовати наш стейт (а це цілий обьект) напряму (тобто його копію).
//       console.log(action.payload);
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       // и успішній реєстраціі ставимо із логін тру
//       state.isRegistered = true;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logIn.fulfilled](state, action) {
//       if (!action.payload) {
//         return;
//       }
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logOut.fulfilled](state, action) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [authOperations.fetchCurrentUser.pending](state, action) {
//       state.isFetchingCurrentUser = true;
//     },
//     [authOperations.fetchCurrentUser.fulfilled](state, action) {
//       //  action.payload - це наш обект юзера
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//     },
//     [authOperations.fetchCurrentUser.rejected](state, action) {
//       state.isFetchingCurrentUser = false;
//       state.error = action.payload;
//     },
//   },
// });

export default authSlice.reducer;
