import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback
} from "react-native";

class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            activeIndex: 0,
            searchText: ''
        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex : index,
        })
    }

    onChangeText(key, value) {
        this.setState({
            [key]: value
        })
    }


    render() {
        return (
             <View style={styles.container}>
                    {/* Search box */}
                <View style={{flex:1, paddingTop:'35%', width: '100%', alignItems: 'center'}}>
                    <TextInput 
                        style={styles.searchTextinput}
                        placeholder="Looking for..."
                        placeholderTextColor='#bfbfbf'
                        autoCapitalize='none'
                        value = {this.state.searchText}
                        onChangeText = {(val) => this.onChangeText('searchText', val)}
                    >
                    </TextInput>
                        {/* Location */}
                        <View style= {{flex: 1, flexDirection: "row", paddingTop: 15, alignSelf: 'flex-end'}}>
                            <TouchableWithoutFeedback
                                transparent
                                onPress = {() => this.segmentClicked(0)}
                                active = {this.activeIndex==0}
                                title='Current Location'
                                >
                                <Text style={[{borderRadius: 0}, {padding: 0}, this.state.activeIndex == 0 ? styles.locationSelected : styles.locationUnselected]}>Current Location</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                transparent
                                onPress = {() => this.segmentClicked(1)}
                                active = {this.activeIndex==1}
                                >
                                    <Text style={[{paddingLeft: 15}, {paddingRight: 25}, this.state.activeIndex == 1 ? styles.locationSelected : styles.locationUnselected,]}>Choose Location</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
        );
    }
}


export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F2F2F9'
    },
    searchTextinput: {
        width: "87%",
        borderBottomColor: '#424242',
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'helvetica',
        paddingLeft: 10,
        paddingBottom: 5,
        color: '#4d4d4d',
    },
    locationSelected: {
        color: '#5A90E6', 
        fontWeight: '700',
    },
    locationUnselected: {
        color: '#777'
    }
});