import * as React from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import { styles } from './Settings';

export default class ReadStory extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
        };
    };
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    async componentDidMount() {
        return fetch('http://10.0.2.2:5000/story/10338159/chapter/1')
            .then((response) => response.text())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.chapter_content,
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
            <View style={styles.container}>
              <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => 
                  <Text>{item}</Text>}
              />
            </View>
        );  
  }
}