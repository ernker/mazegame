export function runcode(code){
    return dispatch => {
        window.runCode(code)
            .then(rez => {
                dispatch(actionTest(rez))
            })
        .catch ( fail => {
            dispatch(actionFAIL(fail))
        })

        }
}

export function actionTest(rez){
    return {
       type: 'CODE',
       runcode: rez
    };

}

export function actionFAIL(){
    return {};
}
