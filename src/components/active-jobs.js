import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native";

import SwipeableFlatList from 'react-native-swipeable-list';
import { Row } from "native-base";

import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/MaterialIcons'

import Ionicon from 'react-native-vector-icons/Ionicons'

import ActiveJob from '../components/active-jobs-list-item'
import ActiveJobBottomSheet from '../components/active-job-bottom-sheet'


const extractItemKey = item => {
    return item.id.toString();
  };

function renderItemSeparator() {
    return <View style={{height: 10}} />;
  }

class ActiveJobs extends Component {
    
    constructor(props){
        super(props);
    }

   activeJobs = this.props.jobData

    RenderActiveJob = ({item}) => {
        return (
            <View>
              <TouchableOpacity onPress={() => this[RBSheet + item.id].open()}>
                <ActiveJob job={item}/>
              </TouchableOpacity>
              <RBSheet
                ref={ref => {
                  this[RBSheet + item.id] = ref;
                }}
                height={400}
                duration={250}
                customStyles={{
                    container: {
                    // justifyContent: "center",
                    // alignItems: "center"
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                    }}}
                closeOnDragDown={true}
              >
                <ActiveJobBottomSheet job={item} />
              </RBSheet>
            </View>
          );
    }


    render() {
        return (
          <View style={styles.container}>
              {/* Active job label */}
              <View style={{marginLeft: 18}}>
                  <Text style={{fontSize: 17, color: '#4F4E4E', fontWeight: '500'}}>Active</Text>
              </View>
                <FlatList
                  data={this.activeJobs}
                  renderItem={this.RenderActiveJob}
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={renderItemSeparator}
              />
              {/* Bidding label */}
              <View style={{marginLeft: 18, marginTop: 40}}>
                  <Text style={{fontSize: 17, color: '#4F4E4E', fontWeight: '500'}}>Biding</Text>
              </View>

              {/* BIDS */}
              {/* OUT */}
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, marginLeft: 22, marginRight: 18, marginBottom: 10, borderBottomWidth: 0, borderColor: '#9e9e9e',}}>
                  <View style={{flexDirection: 'row',  width: '60%'}}>
                    <Ionicon name="ios-log-out" size={40} color={'#4F86E4'}/>
                    <Text style={{fontSize: 17,  marginLeft: 15, alignSelf: "center"}}>Digital marketing for eCommerce platform </Text>
                  </View>
                  <View style={{flex:1, alignItems: 'flex-end',}}>
                    <Text style={{fontSize: 11, color: '#007AF7', fontWeight: '700', marginTop: 5}}>BID SUBMITTED</Text>
                  </View>
                </View>
                {/* IN */}
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
export default ActiveJobs;



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        display: 'flex',
        // flexShrink: 1, 
        backgroundColor: '#fff',
        paddingTop: 15
    },
    temi: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        // color: '#E7A0C7', temiPink
        color: 'rgba(0,0,0,.45)',
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    item: {
        backgroundColor: '#E7A0C7',
        padding: 20,
        height: 80,
        flexDirection: "row",
        paddingVertical: 10
      },
      title: {
        fontSize: 32,
        color: "#FF6602"
      },
});