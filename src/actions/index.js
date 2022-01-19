import axios from 'axios';

export const getCoffee = () => (dispatch) => {
    // dispatch()
    axios.get('https://coffee.alexflipnote.dev/random')
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            console.error(err);
        })
}