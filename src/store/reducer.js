import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:

            // returning a new object
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
           /*  return {
                counter: state.counter + 1
            } */
        case actionTypes.DECREMENT:
            return {
                ...state,  // Spread operator
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,  // Spread operator
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,  // Spread operator
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            /* const newArray = [...state.results];
            newArray.splice(id, 1);*/
            const newArray = state.results.filter(result => result.id !== action.resultDelId);
            return {
                ...state,
                results: newArray
            }
    }   
    return state;
}

export default reducer;