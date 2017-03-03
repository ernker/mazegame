import { initState } from '../index.js'

export default function reducer(state=initState, action) {

    switch(action.type){
        case 'NAME':
            let obj = Object.assign({},state.app)
            obj.name = action.name

            let newobj = Object.assign({}, state, {
                app: obj
            })

            return newobj
        case 'LOGOUT':
            return initState
        default:
            return state
    }
}