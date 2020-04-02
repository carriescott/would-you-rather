import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {

    state = {
    }

    render() {
        const question = this.props.question;
        console.log('props', this.props);
        return (
            <div>
                <p>{question.id}</p>
            </div>
        )
    }
}

// invoke second function that is returned and passing it in Dashboard
export default Question