import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import MainMenuScreen from './Screens/MainMenu';
import ResumeScreen from './Screens/Resume'
import LibraryScreen from './Screens/Library'
import FavoriteScreen from './Screens/Favorites'
import FollowScreen from './Screens/Followed'
import BrowseCategories from './Screens/BrowseCategories'
import BrowseFandoms from './Screens/BrowseFandoms'
import BrowseStories from './Screens/BrowseStories'
import ReadStory from './Screens/ReadStory'
// import BrowseCommunitiesScreen from './Screens/BrowseCommunities'
import SearchScreen from './Screens/Search'
import SearchStoriesScreen from './Screens/SearchStories'
import SearchAuthorsScreen from './Screens/SearchAuthors'
import SearchCommunitiesScreen from './Screens/SearchCommunities'
import LocalFilesScreen from './Screens/LocalFiles'
import SettingsScreen from './Screens/Settings'
import AboutScreen from './Screens/About'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Themed } from 'react-navigation';
import { styles } from './Screens/Settings.js';

class HomeScreen extends React.Component {
    unimplementedAlert(title, message) {
        Alert.alert('Unimplemented', 'Please use another option', [
            { text: 'Ok' },
        ])
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Themed.Text>Home Screen</Themed.Text>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'http://lh3.googleusercontent.com/Vgg6wKYdBN1bBxCqcrudxScr9ynpuwhd4Eowlp0Enua7BiRnpssJNIGSeftZVnmOkB8=w300' }}
                />
                <TouchableOpacity
                    style={styles.touchableOpButton}
                    onPress={this.unimplementedAlert}
                    activeOpacity={0.6}
                >
                    <Text
                        style={styles.touchableOpText}
                    >Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchableOpButton}
                    onPress={this.unimplementedAlert}
                    activeOpacity={0.6}
                >
                    <Text
                        style={styles.touchableOpText}
                    >Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchableOpButton}
                    onPress={() => {
                        this.props.navigation.navigate('MainMenu');
                    }}
                    activeOpacity={0.6}
                >
                    <Text
                        style={styles.touchableOpText}
                    >Preview
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class LogOutScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Log out</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        MainMenu: MainMenuScreen,
        Resume: ResumeScreen,
        Library: LibraryScreen,
        Favorites: FavoriteScreen,
        Followed: FollowScreen,
        BrowseCategories: BrowseCategories,
        BrowseFandoms: BrowseFandoms,
        BrowseStories: BrowseStories,
        ReadStory: ReadStory,
        // BrowseCommunities: BrowseCommunitiesScreen,
        Search: SearchScreen,
        SearchStories: SearchStoriesScreen,
        SearchAuthors: SearchAuthorsScreen,
        SearchCommunities: SearchCommunitiesScreen,
        LocalFiles: LocalFilesScreen,
        Settings: SettingsScreen,
        About: AboutScreen,
        // LogOutS: LogOutScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default () => {
    return (
        <AppContainer theme="light" />
    )
}

// export default () => {
//     let theme = useColorScheme();

//     return (
//         <AppearanceProvider>
//             <Navigation theme={theme} />
//         </AppearanceProvider>
//     )
// }