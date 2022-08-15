import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './authSlice'
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
import storage from "./storage";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
}




const rootReducer = combineReducers(
    {
        auth:authReducer,
        // auth: authReducer
    }
)

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [REHYDRATE, PERSIST, REGISTER, FLUSH, PAUSE, PURGE]
            },
        })
})

export const persistor = persistStore(store)

export default store
