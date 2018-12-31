import * as types from '../actions/types';

const initialState = {
    counter: 0,
    timer: 0
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.COUNTER_CLICK:
            return {
                ...state,
                counter: state.counter + 1
            };
        case types.INCREASE_TIMER:
            return {
                ...state,
                timer: state.timer + 1
            };
        default:
            return state;
    }
};

export default rootReducer;