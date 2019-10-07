import { combineReducers } from 'redux';

import user from './user';
import UI from './UI';

const reducers = combineReducers({
  user,
  UI,
})

export default reducers;