/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * The central redux store of our app is created and exported to be used from here.
 *
 * Follow below given link to purge the state stored by redux-persist:
 * https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992
 * @flow
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers/';

const APP_VERSION = process.env.REACT_APP_VERSION || 0;

const persistConfig = {
  key: 'root',
  version: APP_VERSION,
  storage,
  stateReconciler: autoMergeLevel2,
  // blacklist: [],
  // whitelist: []
};

const middlewares = [thunkMiddleware];

const configureStore = initialState => {
  let enhancer = {};
  const persistentReducer = persistReducer(persistConfig, rootReducer);

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    enhancer = composeEnhancers(applyMiddleware(...middlewares));
  } else {
    enhancer = compose(applyMiddleware(...middlewares));
  }

  const store = createStore(persistentReducer, initialState, enhancer);

  if (
    module.hot &&
    module.hot.accept &&
    typeof module.hot.accept === 'function'
  ) {
    module.hot.accept(() => {
      store.replaceReducer(
        // eslint-disable-next-line global-require
        persistReducer(persistConfig, require('./reducers/index').default)
      );
    });
  }

  return {
    store,
    persistor: persistStore(store),
  };
};

export default configureStore({});
