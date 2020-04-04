import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {

    state = {
        showAnsweredQuestions: false,
    }

    render() {

        if (this.props.authedUser === null) {
            return <Redirect to='/login' />
            }

        const user = this.props.user;
        const answered = this.props.answered;
        const unanswered = this.props.unanswered;
        const showAnsweredQuestions = this.state.showAnsweredQuestions;
        console.log('props', this.props);
        return (
            <div className='center'>
                <h3 className='center'>Would You Rather?</h3>
                <div className='center'>
                    <button onClick={() => this.setState({ showAnsweredQuestions: false })}>Unanswered</button>
                    <button onClick={() => this.setState({ showAnsweredQuestions: true })}>Answered</button>
                </div>
                <ul className={showAnsweredQuestions ? 'show' : 'hide'}>
                    {answered.map((question) => (
                        <li key={question.id}>
                            <Question question={question} />
                        </li>
                    ))}
                </ul>

                <div className='center'>
                    <ul className={showAnsweredQuestions ? 'hide' : 'show'}>
                        {unanswered.map((question) => (
                            <li key={question.id}>
                                <Question question={question} />
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        )
    }
}

// Get questions from store and sort them by their timestamps
// filter questions array for both answered and unanswered questions in order to get the object of the question
// including the timestamp which will enable the list of questions (answered and unanswered) to be sorted by date
// created.

function mapStateToProps ({authedUser, questions, users}) {
    const user = users[authedUser];
    const questionsArray = Object.values(questions);
    const authedUserAnswerIds = (user !== undefined)
        ? Object.keys(user.answers) : [];
    const authedUserAnsweredArray = questionsArray.filter((question) => authedUserAnswerIds.includes(question.id));
    const authedUserUnAnsweredArray = questionsArray.filter((question) => !authedUserAnswerIds.includes(question.id));
    const answered = authedUserAnsweredArray.sort((a,b) => b.timestamp - a.timestamp);
    const unanswered = authedUserUnAnsweredArray.sort((a,b) => b.timestamp - a.timestamp);

    return {
        authedUser,
        questions,
        users,
        user,
        answered,
        unanswered,
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[a].timestamp - questions[b].timestamp),
    };

}

// invoke second function that is returned and passing it in Dashboard
export default connect(mapStateToProps)(Dashboard)