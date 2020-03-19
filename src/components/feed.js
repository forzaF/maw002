import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import ActiveJobs from './active-jobs'
import RBSheet from "react-native-raw-bottom-sheet";


class Feed extends Component {
    constructor(props){
        super(props)
    }

    render() {
        if(this.props.index === 0) {
            return(
                <View style={styles.container}>
                    <Text style={styles.temi}>{this.props.text}</Text> 
                     <Text style={styles.temi}> SWIPE UP TO SEE WHAT'S UP</Text>
                </View>
            )
        } else if(this.props.index === 1) {
            return (
                <View style={styles.container}>
                    <ActiveJobs indicator={this.props.indicator} jobData={this.props.jobData}/>
                </View>
            )
        }
        
    }
}
export default Feed;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
    },
    temi: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        // color: '#E7A0C7', temiPink
        color: 'rgba(0,0,0,.45)',
        fontWeight: 'bold',
        paddingBottom: 5,
        justifyContent:"center",
        alignSelf: 'center'
    }
});