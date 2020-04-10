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
import SnapShot from "../components/snapshot";

// Data
import { activeJobs, activeBids } from "../components/dev/data";

import MAWHeader from "../components/header";
import { ScrollView } from "react-native-gesture-handler";

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
          fontSize: 20,
          color: "#4A4A4A",
        }}
      >
        In your orbit
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

// function SearchScreen() {
//   return (
//     <View>
//       <Text>abeg o</Text>
//     </View>
//   );
// }

export function RenderHomePage(props) {
  const [bottomCardVisibility, setBottomCardVisibility] = useState(false);
  return (
    <View style={{ flex: 1, zIndex: 0 }}>
      <View style={{}}>
        <TouchableWithoutFeedback
          onPress={() =>
            console.log(props.navigation.navigate("Search Screen"))
          }
        >
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: "#ff6600",
              position: "absolute",
              zIndex: 5,
              bottom: 100,
              left: 10,
            }}
          />
        </TouchableWithoutFeedback>
        <MAWHeader props={this.props} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Greeting />
          <SnapShot />
          <RenderForYou />
          <RenderFeed />
        </ScrollView>
      </View>

      <BottomCard
        show={bottomCardVisibility}
        onExit={() => setBottomCardVisibility(false)}
      >
        {/* <Text style={{ flex: 1, textAlign: "center" }}>
          This is the card content{" "}
        </Text> */}
        <Search />
        <Button
          title="hide card"
          onPress={() => setBottomCardVisibility(false)}
        />
      </BottomCard>
    </View>
  );
}

const Greeting = () => {
  return (
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
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <RenderHomePage navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default Home;
