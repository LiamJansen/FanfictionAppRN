// Browse stories
// Browse communities

import * as React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { styles } from './Settings';

export default class BrowseCategories extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Categories",
        };
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Anime', title: 'Anime', route: 'anime' },
                        { key: 'Books', title: 'Books', route: 'book' },
                        { key: 'Cartoons', title: 'Cartoons', route: 'cartoon' },
                        { key: 'Comics', title: 'Comics', route: 'comic' },
                        { key: 'Games', title: 'Games', route: 'game' },
                        { key: 'Misc', title: 'Misc', route: 'misc' },
                        { key: 'Movies', title: 'Movies', route: 'movie' },
                        { key: 'Plays', title: 'Plays', route: 'play' },
                        { key: 'TV', title: 'TV', route: 'tv' },
                    ]}
                    renderItem={({ item }) =>
                        <Text
                            style={[styles.browseItem, styles.browseBotBorder]}
                            onPress={() => {
                                    this.props.navigation.navigate("BrowseFandoms", {
                                        category: item.title,
                                        route: item.route
                                    })
                            }
                            }
                        >{item.key}</Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}
