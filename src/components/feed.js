import React, { Component } from "react";
import { View, Text, StyleSheet, Button, SectionList } from "react-native";
import ActiveJobs from "./active-jobs";
import ActiveBids from "./active-bids";

import RBSheet from "react-native-raw-bottom-sheet";

import { DATA } from "../components/dev/data";
import ActiveJob from "./active-jobs-list-item";

function RenderActiveJobs(job, title) {
  if (job.title === "Active") {
    // let index = item.index;
    return (
      <View>
        <ActiveJob job={job.data} />
      </View>
    );
  } else if (job.title === "Bidding") {
    return (
      <View>
        <ActiveBids bid={job.data} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>nothing to see here folks</Text>
      </View>
    );
  }
}

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.index === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.temi}>{this.props.text}</Text>
          <Text style={styles.temi}> SWIPE UP TO SEE WHAT'S UP</Text>
        </View>
      );
    } else if (this.props.index === 1) {
      return (
        <View style={styles.container}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, section: { title }, index }) => (
              <RenderActiveJobs data={item} title={title} index={index} />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.titleLabel}>{title}</Text>
            )}
          />
        </View>
      );
    }
  }
}
export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  temi: {
    fontFamily: "Helvetica",
    fontSize: 16,
    // color: '#E7A0C7', temiPink
    color: "rgba(0,0,0,.45)",
    fontWeight: "bold",
    paddingBottom: 5,
    justifyContent: "center",
    alignSelf: "center"
  },
  titleLabel: {
    fontSize: 17,
    color: "#4F4E4E",
    fontWeight: "500",
    marginLeft: 18,
    backgroundColor: "#fff",
    // marginTop: 25,
    marginBottom: 15,
    paddingTop: 15
  }
});
