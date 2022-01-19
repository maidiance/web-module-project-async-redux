import axios from 'axios';

export const getMonster = () => (dispatch) => {
    // dispatch()
    axios.get('https://www.dnd5eapi.co/api/monsters/aboleth')
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            console.error(err);
        })
}