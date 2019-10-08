import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reducers from './reducers';
import thunk from './middleware/index';
import logger from 'redux-logger';

export default createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

