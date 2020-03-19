import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default class ActiveJobBottomSheet extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={{marginLeft: 18, marginTop: '5%'}}>
            {/* image ++ freelancer name ++ rating */}
            <View style={{flexDirection: 'row'}}>
              {/* image */}
              <Image style={{
                    width: 66,
                    height: 66,
                    borderRadius: 22,
                    borderWidth: 1, borderColor: '#ddd',
                    marginRight: 15,justifyContent: "center", alignItems: "center",
                }}
                source = {{uri: this.props.job.image}}
                />
              {/* name ++ rating*/}
              <View style={{marginTop: '1%'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', }}>
                  {this.props.job.user}
                </Text>
                {/* rating */}
                <View style={{flexDirection: 'row', marginTop: '3%'}}>
                  <Icon name='star' size={22} color='#0176C6' />
                  <Text style={{fontSize: 17, marginTop: '1%'}}> {this.props.job.rating}</Text>
                </View>
              </View>
            </View>
            {/* job */}
            <View style={{marginTop: 30, marginLeft: 14, flexDirection: 'row'}}>
              <Ionicon name='ios-briefcase' size={26} color='#444' />
              <View style={{ borderBottomWidth: 1, borderColor: '#fff', marginLeft: 10, marginRight: 18, flex: 1}}>
            <Text style={{fontSize: 17, marginTop: '1%', fontWeight: '400', flexWrap: 'wrap'}}>{this.props.job.job}</Text>
              </View>
            </View>
            {/* Amount */}
            <View style={{marginTop: 10, marginLeft: 14, flexDirection: 'row'}}>
              <Ionicon name='ios-cash' size={26} color='#444' />
              <View style={{ borderBottomWidth: 1, borderColor: '#fff', marginLeft: 10, marginRight: 18, flex: 1, paddingBottom: 9}}>
            <Text style={{fontSize: 17, marginTop: '.8%', fontWeight: '400', flexWrap: 'wrap'}}>{parseInt(this.props.job.jobAmount).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits : 2, minimumFractionDigits : 2 })} {'\u20A6'}</Text>
              </View>
            </View>
            {/* actions */}
            <View style={{marginRight: 8, marginLeft: 8, marginTop: '3%', justifyContent: "center", alignItems: "center"}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                {/* call */}
                <View style={{alignItems: "center", justifyContent: 'center'}}>
                  <View style={{height: 46, width: 46, borderRadius: 46/2, borderColor:'#0962ED', borderWidth: 3, alignItems:'center', justifyContent: 'center'}} >
                    <Ionicon name = 'ios-call' size={30} color='#0962ED' />
                  </View>
                  <Text style={{marginTop: 6, color: '#0962ED'}}>Call</Text>
                </View>
                {/* chat */}
                <View style={{alignItems: "center", justifyContent: 'center'}}>
                  <View style={{height: 46, width: 46, borderRadius: 46/2, borderColor:'#0962ED', borderWidth: 3, alignItems:'center', paddingRight: 3, justifyContent: 'center'}} >
                    <Ionicon name = 'ios-paper-plane' size={30} color='#0962ED' />
                  </View>
                  <Text style={{marginTop: 6, color: '#0962ED'}}>Chat</Text>
                </View>
                {/* cancel */}
                <View style={{alignItems: "center", justifyContent: 'center'}}>
                  <View style={{height: 46, width: 46, borderRadius: 46/2, borderColor:'#0962ED', borderWidth: 3, alignItems:'center', justifyContent: 'center'}} >
                    <Ionicon name = 'ios-close' size={40} color='#0962ED' />
                  </View>
                  <Text style={{marginTop: 6, color: '#0962ED'}}>Cancel</Text>
                </View>
              </View>
            </View>
              {/* job done button */}
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: '#1FED15', width: '33%', borderRadius: 14, padding: '3%', marginTop: '6%', alignItems: 'center' }}>
                  <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>Job Done</Text>
                </TouchableOpacity>
              </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});