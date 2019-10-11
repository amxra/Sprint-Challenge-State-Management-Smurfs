import * as types from './actionType';

const initialValue = 0;
export default function smurfReducer (state = initialValue, action) {
    switch (action.type) {
        case types.ADD_SMURF:
            return
        default:
            return state;
    }
}

