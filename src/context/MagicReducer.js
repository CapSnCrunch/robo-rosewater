const magicReducer = (state, action) => {
    switch(action.type) {
        case 'GET_CARDS':
            return {
                ...state,
                cards: action.payload,
                loading: false,
            }
        case 'SET_FILTERS':
            return {
                ...state,
                filters: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default magicReducer