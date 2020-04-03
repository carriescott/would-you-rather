import React, { Component } from 'react';

//controlled component
class NoMatchFound extends Component {

    render() {
        return (
            <div className='center'>
                <p>No Match Found</p>
            </div>
        )
    }
}

// function mapStateToProps ({authedUser}) {
//
//     return {
//         authedUser
//     };
// }

// invoke second function that is returned and passing it in Dashboard
export default NoMatchFound