import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';
import thunk from './middleware/index';

export default createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

