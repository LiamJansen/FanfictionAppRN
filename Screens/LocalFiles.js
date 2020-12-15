import * as React from "react";
import { Text, View } from "react-native";

export default class LocalFilesScreen extends React.Component {
    render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Local files</Text>
        </View>
    );
}}