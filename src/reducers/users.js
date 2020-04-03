import  { RECEIVE_USERS } from '../actions/users'
import {ADD_QUESTION, ADD_QUESTION_ANSWER} from '../actions/questions'


export default function users (state={}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };
        //    review to understand is happening there - compare to tweet replies
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question]),
                }
            };
        case ADD_QUESTION_ANSWER :
            const info = action.info
            return {
                ...state,
                [info.authedUser]: {
                    ...state[info.authedUser],
                    answers: {
                    ...state[info.authedUser].answers,
                        [info.qid]: info.answer
                }
            }};

        default :
            return state
    }
}
