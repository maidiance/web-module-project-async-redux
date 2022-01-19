import { FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
    monster: {}
};

export const monsterReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FETCH_SUCCESS:
            return {
                ...state,
                monster: action.payload
            }
        default:
            return state;
    }
}