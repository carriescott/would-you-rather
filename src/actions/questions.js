import {saveQuestion, saveQuestionAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

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

function addQuestionAnswer (info) {
    return {
        type: ADD_QUESTION_ANSWER,
        info
    }
}

// Asynchronous Action Creator
// Manages asynchronous requests

export function handleSaveQuestion (question) {
    return (dispatch, getState) => {
        // const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion(question)
            .then ((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveAnswer (info) {
    return (dispatch, getState) => {
        // const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer(info)
            .then ((question) => dispatch(addQuestionAnswer(info)))
            .then(() => dispatch(hideLoading()))
    }
}





