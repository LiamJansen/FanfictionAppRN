import * as React from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { styles } from './Settings';

export default class BrowseFandoms extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('category'),
        };
    };
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }


    async componentDidMount() {
        return fetch('http://10.0.2.2:5000/' + this.props.navigation.state.params.route + "/fandoms")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.fandoms,
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
            <Text
                style={[styles.browseItem, styles.browseBotBorder]}
                onPress={() => {
                    this.props.navigation.navigate("BrowseStories", {
                        fandom: item.title,
                        category: this.props.navigation.state.params.route
                    })
                }
                }
            >{[item.title]}</Text>}
        />
      </View>
    );  
  }
}