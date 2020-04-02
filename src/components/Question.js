import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {

    state = {
    }

    render() {
        const question = this.props.question;
        const name = this.props.users[question.author].name;
        const avatar = this.props.users[question.author].avatarURL;
        console.log('props', this.props);
        //map over the users for each question in order to obtain name and avatar.
        return (
            <div className='center'>
                <h3>Would You Rather?</h3>
                <p>{name}</p>
                <img className='avatar' src={avatar}/>
                <p> ...{question.optionOne.text}... </p>
                <button>View</button>
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
export default connect(mapStateToProps)(Question)