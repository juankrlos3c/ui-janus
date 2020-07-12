import React, { Component } from 'react';

import {
    View, 
    Image, 
    StyleSheet
} from 'react-native';
import { API } from '../../../../utils/api'
import { ReadZone } from '../components/readZone';
import { Header } from '../components/header';
import { Controls } from '../components/controls';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

function mapsStateTooProps(state) {
    return {
        list: state.currentState
    }
}

class Player extends Component {
    state = {
        currentBook: [],
        opacity: new Animated.Value(0)
    }
    async componentDidMount() {
        const book = API.getBooks()
    }
    componentDidMount() {
        Animated.timing(
            this.setState.opacity,
            {
                toValue: 1,
                duration: 1000
            }
        ).start();
    }
    render() {
        return (
            <Animated.View
                style={styles.animation}>
                <View style={styles.container}>
                    <Header/>
                    <ReadZone/>
                    <Controls/>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    animation: {
        flex: 1,
        opacity: this.state.opacity
    }
})

export default connect(mapsStateTooProps)(Player);