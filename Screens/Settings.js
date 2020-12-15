import * as React from "react";
import { Text, View, StyleSheet } from "react-native";


export default class SettingsScreen extends React.Component {
    boo = 5;

    render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Text size: {{boo}}</Text>
        </View>
    );
}}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 24,
    },
    browseContainer: {
        backgroundColor: "#fff",
    },
    browseItem: {
        padding: 12,
        fontSize: 20,
    },
    browseBotBorder: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    touchableOpButton: {
        backgroundColor: "#39ff14",
        padding: 16,
        borderRadius: 10,
    },
    touchableOpText: {
        color: "#000000",
    },
    storyTitle: {
        fontWeight: "bold",
    },
    storyAuthor: {
        fontStyle: "italic"
    },
    storyDescription: {

    },
    nextButton: {
        width: 50,
        textAlign: "center"
    },
    previousButton: {
        width: 75,
        textAlign: "center"
    },
    previousNextContainer: {
        flexDirection: "row",
        height: 40,
        justifyContent: "center",
    },
 });