import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleSaveAnswer } from "../actions/questions";

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
        const { dispatch } = this.props;
        dispatch(handleSaveAnswer(info))
        this.setState(() => ({
            optionSelected: '',
            redirect: true
        }));
    }

    render() {

        const question = this.props.question;
        const id = this.props.question.id;

        if (this.state.redirect) {
            return <Redirect to={`/questions/${id}`} />
        }

        return (
            <section className='center margin-top-16' id='question-container'>
                <div className='card' id='question-content'>
                    <div className='name-container'>
                        <p>{question.author} asks would you rather ...</p>
                    </div>
                    <div className='unanswered-question'>
                        <img className="avatar"
                             src={question.avatarURL}
                             alt={`Avatar of ${question.author}`}
                        />
                        <form onSubmit={this.handleSubmit}>
                            <div id='radio-container' className='margin-tb-8'>
                                <div className='radio margin-tb-8'>
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
                            <button className='btn margin-tb-16'
                                    type='submit'
                                    disabled={this.state.selectedOption === ''}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps ({authedUser}) {

    return {
        authedUser
    };
}

export default connect(mapStateToProps)(QuestionForm)
