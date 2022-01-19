import { FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
    monster: {},
    error: ''
};

export const monsterReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FETCH_SUCCESS:
            return {
                ...state,
                monster: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}