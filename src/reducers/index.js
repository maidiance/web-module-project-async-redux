import { combineReducers } from 'redux';
import { coffeeReducer as coffee } from './coffeeReducer';

export default combineReducers({
    coffee,
});