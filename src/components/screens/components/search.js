import {
    TextInput,
    StyleSheet
} from 'react-native'
import React, {Component} from 'react-native';
import { connect } from 'react-redux';
class Search extends Component {
    render() {
        return (
            <TextInput
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search book"
            onSubmitEditing={this.searchActionSubmit}
            onChangeText={this.searchActionChange}
            style={styles.input}></TextInput>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    }
})

export default connect(null)(Search);
