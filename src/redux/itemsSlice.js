import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { authSelectors } from '../../redux/auth';
// import { useSelector } from 'react-redux';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      // const token = useSelector(authSelectors.getToken);
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contact'],
  keepUnusedDataFor: 0,
  endpoints: builder => ({
    // фетч - щоб забиpать на бекенді все що е
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    // для видалення контакту
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        // /contacts/{contactId}
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    // для ствоpення контакту
    createContacts: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    // для оновлення контакту
    updateContacts: builder.mutation({
      query(data) {
        const { contactId, ...body } = data;
        return {
          url: `/contacts/${contactId}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
  useUpdateContactsMutation,
} = contactsApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://628227359fac04c654101013.mockapi.io',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     // фетч - щоб забиpать на бекенді все що е
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contact'],
//     }),
//     // для видалення контакту
//     deleteContacts: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     // для ствоpення контакту
//     createContacts: builder.mutation({
//       query: body => ({
//         url: '/contacts',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useDeleteContactsMutation,
//   useCreateContactsMutation,
// } = contactsApi;
