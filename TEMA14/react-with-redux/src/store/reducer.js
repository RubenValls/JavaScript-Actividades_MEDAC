import {CHARGE_TASK, COMPLETE_TASK, PRIOR_TASK} from './Task/actions.js'

export const taskReducer = (state = [], action) => {
    switch(action.type){
        case CHARGE_TASK:
            console.log(action.payload);
            return state;
        case COMPLETE_TASK:
            return state;
        case PRIOR_TASK:
            return state;
        default:
            return state;
    }
};