export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER';

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id:id,
    };
}

export function removeAuthedUser(id) {
    return {
        type: REMOVE_AUTHED_USER,
        id: id,
    };
}

export function handleSetAuthedUser(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id));
    };
}

export function handleRemoveAuthedUser(id) {
    return (dispatch) => {
        dispatch(removeAuthedUser(id));
    };
}
