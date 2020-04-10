import React, { useState, Component } from "react";
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
  Dimensions,
} from "react-native";
import { Header, Left, Right } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Icons and gradient
import Icon from "react-native-vector-icons/MaterialIcons";
import GradientIcon from "../components/custom-icons";

//BottomSheet
import BottomSheet from "reanimated-bottom-sheet";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomCard from "../components/bottom-sheet";

// Components
import Search from "../components/search";
import Feed from "../components/feed";

// Data
import { activeJobs, activeBids } from "../components/dev/data";

import MAWHeader from "../components/header";
import { ScrollView } from "react-native-gesture-handler";

let indicator;

let winheight = Dimensions.get("window").height;

function ForYouList() {
  return (
    <TouchableWithoutFeedback onPress={() => alert("For You Pressed!")}>
      {/* container */}
      <View
        style={{
          height: 277,
          width: 204,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: "#979797",
          marginLeft: 18,
        }}
      >
        {/* <Text></Text> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

function RenderForYou(props) {
  return (
    <View>
      {/* title */}
      <Text
        style={{
          marginLeft: 10,
          fontFamily: "Lato-Bold",
          fontSize: 21,
          color: "#4A4A4A",
        }}
      >
        For you
      </Text>
      <View style={{ marginTop: 18 }}>
        <FlatList
          data={[
            { id: "001", content: "for you one" },
            { id: "002", content: "for you two" },
            { id: "003", content: "for you three" },
          ]}
          renderItem={(item) => ForYouList(item)}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

function FeedItems(item) {
  return (
    <TouchableWithoutFeedback onPress={() => alert("Feed Item Pressed!")}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#4f4f4f",
            marginBottom: 2,
            paddingBottom: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 13,
                  color: "#6f6f6f",
                  marginLeft: 6,
                  marginTop: 10,
                }}
              >
                {item.item.owner}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontFamily: "OpenSans-Bold",
                    fontSize: 16,
                    color: "#4a4a4a",
                    marginLeft: 6,
                  }}
                >
                  {item.item.job}
                </Text>
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 15,
                    color: "#4a4a4a",
                    marginLeft: 10,
                  }}
                >
                  {item.item.location}
                </Text>
              </View>
              {/* duration and skills */}
              <View style={{ flexDirection: "row", marginTop: 6 }}>
                <Text
                  style={{
                    fontFamily: "Lato-Bold",
                    fontSize: 15,
                    color: "#6d6d6d",
                    marginLeft: 7,
                  }}
                >
                  {item.item.duration}
                </Text>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  {item.item.skills.map((skill) => {
                    return (
                      <Text
                        style={{
                          fontFamily: "OpenSans-Regular",
                          fontSize: 12,
                          color: "#818181",
                          marginLeft: 5,
                        }}
                      >
                        {skill}
                      </Text>
                    );
                  })}
                </View>
              </View>
            </View>
            {/* image */}
            <View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#004953",
                  marginRight: 6,
                  marginTop: 16,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function RenderFeed(props) {
  return (
    <View>
      {/* title */}
      <Text
        style={{
          marginLeft: 10,
          marginTop: 30,
          fontFamily: "Lato-Bold",
          fontSize: 21,
          color: "#4A4A4A",
        }}
      >
        Feed
      </Text>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={[
            {
              id: "001",
              owner: "for you one",
              duration: "2-4 weeks",
              skills: ["python", "javascript", "java", "c++"],
              job: "Full Stack Developer",
              location: "lagos",
            },
            {
              id: "002",
              owner: "Jessica ",
              duration: "1-3 months",
              skills: ["pastries", "smallchops", "asian", "oriental"],
              job: "Chef for asian themed party",
              location: "lagos",
            },
            {
              id: "003",
              owner: "for you three",
              duration: "2-4 weeks",
              skills: ["python", "javascript", "java", "c++"],
              job: "Full Stack Developer",
              location: "lagos",
            },
          ]}
          renderItem={(item) => FeedItems(item)}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
const [bottomCardVisibility, setBottomCardVisibility] = useState(false);

function RenderSearch() {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("pressed");
          // this.props.navigation.navigate("Search Screen");
          // this.searchBottomSheet.current.snapTo(1);
          setBottomCardVisibility(true);
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#434",
            position: "absolute",
            top: 730,
            left: 20,
            zIndex: 1,
          }}
        />
      </TouchableWithoutFeedback>
      <BottomCard
        show={bottomCardVisibility}
        onExit={() => setBottomCardVisibility(false)}
      >
        <Text style={{ textAlign: "center" }}>This is the card content</Text>
      </BottomCard>
      <Button title="Show card" onPress={() => setBottomCardVisibility(true)} />
    </View>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
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

  indicator = "component is mounting fine";

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
        {/* <Feed
          index={this.state.index}
          indicator={indicator}
          jobData={activeJobs}
          bidData={activeBids}
        /> */}
        <Search close={() => this.snapToBottom()} />
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

  searchBottomSheet = React.createRef();

  snapToBottom = () => {
    this.searchBottomSheet.current.snapTo(0);
  };

  closeBottomSheet = () => {
    return <Button onPress={this.RBSheet.close()} title="close" />;
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* search button */}

          <RenderSearch />
          <MAWHeader props={this.props} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Lato-Bold",
                  fontSize: 19,
                  color: "#4a5a5a",
                  paddingLeft: 18,
                  marginBottom: 5,
                  // fontWeight: "bold",
                }}
              >
                Good evening
              </Text>
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
              {/* FOR YOU */}
              <RenderForYou props={this.props} />
              {/* Feed  */}
              <RenderFeed props={this.props} />

              {/* Search component */}
              {/* <Search props={this.props} /> */}
              {/* Bottom sheet component */}
            </View>
            {/* 
            <BottomSheet
              ref={this.searchBottomSheet}
              snapPoints={[0, "100%"]}
              renderContent={this.renderContent}
              renderHeader={this.renderHeader}
              // onOpenStart={this.toggleIndex}
              // onCloseStart={this.snapToBottom}
              enabledContentGestureInteraction={true}
            /> */}
          </ScrollView>
          <RBSheet
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            height={winheight}
            duration={550}
            customStyles={{
              container: {},
            }}
          >
            <Search />
          </RBSheet>
          <View>{this.closeBottomSheet}</View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Home;
