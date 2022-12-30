import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['user']
};

//inicia o reducerPersis, passa como parametro as configus acima e os reducers que criamos que esta em /reducers.
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };