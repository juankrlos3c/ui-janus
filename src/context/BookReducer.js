export default (state, action) => {
    switch (action.type) {
        case 'SET_BOOK':
            return {
                ...state,
                currentBook: action.payload
            }
        case 'SET_BOOKS':
            return {
                ...state,
                loading: false,
                books: action.payload
            }
        case 'GET_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'SET_CURRENT_USER':
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
