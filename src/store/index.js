import { combineReducers, createStore, compose } from 'redux';
import initial from './modules/initial/reducer';
import reactotron from '../config/ReactotronConfig';

const appReducer = combineReducers({
  initial,
});

const store = createStore(appReducer, compose(reactotron.createEnhancer()));

export default store;
