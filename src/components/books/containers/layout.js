import React, { useContext, useEffect, Component } from 'react';
import { GlobalContext } from './../../../context/GlobalState';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
    View, Text, ActivityIndicator, TouchableHighlight, FlatList
} from 'react-native';
import BookItem from './../components/BookItem';

const BOOKS_QUERY = gql`
    query Books($getBooksInput: GetBooksInput!) {
        Books(getBooksInput: $getBooksInput) {
            id
            volumeInfo {
                description
                title
                imageLinks {
                  thumbnail
                }
            }
        }
    }
`

export class BookLayout extends Component {
    render() {
        const getBooksInput = {"query": "a", "maxResults": 10};
        return (
            <React.Fragment>
            <Query query={BOOKS_QUERY} variables={{getBooksInput}}>
                {({ loading, error, data }) => {
                    if (loading) return <ActivityIndicator/>;
                    if (error) console.log(error);
                    return <React.Fragment>
                            <FlatList
                            data={data.Books}
                            renderItem={({ item, index, separators }) => (
                                <TouchableHighlight
                                    key={item.id}
                                    onShowUnderlay={separators.highlight}
                                    onHideUnderlay={separators.unhighlight}>
                                    <BookItem key={index} book={item}></BookItem>
                                </TouchableHighlight>
                            )}/>
                        </React.Fragment>
                }}
            </Query>
            </React.Fragment>
        )
    }
}
