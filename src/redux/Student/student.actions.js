import { ADD_STUDENT } from './student.types';


export const AddStudent = (data) => {
    return {
        type: ADD_STUDENT,
        payload:data
    };
};

