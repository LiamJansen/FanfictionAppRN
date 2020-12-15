import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Modal from "react-native-modal";
import { styles } from './Settings';

export default class MainMenuScreen extends React.Component {
    static navigationOptions = {
        title: 'Menu',
    };
    state = {
        isModalVisible: false
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("Resume")}
                >Resume</Text>

                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("Library")}
                >My library</Text>

                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("Favorites")}
                >Favorites</Text>

                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("Followed")}
                >Followed</Text>

                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={this.toggleModal}
                >Browse</Text>
                <Modal
                    animationIn="lightSpeedIn"
                    animationInTiming={500}
                    animationOut="lightSpeedOut"
                    animationOutTiming={300}
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={this.toggleModal}
                >
                    <View style={styles.browseContainer}>
                        <FlatList
                            data={[
                                { key: 'Browse stories', title: 'BrowseCategories' },
                                { key: 'Browse communities', title: 'Communities' },
                            ]}
                            renderItem={({ item }) =>
                                <Text
                                    style={[styles.browseItem, styles.browseBotBorder]}
                                    onPress={() => {
                                        this.toggleModal(),
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
                    onPress={() => this.props.navigation.navigate("Search")}
                >Search</Text>

                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("LocalFiles")}
                >Local files</Text>

                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("Settings")}
                >Settings</Text>

                <Text style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("About")}
                >About</Text>

                <Text style={styles.browseItem}
                // onPress={() => this.props.navigation.navigate("Resume")}
                >Log out</Text>
            </View>
        );
    }
}