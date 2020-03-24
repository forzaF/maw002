import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'

import activeBids from '../components/dev/data'

export class RenderRecievedBid extends Component {
    render(){
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 15, borderWidth: .9, alignSelf: 'flex-start', padding: 10, borderRadius: 15, borderColor: "#aaa", marginLeft: 18}}>
            {/* profile picture */}
            <Image 
            source={{uri: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/Magda Ehlers.jpg'}}
            style={{
                height: 80, width: 80, borderRadius: 70/2
            }}
            />
            {/* name */}
            <Text style={{fontSize: 16, fontWeight: '700', paddingTop: 8}}>
            Magda Ehlers
            </Text>
            {/* job title ++ rating*/}
            <View style={{flexDirection: 'row', marginTop: 3 }}>
                {/* job title */}
                <Text> Make up Artist |</Text>
                {/* rating */}
                <Icon name='star' size={11} color='#0176C6' style={{alignSelf: "center"}} />
                <Text style={{}}> 4.5</Text>
            </View>
            {/* Bid */}
            <View style={{flexDirection: 'row', marginTop: 9, paddingLeft: 9,}}>
            {/* icon */}
            <Ionicon name='ios-cash' size={26} color='#444' />
            {/* amount */}
            <View style={{ borderBottomWidth: 1, borderColor: '#fff', marginLeft: 10, marginRight: 18, paddingBottom: 9}}>
                <Text style={{fontSize: 17, fontWeight: '600',flexWrap: 'wrap'}}>{parseInt(30000).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits : 2, minimumFractionDigits : 2 })} {'\u20A6'}</Text>
             </View>
            </View>

                </View>
    );
        }
}

class Bidding extends Component {
    render() {
        return (          
           <View></View>
        );
    }
}
export default Bidding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});