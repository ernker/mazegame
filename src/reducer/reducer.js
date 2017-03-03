import { initState } from '../index.js'

export default function reducer(state=initState, action) {
    let newState = Object.assign({}, state);

    switch(action.type){
        case 'CODE':
            console.log('Reduced: ', action);
            console.log('State: ', newState);
            newState.code.runcode = action.runcode;

            return newState;

        case 'LOGOUT':
            return initState;

        case 'MOVE':
            newState.app.currentCoords = action.moveToCoords;
            return newState;

        default:
            return newState
    }
}
