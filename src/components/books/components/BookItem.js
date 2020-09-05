import React from 'react';
import {
    View, Text, Image, StyleSheet, ImageBackground
} from 'react-native';
import { Avatar } from "react-native-elements";
export default function BookItem({
    book: { id, volumeInfo}
}) {
    getAuthorInitial = (authors) => {
        if (!authors) {
            return 'NN';
        }
        const mainAuthor = authors[0];
        const splitName = mainAuthor.split(' ');
        let initialsName = '';
        splitName.slice(0, 2).forEach(partName => {
            const firstCharacter = partName.substring(0, 1);
            initialsName = `${initialsName}${firstCharacter}`;
        });
        return initialsName.toUpperCase();
    }

    return (
        <React.Fragment>
            <ImageBackground blurRadius={2} source={{uri: volumeInfo.imageLinks.thumbnail}} style={styles.bookLayout}>
                <View style={styles.textArea}>
                </View>
                <Image source={{uri: volumeInfo.imageLinks.thumbnail}} style={styles.bookPortrait}>
                </Image>
            </ImageBackground>
            <View style={styles.bookInfo}>
                <View>
                <Avatar
                    size="small"
                    rounded
                    title={getAuthorInitial(null)}
                    icon={{name: 'user', type: 'font-awesome'}}
                    containerStyle={styles.bookInfoAuthorPic}
                    activeOpacity={0.7}/>
                </View>
                <View style={styles.bookInfoDetail}>
                    <Text style={styles.bookTitle}>{volumeInfo.title}</Text>
                    <Text style={styles.bookExtraInfo}>{volumeInfo.title}</Text>
                </View>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    textArea: {
        width: '50%',
        marginLeft: 20,
        fontFamily: "arial",
        margin: 20
    },
    bookPortrait: {
        width: 130,
        height: 210,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20
    },
    bookLayout: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: 250
    },
    bookInfo: {
        height: 70,
        backgroundColor: "#303432",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
        overflow: "hidden"
    },
    bookTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 15
    },
    bookExtraInfo: {
        color: "#B8BDBA",
        fontWeight: "500",
        fontSize: 11
    },
    bookInfoDetail: {
        backgroundColor: "#303432",
        display: "flex",
        flexDirection: "column",
        marginLeft: 3
    },
    bookInfoAuthorPic: {
        backgroundColor: "#303432",
        margin: 15
    }
})
