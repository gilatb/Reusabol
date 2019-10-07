import { createStore, applyMiddleware, combineReducers} from 'redux';
import * as reducers from './reducers/index';
import thunk from './middleware/index';

export default createStore(combineReducers(reducers), applyMiddleware(thunk));

