import React, { useContext, useEffect, Component } from 'react';
import { GlobalContext } from './../../../context/GlobalState';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
    View, Text, ActivityIndicator, TouchableHighlight, FlatList
} from 'react-native';
import BookItem from './../components/BookItem';

const BOOKS_QUERY = gql`
    query BooksQuery {
        books {
            id
            volumeInfo {
                description
                title
                authors
                imageLinks {
                  thumbnail
                }
            }
        }
    }
`

export class BookLayout extends Component {
    render() {
        return (
            <React.Fragment>
            <Query query={BOOKS_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <ActivityIndicator/>;
                    if (error) console.log(error);
                    return <React.Fragment>
                            <FlatList
                            data={data.books}
                            renderItem={({ item, index, separators }) => (
                                <TouchableHighlight
                                    key={item.key}
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
