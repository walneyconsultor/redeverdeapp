import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducers'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, routerMiddleware(routerHistory))
  )
)
export default store
