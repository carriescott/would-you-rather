import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const user = this.props.user;
        console.log('props', this.props);
        console.log('user', user);
        return (
            <div>
                <h3 className='center'>Would You Rather?</h3>
                {/*<h3>{this.props.user.name}</h3>*/}
                {/*<ul className='dashboard-list'>*/}
                {/*    {test.map((question) => (*/}
                {/*            <li key={{question.id}}>*/}
                {/*                <div> ANSWERED QUESTION ID: {question.id}</div>*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    )}*/}
                {/*</ul>*/}
                {/*<ul className='dashboard-list'>*/}
                {/*    {this.props.answered.map((question) => (*/}
                {/*        <li key={{question}}>*/}
                {/*            <div> ANSWERED QUESTION ID: {question.id}</div>*/}
                {/*        </li>*/}
                {/*        )*/}
                {/*    )}*/}
                {/*</ul>*/}
                {/*<ul className='dashboard-list'>*/}
                {/*    {this.props.questionIds.map((id) => (*/}
                {/*        <li key={{id}}>*/}
                {/*            <div> QUESTION ID: {id}</div>*/}
                {/*        </li>*/}
                {/*        )*/}
                {/*    )}*/}
                {/*</ul>*/}
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