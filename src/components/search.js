import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
// import SearchForm from "../screens/search-form";
import Icon from "react-native-vector-icons/MaterialIcons";
import RBSheet from "react-native-raw-bottom-sheet";
import SearchForm from "../screens/search-form";

function ModalScreen({ navigation }) {
  navigation.navigate("MyModal", {
    itemId: 86,
    otherParam: "anything you want here"
  });
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      searchText: "",
      location: "lagos",
      fadeValue: new Animated.Value(0)
    };
  }

  _start = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 500
    }).start();
  };

  openModal = text => {
    this.props.props.navigation.navigate("MyModal", {
      itemId: 86,
      searchText: text,
      location: this.state.location
    });
    this.clearSearchText();
  };

  segmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }

  clearSearchText = () => {
    this.setState({
      searchText: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Search box */}
        <View
          style={{
            flex: 1,
            paddingTop: "25%",
            // width: "100%",

            alignItems: "center"
          }}
        >
          <Animated.View
            style={{
              opacity: this.state.fadeValue
            }}
          >
            <Text style={{ color: "#5A90E6" }}>
              We've got anyWorker you need
            </Text>
          </Animated.View>
          <TextInput
            style={styles.searchTextinput}
            placeholder="Looking for..."
            placeholderTextColor="#bfbfbf"
            autoCapitalize="none"
            onFocus={() => this._start()}
            onEndEditing={() =>
              this.setState({ fadeValue: new Animated.Value(0) })
            }
            value={this.state.searchText}
            onChangeText={val => this.onChangeText("searchText", val)}
            onSubmitEditing={() => {
              if (this.state.searchText !== "") {
                this.RBSheet.open();
              } else {
                return null;
              }
            }}
          ></TextInput>
          {/* Location */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingTop: 15,
              alignSelf: "flex-end"
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
                  flexDirection: "row"
                }}
              >
                <Icon name={"place"} size={22} color={"#5A90E6"} />
                <Text
                  style={[
                    { borderRadius: 0 },
                    { padding: 0 },
                    { elevation: 3 },
                    styles.locationSelected
                  ]}
                >
                  Lagos
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={380}
          duration={250}
          customStyles={{
            container: {
              // justifyContent: "center",
              // alignItems: "center"
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }
          }}
          closeOnDragDown={true}
        >
          <SearchForm searchText={this.state.searchText} page={1} />
        </RBSheet>
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 18,
    backgroundColor: "#fff"
  },
  searchTextinput: {
    width: "100%",
    borderBottomColor: "#424242",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "helvetica",
    paddingLeft: 10,
    paddingBottom: 5,
    color: "#4d4d4d"
  },
  locationSelected: {
    color: "#5A90E6",
    fontWeight: "700",
    fontSize: 16
  },
  locationUnselected: {
    color: "#777"
  }
});
