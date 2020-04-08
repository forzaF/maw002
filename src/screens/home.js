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

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <MAWHeader props={this.props} />
          <Text
            style={{
              fontFamily: "Lato-Bold",
              fontSize: 22,
              color: "rgba(0,0,0,.7)",
              paddingLeft: 18,
              // fontWeight: "bold",
            }}
          >
            Welcome, Fonts
          </Text>
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
