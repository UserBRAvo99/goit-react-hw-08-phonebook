import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { contactsReducer } from './contactSlice';

export const store = configureStore({
  reducer: contactsReducer,
});

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   witelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig),
//     contacts: contactsReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
