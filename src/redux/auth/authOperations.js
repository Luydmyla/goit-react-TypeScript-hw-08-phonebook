import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// const errorComposer = error => {
//   return () => {
//     const statusCode = error.response ? error.response.status : null;
//     if (statusCode === 404) {
//       toast.error('The requested resource does not exist or has been deleted');
//     }
//     if (statusCode === 401) {
//       toast.error('Please login to access this resource');
//     }
//   };
// };
// axios.interceptors.response.use(undefined, function (error) {
//   error.handleGlobally = errorComposer(error);
// return Promise.reject(error);
// });
// в аксіос є defaults.headers, це  дає нам змогу добавляти заголовок до кожного запиту
// ми запишемо common - це значить для всіх запитів
// чіпляємо заголовок - Authorization
const token = {
  // просто сетить цей токен
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  // ця функція знімає токен, тобто заголовок авторизація є, але порожня
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// /*
//  * POST @ /users/signup
//  * body: { name, email, password }
//  * После успешной регистрации добавляем токен в HTTP-заголовок
//  */

// credentials - це обект, який доходить сюди під час сабміта форми при дисспатчі
// з нейм, емейл і паролем
//
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      // коли користувач заеєстровано - сетим токен
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      toast.info(
        'Упс, щось пішло не так...Перевірте, чи вірно ви вказали скриньку та створіть надійний пароль  - він має містити не меньше 6 та не більше 14 символів '
      );
      return thunkAPI.rejectWithValue();
      // Добавить обработку ошибки error.message
    }
  }
);

// /*
//  * POST @ /users/login
//  * body: { email, password }
//  * После успешного логина добавляем токен в HTTP-заголовок
//  */
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    //  Добавить обработку ошибки error.message
    // alert(error.message);
    // alert(
    //   'Соррі, такого користувача у нас немає, перевірте, чи вірно ви ввели логін і пароль'
    // );
    toast.info(
      'Соррі, такого користувача у нас немає, перевірте, чи вірно ви ввели логін і пароль'
    );
    return thunkAPI.rejectWithValue();
    // return {
    //   user: null,
    //   token: null,
    // };
  }
});

// /*
//  * POST @ /users/logout
//  * headers: Authorization: Bearer token
//  * После успешного логаута, удаляем токен из HTTP-заголовка
//  */
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue();
    //  Добавить обработку ошибки error.message
  }
});
// /*
//  * GET @ /users/current
//  * headers:
//  *    Authorization: Bearer token
//  *Загружаємо наш приложеніе, запускаємо fetchCurrentUser в любому випадку,
//якщо токен був в локалсторіджі і пперсист запхнув його в редакс, то
// то ми робимо запит, якщо нем було, то виходимо звідси не робимо запит.
//  * 1. Забираем токен из стейта через getState()
//  * 2. Если токена нет, выходим не выполняя никаких операций
//  * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
//  */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    console.log(thunkAPI.getState());

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    // якщо нема - виходимо
    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      // return state;
      // якщо ми венемо стейт,то в слайсі спрацю отім ізлогін - ту і ми будемо бачити юземеню знову, навіть, якщо ми не зареестровані ще
      console.log(state);
      // якщо нам треба щось відхилити, то краще його  реджекнути
      console.log(thunkAPI.rejectWithValue());
      return thunkAPI.rejectWithValue();
    }
    // сетимо токен і робимо запит
    token.set(persistedToken);
    try {
      // const response = await axios.get('/users/current');
      // console.log(response);
      const { data } = await axios.get('/users/current');
      console.log({ data });
      return data;
    } catch (error) {
      console.log(error.response.status);
      error.response.status === 401
        ? toast.info(
            'Соррі,виникла помилка, спробуйте перезаважтажити сторінку'
          )
        : toast.info('Упс, щось пішло не так...Спробуйте ще раз');
      return thunkAPI.rejectWithValue(error);
      //   Добавить обработку ошибки error.message
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
