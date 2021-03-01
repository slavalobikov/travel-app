import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import LangReducer from "./reducers/LangReducer";
import CountryCardsReducer from "./reducers/CountryCardsReducer";



let reducers = combineReducers({
    LangReducer,
    CountryCardsReducer,
});

const persistConfig = {
    key: 'ReactEPAMLobikov',
    storage: storage,
    whitelist: ['LangReducer'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, reducers);



const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };