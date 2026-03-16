import { Buy_IceCreams } from "./iceCreamTypes"

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case Buy_IceCreams:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default: return state
    }
}

export default iceCreamReducer