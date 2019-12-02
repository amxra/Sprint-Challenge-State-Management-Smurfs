import * as types from './actionTypes';
import axios from 'axios';

const smurfApi = 'http://localhost:3333/smurfs'


export function addSmurf(smurfs) {
    return {
        type: types.ADD_SMURF
        payload: smurfs,
    }
}


export const getSmurf = () => dispatch => {
    axios.get(smurfApi)
        .then(res => {
            console.log(res.data);
            dispatch(addSmurf(res.data));
        })
        .catch(err => {
            console.log(err.message)
        })
}