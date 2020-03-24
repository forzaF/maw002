import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import RBSheet from "react-native-raw-bottom-sheet";

import ActiveBid from "./active-bids-list-item";

import { activeJobs, activeBids } from "../components/dev/data";

import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

const extractItemKey = item => {
  return item.id.toString();
};

function renderItemSeparator() {
  return <View style={{ height: 10 }} />;
}

function renderItemSeparatorHorizontal() {
  return <View style={{ height: 10, borderLeftWidth: 1 }} />;
}

function RenderBidOut(props) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginLeft: 22,
        marginRight: 18,
        marginBottom: 20,
        borderBottomWidth: 0,
        borderColor: "#9e9e9e"
      }}
    >
      <View style={{ flexDirection: "row", width: "60%" }}>
        <Ionicon name="ios-log-out" size={40} color={"#4F86E4"} />
        <Text style={{ fontSize: 17, marginLeft: 15, alignSelf: "center" }}>
          {props.bidData.bid.job}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text
          style={{
            fontSize: 11,
            color: "#007AF7",
            fontWeight: "700",
            marginTop: 5
          }}
        >
          BID SUBMITTED
        </Text>
      </View>
    </View>
  );
}

function RenderBidIn(props) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginLeft: 22,
        marginRight: 18,
        marginBottom: 20,
        borderWidth: 0
      }}
    >
      <View style={{ flexDirection: "row", width: "60%" }}>
        <Ionicon name="ios-log-in" size={40} color={"#19CC70"} />
        <Text
          style={{
            fontSize: 17,
            marginLeft: 15,
            alignSelf: "flex-start",
            marginTop: 5
          }}
        >
          {props.bidData.bid.job}{" "}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text
          style={{
            fontSize: 11,
            color: "rgba(25,204,112,1)",
            fontWeight: "700",
            marginTop: 1
          }}
        >
          BIDS RECIEVED
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "rgba(0,0,0,.75)",
            fontWeight: "600",
            marginRight: 33
          }}
        >
          3
        </Text>
      </View>
    </View>
  );
}

function RenderRecievedBid(item) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        paddingHorizontal: 6,
        paddingVertical: 10,
        borderRadius: 10,
        marginLeft: 18,
        backgroundColor: "#fff"
      }}
    >
      {/* profile picture */}
      <Image
        source={{
          uri: item.userImage
        }}
        style={{
          height: 100,
          width: 100,
          borderRadius: 95 / 2
        }}
      />
      {/* name */}
      <Text style={{ fontSize: 16, fontWeight: "700", paddingTop: 8 }}>
        {item.userName}
      </Text>
      {/* job title ++ rating*/}
      <View style={{ flexDirection: "row", marginTop: 3 }}>
        {/* job title */}
        <Text> {item.title} |</Text>
        {/* rating */}
        <Icon
          name="star"
          size={11}
          color="#0176C6"
          style={{ alignSelf: "center" }}
        />
        <Text style={{}}> {item.rating}</Text>
      </View>
      {/* Bid */}
      <View style={{ flexDirection: "row", marginTop: 9, paddingLeft: 9 }}>
        {/* icon */}
        <Ionicon name="ios-cash" size={26} color="#444" />
        {/* amount */}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#fff",
            marginLeft: 10,
            marginRight: 18,
            paddingBottom: 9
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "600", flexWrap: "wrap" }}>
            {parseInt(item.bidAmount).toLocaleString("en-US", {
              style: "decimal",
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}{" "}
            {"\u20A6"}
          </Text>
        </View>
      </View>
    </View>
  );
}

//renders list of received bids per job inside bottom sheet
class RenderRecievedBidList extends Component {
  constructor(props) {
    super(props);
  }
  activeBidsList = activeBids;
  activeBidsforRender;

  render() {
    this.activeBidsList.map(item => {
      if (item.bidDiretion === "in") {
        this.activeBidsforRender = item.bids;
      }
    });
    return (
      // horizontal flatlist showing recieved bids
      <FlatList
        data={this.activeBidsforRender}
        renderItem={({ item, job }) => RenderRecievedBid(item, job)}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    );
  }
}

//Active bids section
//displays jobs user is current bidding on
//displays jobs user is receiving bids on
export default function ActiveBids(props) {
  let item = props;
  if (props) {
    //jobs posted by user
    if (props.bid.bidDiretion === "in") {
      let job = props.bid.job;
      return (
        <View>
          <TouchableOpacity onPress={() => this[RBSheet + props.bid.id].open()}>
            <RenderBidIn bidData={props} />
          </TouchableOpacity>
          {/* bottom sheet showing received bids */}
          <RBSheet
            ref={ref => {
              this[RBSheet + props.bid.id] = ref;
            }}
            height={400}
            duration={250}
            customStyles={{
              container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "#F2F2F9"
              }
            }}
            //   closeOnDragDown={true}
          >
            {/* description of job being bid for */}
            <View
              style={{
                marginLeft: 14,
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center",
                marginTop: 30,
                marginBottom: 30
                //   flex: 1
              }}
            >
              <Ionicon name="ios-briefcase" size={26} color="#444" />
              <View
                style={{
                  marginLeft: 10,
                  marginRight: 18,
                  flex: 1
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: "1%",
                    fontWeight: "400",
                    flexWrap: "wrap",
                    flexShrink: 1
                  }}
                >
                  {job}
                </Text>
              </View>
            </View>
            {/* horizontal list of bids recieved for job */}
            <View
              style={{
                marginLeft: -15
              }}
            >
              <RenderRecievedBidList bidData={props} job={props.bid.job} />
            </View>

            {/* close bottom sheet */}
            <TouchableOpacity
              onPress={() => this[RBSheet + props.bid.id].close()}
              style={{
                //   flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
                //   marginRight: 18
                marginTop: 30
              }}
            >
              <Ionicon
                name="ios-close-circle-outline"
                size={33}
                color={"#4F86E4"}
              />
            </TouchableOpacity>
          </RBSheet>
        </View>
      );
    } else if (props.bid.bidDiretion === "out") {
      return (
        <View>
          <TouchableOpacity onPress={() => this[RBSheet + props.bid.id].open()}>
            <RenderBidOut bidData={props} />
          </TouchableOpacity>
          <RBSheet
            ref={ref => {
              this[RBSheet + props.bid.id] = ref;
            }}
            height={400}
            duration={250}
            customStyles={{
              container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "#000"
              },
              wrapper: {}
            }}
            closeOnDragDown={true}
          >
            <Text>We've got another one {props.bid.job}</Text>
          </RBSheet>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Abeg abeg</Text>
        </View>
      );
    }
  } else {
    return (
      <View>
        <Text>Abeg abeg 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
