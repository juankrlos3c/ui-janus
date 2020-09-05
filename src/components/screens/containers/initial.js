import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './../../../context/GlobalState';
import { Home } from './home';
import InitLoading from './../components/init-loading';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
    View, Text
} from 'react-native';

const USER_QUERY = gql`
    query User($googleId: String!) {
        User(googleId: $googleId) {
            givenName,
            photoUri
        }
    }
`

export const Initial = () => {
    const { getBooks, initialLoading, googleId } = useContext(GlobalContext);
    return (
        <React.Fragment>
            <Query query={USER_QUERY} variables={{googleId}}>
                {({ loading, error, data }) => {
                    const userInfo = data ? data.user.givenName : 'No User';
                    return (initialLoading || loading) ? <InitLoading></InitLoading> : <Home user={userInfo}></Home>
                }}
            </Query>
        </React.Fragment>
    )
}
