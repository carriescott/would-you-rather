import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

    state = {
        question: this.props.question,
    }

    render() {
        const question = this.props.question;
        const name = this.props.users[question.author].name;
        const avatar = this.props.users[question.author].avatarURL;
        const id = question.id;

        return (
                <section className='card' id='question-container'>
                    <div className='col' id='question-content'>
                        <div className='name-container'>
                            <p>{name} asks would you rather ...</p>
                        </div>
                        <div className='question-information'>
                            <div className='col'>
                                <img className='avatar'
                                     src={avatar}
                                     alt={'Avatar of ${name}'}
                                />
                            </div>
                            <div className='col width-100'>
                                <p> ...{question.optionOne.text}... </p>
                                <Link to={`/questions/${id}`}>
                                    <button className='btn'>
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

function mapStateToProps ({users}) {
    return {
        users,
    };
}

export default withRouter(connect(mapStateToProps)(Question))