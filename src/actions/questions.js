import {saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

// Asynchronous Action Creator
// Manages asynchronous requests

export function handleSaveQuestion (question) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion(question)
            .then ((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}






export function saveQuestionAnswer (answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        answer,
    }
}

