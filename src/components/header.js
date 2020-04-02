import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";

import { Header, Left, Right } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import GradientIcon from "../components/custom-icons";

class MAWHeader extends Component {
  constructor(props) {
    super(props);
  }
  openNotifications = () => {
    // this.openNotifications.bind(this);
    this.props.props.navigation.navigate("Notifications");
  };
  render() {
    return (
      <View
        style={[
          { borderBottomWidth: 0 },
          {
            backgroundColor: "transparent",
            // flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 2
          }
        ]}
      >
        {/* Feed button */}
        <View>
          <TouchableOpacity onPress={this.openModal}>
            <GradientIcon></GradientIcon>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="chat-bubble-outline"
            size={25}
            color={"rgba(0,0,0,.65)"}
            style={{
              transform: [{ scaleX: -1 }],
              alignSelf: "flex-start",
              marginTop: 17
            }}
            onPress={this.openNotifications}
          ></Icon>
          <View style={{ marginLeft: "10%", marginTop: "7%" }}>
            <Image
              source={require("../dev_assests/img/primary_user.jpg")}
              style={{ height: 38, width: 38, borderRadius: 38 / 2 }}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default MAWHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
