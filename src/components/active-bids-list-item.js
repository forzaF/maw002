import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'

// receive data either as props or direct database call
// if bid sent - render as bid sent item // if bid recieved render bid received

class ActiveBid extends Component {
    render() {
        return (
            <View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, marginLeft: 22, marginRight: 18, marginBottom: 10, borderBottomWidth: 0, borderColor: '#9e9e9e',}}>
            <View style={{flexDirection: 'row',  width: '60%'}}>
              <Ionicon name="ios-log-out" size={40} color={'#4F86E4'}/>
              <Text style={{fontSize: 17,  marginLeft: 15, alignSelf: "center"}}>Digital marketing for eCommerce platform </Text>
            </View>
            <View style={{flex:1, alignItems: 'flex-end',}}>
              <Text style={{fontSize: 11, color: '#007AF7', fontWeight: '700', marginTop: 5}}>BID SUBMITTED</Text>
            </View>
          </View>
           <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 15, marginLeft: 22, marginRight: 18, borderWidth: 0,}}>
            <View style={{flexDirection: 'row',  width: '60%'}}>
              <Ionicon name="ios-log-in" size={40} color={'#19CC70'}/>
              <Text style={{fontSize: 17,  marginLeft: 15, alignSelf: "flex-start", marginTop: 5}}>Make up for wedding </Text>
            </View>
            <View style={{flex:1, alignItems: 'flex-end',}}>
              <Text style={{fontSize: 11, color: 'rgba(25,204,112,1)', fontWeight: '700', marginTop: 1}}>BIDS RECIEVED</Text>
              <Text style={{fontSize: 18, color:'rgba(0,0,0,.75)', fontWeight: '600', marginRight: 33,}}>3</Text>
            </View>
          </View>
          </View>
        );
    }
}
export default ActiveBid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});