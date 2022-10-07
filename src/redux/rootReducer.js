import { combineReducers } from 'redux';
import studentReducer from './Student/student.reducer';

const rootReducer = combineReducers({
    student: studentReducer,
});

export default rootReducer;