import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

import SwipeableFlatList from "react-native-swipeable-list";
import { Row } from "native-base";

import RBSheet from "react-native-raw-bottom-sheet";

// Icons
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

import ActiveJob from "../components/active-jobs-list-item";
import ActiveJobBottomSheet from "../components/active-job-bottom-sheet";

import { DATA, activeJobs } from "../components/dev/data";

const extractItemKey = item => {
  return item.id.toString();
};

function renderItemSeparator() {
  return <View style={{ height: 10 }} />;
}

class ActiveJobs extends Component {
  constructor(props) {
    super(props);
  }

  activeJobs = this.props.jobData;

  RenderActiveJob = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => this[RBSheet + item.id].open()}>
          {/* <ActiveJob job={item} /> */}
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this[RBSheet + item.id] = ref;
          }}
          height={400}
          duration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }
          }}
          closeOnDragDown={true}
        >
          {/* <ActiveJobBottomSheet job={item} /> */}
        </RBSheet>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Render Active Jobs */}
        <FlatList
          data={this.activeJobs}
          renderItem={({ item }) => <Text>{item} ??</Text>}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </View>
    );
  }
}
export default ActiveJobs;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    // flexShrink: 1,
    backgroundColor: "#fff",
    paddingTop: 15
  },
  item: {
    backgroundColor: "#E7A0C7",
    padding: 20,
    height: 80,
    flexDirection: "row",
    paddingVertical: 10
  },
  title: {
    fontSize: 32,
    color: "#FF6602"
  }
});
