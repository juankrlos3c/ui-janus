import React, { createContext, useReducer } from 'react';
import BookReducer from './BookReducer';
import axios from 'react-native-axios';
const initialState = {
    books: [],
    currentBook: {},
    error: null,
    loading: true,
    currentUser: {}
};

export const GlobalContext = createContext(initialState);

//provider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BookReducer, initialState);

    async function getBooks(id) {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=free-ebook&key=AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM`)
        dispatch({
            type: 'SET_BOOKS',
            payload: res
        })
    }

    async function setCurrentBook(id) {
        try {
            dispatch({
                type: 'SET_BOOK',
                payload: id
            })
        } catch (err) {
            dispatch({
            type: 'GET_ERROR',
            payload: err.response.data.error
        })
        }
    }

    function setCurrentUser(userLogged) {
        const userLoggedState = userLogged.user;
        getBooks(userLoggedState.id)
        dispatch({
            type: 'SET_CURRENT_USER',
            payload: userLogged.user
        })
    }

    return (<GlobalContext.Provider value={{
        books: state.transactions,
        error: state.error,
        initialLoading: state.loading,
        getBooks,
        setCurrentBook,
        setCurrentUser,
        googleId: state.currentUser.id
    }}>
        {children}
    </GlobalContext.Provider>);
}
