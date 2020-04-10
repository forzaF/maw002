import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
} from "react-native";

class SnapShot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snapShotData: [
        {
          id: "001",
          job: "AR modelling of spaceship build",
          title: "Tomorrow, Feb 26",
          otherUser: "EM-VA-SJ",
          date: "Tomorrow, Feb 26",
          color: "#FF6602",
        },
        {
          id: "002",
          job: "jetfuel making",
          title: "POSTED",
          otherUser: "3 bids received",
          date: "Today, Feb 22",
          color: "#0176C6",
          status: "3 bids received",
        },
        {
          id: "003",
          job: "flight-soundtrack making",
          title: "ONGOING",
          otherUser: "BI-DT",
          color: "#19CC70",
          status: "3 bids received",
        },
        {
          id: "004",
          job: "444flight-soundtrack making",
          title: "ONGOING",
          otherUser: "444BioSpace Corp",
          color: "#19CC70",
          status: "3 bids received",
        },
      ],
    };
  }
  static navigationOptions = {
    headerMode: "none",
  };

  arrays = [];
  size = 2;

  do = () => {
    while (this.state.snapShotData.length > 0)
      this.arrays.push(this.state.snapShotData.splice(0, this.size));
  };

  // RenderSnapshot
  renderRow(item) {
    // console.log(item);
    return (
      // coloumns
      <View
        style={{
          backgroundColor: "white",
          marginRight: 5,
          marginLeft: 10,
          marginTop: 10,
          width: 200,
        }}
      >
        {/* row item container */}
        <TouchableWithoutFeedback
          onPress={() => alert("Pressed!")}
          style={{ marginBottom: 13 }}
        >
          <View>
            {/* row item title */}
            <Text
              style={{
                fontFamily: "Lato-Regular",
                fontSize: 13,
                color: "#8F8F8F",
                // flexWrap: "nowrap",
              }}
            >
              {item[0].title}
            </Text>
            {/* row item content: image, job, job by/for */}
            <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
              {/* image */}
              <View
                style={{
                  height: 33,
                  width: 33,
                  backgroundColor: item[0].color,
                  marginRight: 7,
                  marginTop: 3,
                }}
              />
              {/* job details */}
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  // marginBottom: 10,
                  flexWrap: "nowrap",
                }}
              >
                {/* what's the job */}
                <View
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 15,
                    alignSelf: "flex-start",
                    height: 18,
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      fontFamily: "Lato-Bold",
                      fontSize: 15,
                      color: "#646464",
                      alignSelf: "flex-start",
                      flex: 1,
                      // height: 10,
                    }}
                  >
                    {item[0].job}
                  </Text>
                </View>
                {/* who's it for/by? */}
                <Text
                  // numberOfLines={1}
                  style={{
                    fontFamily: "OpenSans-Bold",
                    fontSize: 13,
                    color: "#7B7B7B",
                    marginTop: 3,
                    // flex: 1,
                  }}
                >
                  {item[0].otherUser}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {item.length > 1 ? (
          <View
            style={{
              backgroundColor: "white",
              marginTop: 10,
              borderWidth: 0,
            }}
          >
            <TouchableWithoutFeedback onPress={() => alert("Pressed!")}>
              <View>
                {/* title */}
                <Text
                  style={{
                    fontFamily: "Lato-Regular",
                    fontSize: 13,
                    color: "#8F8F8F",
                  }}
                >
                  {item[1].title}
                </Text>
                {/* job */}
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      height: 33,
                      width: 33,
                      backgroundColor: item[1].color,
                      marginRight: 7,
                      marginTop: 3,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* job details */}
                    <View
                      style={{
                        fontFamily: "Lato-Bold",
                        fontSize: 15,
                        alignSelf: "flex-start",
                        height: 18,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          fontFamily: "Lato-Bold",
                          fontSize: 15,
                          color: "#646464",
                          alignSelf: "flex-start",
                          flex: 1,
                          height: 16,
                        }}
                      >
                        {item[1].job}
                      </Text>
                    </View>
                    {/* who's it for/by? */}
                    <Text
                      style={{
                        fontFamily: "OpenSans-Bold",
                        fontSize: 13,
                        color: "#7B7B7B",
                        marginTop: 3,
                      }}
                    >
                      {item[1].otherUser}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ) : null}
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* search button */}
          {this.do()}
          <View style={{ height: 160 }}>
            <FlatList
              data={this.arrays}
              horizontal={true}
              renderItem={({ item, index }) => this.renderRow(item)}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              style={{ flex: 1, paddingBottom: 0 }}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default SnapShot;
