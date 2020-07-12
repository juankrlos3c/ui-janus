import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator
} from 'react-native'

export const Header = (props) => {
    return (
        <View>
            <SafeAreaView>
                <Text>{props.user}</Text>
            </SafeAreaView>
        </View>
    )
}
