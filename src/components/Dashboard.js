import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    state = {
        showAnsweredQuestions: false,
    }

    render() {
        const location = this.props.location.pathname;
        if (this.props.authedUser === null) {
            return <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            />
        }
        const answered = this.props.answered;
        const unanswered = this.props.unanswered;
        const showAnsweredQuestions = this.state.showAnsweredQuestions;

        return (
            <div> {this.props.loading === true
                ? null
                : <section className='center'id='questions-list-container'>
                <div className='center btn-container'>
                    <button
                        className={showAnsweredQuestions ? 'btn margin-10-lr' : 'active btn margin-10-lr' }
                        onClick={() => this.setState({ showAnsweredQuestions: false })}>
                        Unanswered
                    </button>
                    <button
                        className={showAnsweredQuestions ? 'active btn margin-10-lr' : 'btn margin-10-lr'}
                        onClick={() => this.setState({ showAnsweredQuestions: true })}>
                        Answered
                    </button>
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
            </section>
            }

            </div>
        )
    }
}

function mapStateToProps ({authedUser, questions, users, loadingBar}) {
    const user = users[authedUser];
    const questionsArray = Object.values(questions);
    const authedUserAnswerIds = (user !== undefined)
        ? Object.keys(user.answers) : [];
    const answered = questionsArray.filter((question) => authedUserAnswerIds.includes(question.id))
        .sort((a,b) => b.timestamp - a.timestamp);
    const unanswered = questionsArray.filter((question) => !authedUserAnswerIds.includes(question.id))
        .sort((a,b) => b.timestamp - a.timestamp);

    return {
        loadingBar,
        loading: loadingBar.default === 1,
        authedUser,
        questions,
        users,
        user,
        answered,
        unanswered,
    };
}

export default connect(mapStateToProps)(Dashboard)
