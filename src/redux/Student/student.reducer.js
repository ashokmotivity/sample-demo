import { ADD_STUDENT } from './student.types';


const INITIAL_STATE = {
    List: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_STUDENT:
           return {
             ...state, List:[...state.List,action.payload],
           };
         default: return state;
    }

};

export default reducer;