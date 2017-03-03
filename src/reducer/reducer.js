import { initState } from '../index.js'

export default function reducer(state=initState, action) {
    let newState = Object.assign({}, state);

    switch(action.type){
        /*case 'NAME':
            let obj = Object.assign({},state.app)
            obj.name = action.name

            let newobj = Object.assign({}, state, {
                app: obj
            })

            return newobj*/
            
        case 'CODE':
            newState.runcode = action.payload;

            return newState;

        case 'LOGOUT':
            return initState;

        case 'MOVE':
            newState.currentCoords = action.moveToCoords;

            return newState;

        default:
            return newState
    }
}
