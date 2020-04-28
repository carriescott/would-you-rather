import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions} from './questions';
import {showLoading, hideLoading} from 'react-redux-loading';

// Initial thunk action creator
export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
    };
}

