import React from 'react';
import { Header } from '../../sections/components/header';
import { BookLayout } from '../../books/containers/layout';

import {
    View,
    Text
  } from 'react-native';

export const Home = (props) => {
    return (
        <View>
            <Header user={props.user}/>
            <BookLayout></BookLayout>
        </View>
        )
}

export default Home;