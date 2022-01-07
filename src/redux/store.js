import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux"
import orderReducer from "./orderRedux"

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
const rootReducer = combineReducers({user:userReducer,cart:cartReducer,orders:orderReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)

 

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export let persistor = persistStore(store)