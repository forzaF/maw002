import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import Icon from "react-native-vector-icons/MaterialIcons";

import ActiveJobBottomSheet from "../components/active-job-bottom-sheet";

function RenderActiveJob(props) {
  return (
    <View>
      <TouchableOpacity onPress={() => this[RBSheet + props.job.id].open()}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginLeft: 18,
            marginBottom: 20
          }}
        >
          {/* Image */}
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 48,
                height: 48,
                borderRadius: 17,
                borderWidth: 1,
                borderColor: "#ddd",
                marginRight: 15,
                justifyContent: "center",
                alignItems: "center"
              }}
              source={{ uri: props.job.image }}
            />
            {/* <Icon name='person' size={27} color='#ccc'></Icon> */}
            {/* job ++ person */}
            <View>
              {/* job */}
              <Text
                style={{ color: "#4F86E4", fontWeight: "500", fontSize: 17 }}
              >
                {" "}
                {props.job.job}
              </Text>
              {/* person and rating */}
              <View style={{ flexDirection: "row" }}>
                {/* Person */}
                <Text
                  style={{
                    color: "#4C4D4D",
                    fontWeight: "600",
                    fontSize: 16,
                    paddingTop: 4
                  }}
                >
                  {props.job.user}
                </Text>
                {/* rating */}
                <View
                  style={{
                    width: 33,
                    height: 16,
                    borderRadius: 5,
                    backgroundColor: "#004953",
                    marginTop: 6,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 11,
                        fontWeight: "500",
                        paddingLeft: 2
                      }}
                    >
                      {props.job.rating}
                    </Text>
                    <Icon
                      name="star"
                      color="white"
                      size={10}
                      style={{ alignSelf: "center" }}
                    ></Icon>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* date start */}
          <View style={{ marginRight: 18, justifyContent: "center" }}>
            <Text style={{ fontSize: 22, color: "#666", alignSelf: "center" }}>
              {props.job.startDay}
            </Text>
            <Text style={{ fontSize: 16, color: "#666", alignSelf: "center" }}>
              {props.job.startMonth}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={ref => {
          this[RBSheet + props.job.id] = ref;
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
        <ActiveJobBottomSheet job={props} />
      </RBSheet>
    </View>
  );
}

export default RenderActiveJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
