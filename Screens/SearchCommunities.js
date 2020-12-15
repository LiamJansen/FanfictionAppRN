import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
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

export default class SearchCommunitiesScreen extends React.Component {
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
                    onBackdropPress={this.toggleSecondModal}
                    backdropOpacity={0.25}
                >
                    <View style={styles.browseContainer}>
                        <FlatList
                            data={[
                                { key: 'Search stories', title: 'Stories' },
                                { key: 'Search authors', title: 'Authors' },
                                { key: 'Search communities', title: 'Communities' },
                            ]}
                            renderItem={({ item }) =>
                                <Text
                                    style={styles.browseItem}
                                    onPress={() => {
                                        this.toggleSecondModal(),
                                            this.props.navigation.navigate(item.title, {
                                                category: item.title
                                            })
                                    }
                                    }
                                >{item.key}</Text>}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                    </View>
                </Modal>
                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("Resume")}
                >Search Stories
                </Text>
                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("Resume")}
                >Search Authors</Text>
                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("Resume")}
                >Search Communities</Text>
            </View>
        );
    }
}