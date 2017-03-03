import { initState } from '../index.js'

export default function reducer(state=initState, action) {

    switch(action.type){
        case 'CODE':
            let codeObj = Object.assign({}, state.code)

            codeObj.runcode = action.runcode;

            let newcodeObj = Object.assign({}, state, {
                code: codeObj
            })

            return newcodeObj

        case 'LOGOUT':
            return initState
        default:
            return state
    }
}
