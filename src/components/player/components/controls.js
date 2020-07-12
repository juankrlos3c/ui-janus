import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'
function Controls(props) {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor="red"
            hitSlop={{
                left: 5,
                top: 5,
                right: 5,
                bottom: 5
            }}>
            {
                props ? 
                <Text>Pause</Text>:
                <Text>Play</Text>
            }
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Controls;