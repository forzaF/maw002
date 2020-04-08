import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Jobs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Jobs</Text>
      </View>
    );
  }
}
export default Jobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
