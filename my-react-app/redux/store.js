import { createStore } from 'redux';
import { combineReducers } from 'redux';
import itemsReducer from '../redux/reducers/itemsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(rootReducer);

export default store;
