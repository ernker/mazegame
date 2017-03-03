
export function runcode(code){
    return {
        type: "CODE",
        payload: code
    }
}


export function runcode2(code){
    return dispatch => {
        .then(code => {
            dispatch(actionTest(payload))
        })
        .catch ( fail => {
            dispatch(actionFAIL(fail))
        })

        }
    }
}

export function actionTest(){
    return ()

}

export function actionFAIL(){
    retunr ()
}