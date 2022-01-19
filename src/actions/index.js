import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getMonster = () => (dispatch) => {
    // dispatch()
    axios.get('https://www.dnd5eapi.co/api/monsters/aboleth')
        .then(resp => {
            console.log(resp.data);
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {
            console.error(err);
        })
}

export const fetchSuccess = (monster) => {
    return({type: FETCH_SUCCESS, payload: monster})
}