import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  Alert,
  FlatList,
} from "react-native";
import { Header, Left, Right } from "native-base";

//Icons and gradient
import Icon from "react-native-vector-icons/MaterialIcons";
import GradientIcon from "../components/custom-icons";

//BottomSheet
import BottomSheet from "reanimated-bottom-sheet";

// Components
import Search from "../components/search";
import Feed from "../components/feed";

// Data
import { activeJobs, activeBids } from "../components/dev/data";

import MAWHeader from "../components/header";

let indicator;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      snapShotData: [
        {
          id: "001",
          job: "spaceship building",
          type: "Tomorrow, Feb 26",
          otherUser: "EM-VA-SJ",
          date: "Tomorrow, Feb 26",
          color: "#FF6602",
        },
        {
          id: "002",
          job: "jetfuel making",
          type: "POSTED",
          otherUser: "3 bids received",
          date: "Today, Feb 22",
          color: "#0176C6",
          status: "3 bids received",
        },
        {
          id: "003",
          job: "flight-soundtrack making",
          type: "ONGOING",
          otherUser: "BI-DT",
          color: "#19CC70",
          status: "3 bids received",
        },
        {
          id: "004",
          job: "444flight-soundtrack making",
          type: "ONGOING",
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

  componentDidMount() {
    // this.setState = {
    //     listOfJobs: activeJobs[0]
    // }

    indicator = "component is mounting fine";
  }

  openModal = () => {
    this.props.navigation.navigate("MyModal");
  };

  renderContent = () => {
    let text;
    if (this.state.index === 0) {
      text = "NO ACTIVE JOBS YET";
    } else if (this.state.index === 1) {
      text = "NO ACTIVE JOBS YETTT";
    }
    return (
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <Feed
          index={this.state.index}
          indicator={indicator}
          jobData={activeJobs}
          bidData={activeBids}
        />
      </View>
    );
  };
  //* Bottom Sheet Header Control Icon
  renderHeaderControl = () => {
    if (this.state.index === 0) {
      return (
        <View
          style={{
            width: 55,
            height: 5,
            borderRadius: 50 / 3,
            backgroundColor: "#BDBEC8",
          }}
        />
      );
    } else if (this.state.index === 1) {
      return <Icon name="keyboard-arrow-down" size={44} color={"#BDBEC8"} />;
    }
  };

  renderHeader = () => (
    <View
      style={{
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
      }}
    >
      {/* Bottom Sheet Header Control Icon */}
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        {this.renderHeaderControl()}
      </View>
    </View>
  );

  toggleIndex = () => {
    if (this.state.index === 0) {
      this.setState({ index: 1 });
    } else if (this.state.index === 1) {
      this.setState({ index: 0 });
    }
  };

  arrays = [];
  size = 2;

  do = () => {
    while (this.state.snapShotData.length > 0)
      this.arrays.push(this.state.snapShotData.splice(0, this.size));
  };

  renderRow(item) {
    // console.log(item);
    return (
      <View style={{ marginLeft: 11, marginTop: 10, marginRight: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            borderWidth: 0,
          }}
        >
          <Text
            style={{
              fontFamily: "Lato-Regular",
              fontSize: 13,
              color: "#8F8F8F",
            }}
          >
            {item[0].type}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                height: 33,
                width: 33,
                backgroundColor: item[0].color,
                marginRight: 7,
                marginTop: 3,
              }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Lato-Bold",
                  fontSize: 15,
                  color: "#646464",
                  alignSelf: "flex-start",
                }}
              >
                {item[0].job}
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 13,
                  color: "#7B7B7B",
                  marginTop: 3,
                }}
              >
                {item[0].otherUser}
              </Text>
            </View>
          </View>
          {item.length > 1 ? (
            <View
              style={{
                backgroundColor: "white",
                marginTop: 10,
                borderWidth: 0,
              }}
            >
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 13,
                  color: "#8F8F8F",
                }}
              >
                {item[1].type}
              </Text>
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
                  <Text
                    style={{
                      fontFamily: "Lato-Bold",
                      fontSize: 15,
                      color: "#646464",
                      alignSelf: "flex-start",
                    }}
                  >
                    {item[1].job}
                  </Text>
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
          ) : null}
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <MAWHeader props={this.props} />
          <Text
            style={{
              fontFamily: "Lato-Bold",
              fontSize: 22,
              color: "#4a5a5a",
              paddingLeft: 18,
              // fontWeight: "bold",
            }}
          >
            Good evening
          </Text>
          {this.do()}
          <View style={{ height: 180 }}>
            <FlatList
              data={this.arrays}
              horizontal={true}
              renderItem={({ item, index }) => this.renderRow(item)}
              showsHorizontalScrollIndicator={true}
              keyExtractor={(item) => item.id}
              style={{ flex: 1, paddingBottom: 0 }}
            />
          </View>
          {/* Search component */}
          <Search props={this.props} />
          {/* Bottom sheet component */}
        </SafeAreaView>
        <BottomSheet
          snapPoints={["10%", "80%"]}
          renderContent={this.renderContent}
          renderHeader={this.renderHeader}
          onOpenStart={this.toggleIndex}
          onCloseEnd={this.toggleIndex}
          enabledContentGestureInteraction={true}
        />
      </View>
    );
  }
}

export default Home;
