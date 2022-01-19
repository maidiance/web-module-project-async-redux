import { combineReducers } from 'redux';
import { monsterReducer as mob } from './dndReducer';

export default combineReducers({
    mob,
});