import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionForm from  './QuestionForm';
import QuestionStats from './QuestionStats';
import NoMatchFound from './NoMatchFound';
import { Redirect } from "react-router-dom";

class Poll extends Component {

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

        const authedUser = this.props.authedUser;
        const questions = this.props.questions;
        const id = this.props.match.params.question_id;
        const matchFound = Object.keys(questions).includes(id);
        const users = this.props.users;
        let isAnswered, questionObject;

        if (matchFound) {
            const question = questions[id];
            const author = question.author;
            const authorObject = users[author];
            const name = authorObject.name;
            const pickeOptionOne = question.optionOne.votes.includes(this.props.authedUser);
            const pickeOptionTwo = question.optionTwo.votes.includes(this.props.authedUser);

            questionObject = {
                id: question.id,
                author: name,
                avatarURL: authorObject.avatarURL,
                optionOneText: question.optionOne.text,
                optionTwoText: question.optionTwo.text,
                optionOneTotal: question.optionOne.votes.length,
                optionTwoTotal: question.optionTwo.votes.length,
                totalVotes: (question.optionOne.votes.length + question.optionTwo.votes.length),
                optionOnePercent: ((question.optionOne.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length))*100),
                optionTwoPercent: ((question.optionTwo.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length))*100),
                pickedOptionOne: pickeOptionOne,
                pickedOptionTwo: pickeOptionTwo
            }

            isAnswered =
                question.optionOne.votes.includes(authedUser) ||
                question.optionTwo.votes.includes(authedUser);
        }

        let render = null;

        if (!matchFound) {
            render = <NoMatchFound />
        } else if (matchFound && !isAnswered) {
            render = <QuestionForm question={questionObject}/>
        } else if (matchFound && isAnswered) {
            render = <QuestionStats question={questionObject}/>
        }

        return (
            <div>
                {render}
            </div>
        )
    }
}

function mapStateToProps ({authedUser, questions, users}) {
    return {
        questions,
        authedUser,
        users
    };
}

export default connect(mapStateToProps)(Poll)