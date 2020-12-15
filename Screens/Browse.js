// Browse stories
// Browse authors
// Browse communities

import * as React from "react";
import { Text, View, StyleSheet } from 'react-native';

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

export default class BrowseScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Browse",
        };
    };
    render() {
        return (
            <View style={styles.container}>
                {/* <Text
                    style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("BrowseStories")}
                >Browse stories</Text>
                <Text
                    style={[styles.browseItem, styles.browseBotBorder]}
                    onPress={() => this.props.navigation.navigate("BrowseCommunities")}
                >Browse communities</Text> */}
            </View>
        );
    }
}

// export default class BrowseScreen extends React.Component {
//     static navigationOptions = ({ navigation }) => {
//         return {
//             title: "Browse " + navigation.getParam("category"),
//         };
//     };
//     state = {
//         isModalVisible: false
//     };
//     toggleModal = () => {
//         this.setState({ isModalVisible: !this.state.isModalVisible });
//     };
//     browseStories() {
//         return (
//             <>
//                 <TouchableOpacity
//                     style={styles.touchableOpButton}
//                     activeOpacity={0.6}
//                     onPress={this.toggleModal}
//                 >
//                     <Text
//                         style={styles.touchableOpText}
//                     >Search...
//                     </Text>
//                 </TouchableOpacity>
//                 <Modal
//                     animationIn="lightSpeedIn"
//                     animationInTiming={500}
//                     animationOut="lightSpeedOut"
//                     animationOutTiming={200}
//                     isVisible={this.state.isModalVisible}
//                     onBackdropPress={this.toggleModal}
//                 >
//                     <View style={styles.browseContainer}>
//                         <TextInput
//                         style={styles.browseSearch}
//                             defaultValue="We'll start the search here!"
//                         />
//                     </View>
//                 </Modal>
//             </>
//         )
//     }
//     browseAuthors() {
//         return (
//             <WebView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
//                 useWebKit
//                 allowUniversalAccessFromFileURLs
//                 mixedContentMode="always"
//                 originWhitelist={['*']} source={{ uri: 'http://m.fanfiction.net' }} />
//         )
//     }
//     browseCommunities() {
//         return (
//             <Text>Category: Communities</Text>
//         )
//     }
//     render() {
//         const { params } = this.props.navigation.state;
//         return (
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 {params.category === 'Stories' ? this.browseStories()
//                     : params.category === "Authors" ? this.browseAuthors()
//                         : params.category === 'Communities' ? this.browseCommunities()
//                             : null}
//             </View>
//         );
//     }
// }