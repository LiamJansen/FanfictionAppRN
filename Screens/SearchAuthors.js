import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 24,
        height: 55,
    },
    browseContainer: {
        backgroundColor: "#fff",
    },
    browseItem: {
        padding: 12,
        fontSize: 20,
        height: 55,
    },
    browseBotBorder: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    touchableOpButton: {
        backgroundColor: "#39ff14",
        padding: 15,
        borderRadius: 10,
    },
    touchableOpText: {
        color: "#000000",
    },
});

export default class SearchAuthorsScreen extends React.Component {
    state = {
        isModalVisible: false
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationIn="lightSpeedIn"
                    animationInTiming={500}
                    animationOut="lightSpeedOut"
                    animationOutTiming={200}
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={this.toggleModal}
                    backdropOpacity={0.25}
                >
                    <View style={styles.browseContainer}>
                        <TextInput
                        clearButtonMode="while-editing"
                        ></TextInput>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={styles.touchableOpButton}
                    onPress={this.toggleModal}
                    activeOpacity={0.6}
                >
                    <Text
                        style={styles.touchableOpText}
                    >Search...
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}