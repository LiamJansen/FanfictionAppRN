import * as React from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { styles } from './Settings';



export default class BrowseStories extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('fandom'),
        };
    };
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    async componentDidMount() {
        page_number = 1
        return fetch('http://10.0.2.2:5000/' + this.props.navigation.state.params.category + '/' + this.props.navigation.state.params.fandom + '/stories/' + page_number)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.story_data,
                    page_number: page_number,
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
        makePreviousPageAppear = () => {
            if (this.state.page_number >= 2) {
                return <Text style={styles.previousButton}>Previous page</Text>
            }
        }
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
            <TouchableHighlight
                style={[styles.browseItem, styles.browseBotBorder]}
                onPress={() => {
                    this.props.navigation.navigate("ReadStory", {
                        story_id: item.story_id,
                        title: item.title
                    })
                }}
            ><View>
                <Text style={styles.storyTitle}>{item.title}</Text>
                <Text style={styles.storyAuthor}>{item.author}</Text>
                <Text style={styles.storyDescription}>{item.description}</Text>
             </View>
            </TouchableHighlight>}
            keyExtractor={item => item.story_id}
        />
        <TouchableHighlight>
            <View style={styles.previousNextContainer}>
                {makePreviousPageAppear()}
                <Text style={styles.nextButton}>Next page</Text>
            </View>
        </TouchableHighlight>
      </View>
    );  
  }
}