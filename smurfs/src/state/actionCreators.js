import * as types from './actionTypes';
import axios from 'axios';

const smurfApi = 'http://localhost:3333/smurf'


export function addSmurf() {
    return {
        type: types.ADD_SMURF
    }
}