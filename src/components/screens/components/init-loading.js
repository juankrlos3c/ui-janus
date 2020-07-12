import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { GoogleSignIns } from '../../authentification/GoogleSignins';

function InitLoading(props) {
    return (
        <View style={styles.container}>
            <Image
            source={require('../../../../assets/icons/JanusIconCircle.png')}
            style={styles.logo}/>
            <ActivityIndicator/>
            <GoogleSignIns></GoogleSignIns>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logo: {
        width: 150,
        height: 150,
        margin: 20
    }
})

export default InitLoading