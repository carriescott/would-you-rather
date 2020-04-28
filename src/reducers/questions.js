import  { RECEIVE_QUESTIONS } from '../actions/questions';
import  { ADD_QUESTION } from '../actions/questions';
import  { ADD_QUESTION_ANSWER } from '../actions/questions';

export default function questions (state={}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION :
            const question = action.question
            return {
                ...state,
                [question.id]: question
            };
        case ADD_QUESTION_ANSWER:
            const info = action.info
            return {
                ...state,
                [info.qid]: {
                ...state[info.qid],
                    [info.answer]: {
                ...state[info.qid][info.answer],
                votes: state[info.qid][info.answer].votes.concat([info.authedUser])
                }
            }};
        default :
            return state
    }
};
