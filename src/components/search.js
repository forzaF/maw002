import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Animated,
  Button,
  SafeAreaView,
  Keyboard,
  SectionList,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
// import SearchForm from "../screens/search-form";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import SearchForm from "../screens/search-form";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Right } from "native-base";

const WINDOW_HEIGHT = Dimensions.get("screen").height;

function ModalScreen({ navigation }) {
  navigation.navigate("MyModal", {
    itemId: 86,
    otherParam: "anything you want here",
  });
}

function DismissSearch(navigation) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigation.goBack()}
      style={{
        // flex: 1,
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 20,
        top: 5,
        // right: 100,
        // left: 100,
        // bottom: 100,
        // marginTop: 60,
      }}
    >
      <Ionicon name="ios-close" size={38} color={"#ff6600"} />
    </TouchableOpacity>
  );
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      searchText: "",
      location: "lagos",
      quickSearchOptions: [
        {
          title: "Recent",
          data: ["Photograper", "Make-up Artist", "Event Planner", "DJ"],
        },
        {
          title: "Trending",
          data: ["Electrician", "Lawyer", "Web Developer", "Digital Marketer"],
        },
      ],
    };
  }

  openModal = (text) => {
    this.props.props.navigation.navigate("MyModal", {
      itemId: 86,
      searchText: text,
      location: this.state.location,
    });
    this.clearSearchText();
  };

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }

  clearSearchText = () => {
    this.setState({
      searchText: "",
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <SafeAreaView style={styles.container}>
            <DismissSearch
              navigation={this.props.navigation}
              style={{ flex: 1 }}
            />
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}
            >
              <View
                style={{
                  // width: 44,
                  // height: 44,
                  borderRadius: 22,
                  position: "absolute",
                  zIndex: 5,
                  bottom: 400,
                  right: 13,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicon
                  name="ios-close"
                  size={38}
                  color={"#ff6600"}
                  style={{ margin: -15, padding: -15 }}
                />

                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 13,
                    alignSelf: "flex-start",
                    color: "#ff6600",
                    marginTop: 2,
                  }}
                >
                  Dismiss
                </Text>
              </View>
            </TouchableWithoutFeedback>
            {/* Search box */}
            <View
              style={{
                // flex: 1,
                marginTop: 50,
                marginHorizontal: 13,
              }}
            >
              <TextInput
                autoFocus={true}
                style={styles.searchTextinput}
                placeholder="Looking for..."
                placeholderTextColor="#bfbfbf"
                autoCapitalize="none"
                value={this.state.searchText}
                onChangeText={(val) => this.onChangeText("searchText", val)}
                onSubmitEditing={() => {
                  if (this.state.searchText !== "") {
                    this.RBSheet.open();
                  } else {
                    return null;
                  }
                }}
              />
              {/* Location */}
              <View
                style={{
                  // flex: 1,
                  flexDirection: "row",
                  paddingTop: 15,
                  alignSelf: "flex-end",
                }}
              >
                <TouchableWithoutFeedback
                  transparent
                  onPress={() => this.segmentClicked(0)}
                  active={this.activeIndex == 0}
                  title="Current Location"
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Icon name={"place"} size={22} color={"#0176C6"} />
                    <Text
                      style={[
                        { borderRadius: 0 },
                        { padding: 0 },
                        { elevation: 3 },
                        styles.locationSelected,
                      ]}
                    >
                      Lagos
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            {/* recents and trending */}
            <View style={{ marginHorizontal: 18 }}>
              <SectionList
                scrollEnabled={false}
                sections={this.state.quickSearchOptions}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 17,
                        color: "#4a4a4a",
                        marginVertical: 7,
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <Text
                    style={{
                      fontFamily: "Lato-Bold",
                      fontSize: 17,
                      color: "#4a4a4a",
                      marginBottom: 10,
                      marginTop: 18,
                    }}
                  >
                    {title}
                  </Text>
                )}
              />
            </View>

            {/* SEARCH FORM */}
            <RBSheet
              ref={(ref) => {
                this.RBSheet = ref;
              }}
              height={550}
              duration={250}
              customStyles={{
                container: {
                  // justifyContent: "center",
                  // alignItems: "center"
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                },
              }}
              closeOnDragDown={false}
            >
              <SearchForm searchText={this.state.searchText} page={1} />
            </RBSheet>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 18,
    backgroundColor: "#fff",
    // height: WINDOW_HEIGHT - 150,
    position: "relative",
  },
  searchTextinput: {
    width: "100%",
    borderBottomColor: "#424242",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Lato-Bold",
    paddingLeft: 10,
    paddingBottom: 5,
    color: "#4d4d4d",
  },
  locationSelected: {
    color: "#5A90E6",
    fontWeight: "700",
    fontSize: 16,
  },
  locationUnselected: {
    color: "#777",
  },
});
