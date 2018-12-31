import * as types from './types';

export const counterClick =  () => {
    return dispatch => {
        dispatch({
            type: types.COUNTER_CLICK
        })
    }

};

export const increaseTimer = () => ({
    type: types.INCREASE_TIMER
});