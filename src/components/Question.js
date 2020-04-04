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

        console.log('props', this.props);

        //map over the users for each question in order to obtain name and avatar.
        return (

                <div className='card'>
                    <div className='col'>
                        <div className='nameContainer'>
                            <p>{name} asks would you rather ...</p>
                        </div>

                        <div className='questionInformation'>
                            <div className='col'>
                                <img className='avatar'
                                     src={avatar}
                                     alt={'Avatar of ${name}'}
                                />
                            </div>
                            <div className='col'>
                                <p> ...{question.optionOne.text}... </p>
                                <Link to={`/questions/${id}`}>
                                    <button className='btn'>
                                        View
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>

        )
    }
}


function mapStateToProps ({users}) {
    return {
        users,
    };
}

// invoke second function that is returned and passing it in Dashboard
export default withRouter(connect(mapStateToProps)(Question))