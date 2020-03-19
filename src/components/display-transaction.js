import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

export default class DisplayTransaction extends Component {
    constructor(props){
        super(props);
    };
    render() {
    return(
        <View style={{marginBottom: 13}}>
        {/* Transactions on date */}
        <View style={{marginLeft: '7%', marginRight: '7%'}}>
            {/* Transaction */}
            <View style={{flexDirection: 'row', marginTop: '5%', borderBottomWidth: 1.5, borderBottomColor: '#F1F1F2', paddingBottom: '5%'}}>
                {/* Transaction Image */}
                <View style={{height: 40, width: 39, borderRadius: 22/2, borderWidth: StyleSheet.hairlineWidth, marginRight: '3%'}}></View>
                    {/* To/From + Amount */}
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                        {/* To/From */}
                        <View>
                             <Text style={{fontWeight: "700", fontSize: 17, color: '#47494B'}}>{this.props.name}</Text>
                             <Text style={{paddingTop: 3, fontSize: 14, color: '#aaa'}}>{this.props.date}</Text>
                        </View>
                        {/* Amount */}
                        <View style={{flexDirection: 'row'}}>
                            <Icon name={this.props.icon} size={21} color={this.props.iconColor} style={{paddingTop: '2%', fontWeight: "bold"}}/>
                            <Text style={{color: 'rgba(0,0,0,.75)', fontSize: 17,paddingLeft: '1.3%', marginTop: '6%', alignSelf: 'flex-start', fontWeight: "700"}}>
                                {parseInt(this.props.amount).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits : 2, minimumFractionDigits : 2 })}
                            </Text>
                            <View style={{paddingLeft: '.3%', marginTop: '5%', alignSelf: 'flex-start', fontWeight: "600"}}>
                                <Text style={{color: '#454545', fontSize: 19,paddingLeft: '1%', fontWeight: "600"}}>{'\u20A6'}</Text>
                            </View>
                        </View>
                     </View>
            </View>
        </View>
    </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});