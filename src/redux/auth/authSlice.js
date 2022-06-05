// тут буде слайс через трк кверіQuery;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { authSelectors } from '../../redux/auth';
// import { useSelector } from 'react-redux';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Auth'],
  keepUnusedDataFor: 0,
  endpoints: builder => ({
    // post - щоб заеестувати
    registerAuth: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
      providesTags: ['Auth'],
      //   headers: Authorization : `Bearer ${token}`,
    }),
    // для логина
    logInAuth: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    // для  логаута
    logOutAuth: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    // для перевірки на текущего користувача
    fetchCurrentUser: builder.query({
      query: () => ({
        url: '/users/current',
        // method: '',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useRegisterAuthMutation,
  useLogInAuthMutation,
  useLogOutAuthMutation,
  useFetchCurrentUserQuery,
} = authApi;
