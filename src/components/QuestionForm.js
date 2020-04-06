import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {handleSaveAnswer} from "../actions/questions";

//controlled component
class QuestionForm extends Component {

    state = {
        selectedOption: '',
        redirect: false
    }

    handleChange = (e) => {
        const selectedOption = e.target.value;

        this.setState(() => ({
            selectedOption: selectedOption
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const authedUser = this.props.authedUser;
        const qid = this.props.question.id;
        const answer = this.state.selectedOption;

        const info = {
            authedUser,
            qid,
            answer
        }
        console.log('info', info);
        const { dispatch } = this.props;
        // // add question to store
        dispatch(handleSaveAnswer(info))
        // //return state to ''
        this.setState(() => ({
            optionSelected: '',
            redirect: true
        }))
    }

    render() {

        const optionOne = this.state.optionSelected;
        const question = this.props.question;
        const id = this.props.question.id;

        if (this.state.redirect) {

            return <Redirect to={`/questions/${id}`} />
        }

        console.log(this.props);
        return (
            <div className='center'>
                <div className='card'>
                    <div className='nameContainer'>
                        <p>{question.author} asks would you rather ...</p>
                    </div>
                    <div className='unansweredQuestion'>
                        <img className="avatar" src={question.avatarURL}/>
                        <form onSubmit={this.handleSubmit}>
                            <div id='radioContainer'>
                                <div className="radio">
                                    <label>
                                        <input type="radio"
                                               value="optionOne"
                                               checked={this.state.selectedOption === 'optionOne'}
                                               onChange={this.handleChange}/>
                                        {question.optionOneText}
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio"
                                               value="optionTwo"
                                               checked={this.state.selectedOption === 'optionTwo'}
                                               onChange={this.handleChange}/>
                                        {question.optionTwoText}
                                    </label>
                                </div>
                            </div>
                            <button
                            className='btn margin-tb-8'
                            type='submit'
                            disabled={this.state.selectedOption === ''}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

function mapStateToProps ({authedUser}) {

    return {
        authedUser
    };
}

// invoke second function that is returned and passing it in Dashboard
export default connect(mapStateToProps)(QuestionForm)