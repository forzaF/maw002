import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
  Platform,
} from "react-native";
import moment from "moment";

import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

import DateTimePicker from "@react-native-community/datetimepicker";

import { SEARCH_DATA } from "../components/dev/data";

let WIDTH = Dimensions.get("window").width;
let HEIGHT = Dimensions.get("window").height;

const postJobForm = createStackNavigator();

function PostedJob(navigation) {
  return (
    <View>
      <Text>Posted Job Here</Text>
    </View>
  );
}

function PostJobForm(searchText) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <postJobForm.Navigator headerMode="none" style={{ flex: 1 }}>
        <postJobForm.Screen
          name="Skills"
          component={Skills}
          initialParams={{ searchQuery: searchText.searchText }}
        />
        <postJobForm.Screen name="JobDuration" component={JobDuration} />
        <postJobForm.Screen name="MoreDetails" component={MoreDetails} />
      </postJobForm.Navigator>
    </View>
  );
}

export function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        selected ? styles.itemSelected : styles.itemUnselected,
      ]}
    >
      <Text
        style={[
          styles.title,
          selected ? styles.titleSelected : styles.titleUnselected,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function RenderAvailableSkills(props) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  DATA = SEARCH_DATA;

  return DATA.map((item, i) => {
    if (item.workerType === props.searchText) {
      let key;
      let title;
      let id;
      // let onSelect = this.onSelect;
      return item.skills.map((item, i) => {
        return (
          <Item
            key={i}
            id={item.id}
            title={item.skill}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        );
      });
    } else {
      console.log(props.searchText);
      return (
        <View>
          <Text>We are in Else</Text>
        </View>
      );
    }
  });
}

// SEARCHFORM CONTROLS
function FormHeader() {
  return (
    <View
      style={{
        // alignSelf: "flex-end",
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Icon
        name={"star"}
        size={22}
        color={"#78A0E9"}
        style={{ alignSelf: "center" }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#5f6f5f",
        }}
      >
        1/3
      </Text>
    </View>
  );
}

function FormButtonNext(props) {
  let icon = props.props.iconName;
  let navigation = props.props.navigation;
  let nextPage = props.props.nextPage;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(nextPage)}
      style={{
        alignSelf: "flex-end",
        backgroundColor: "#317CFA",
        paddingVertical: 4,
        // paddingLeft: 30,
        width: 90,
        paddingRight: 10,
        // alignContent: "flex-end",
        justifyContent: "space-between",
        borderRadius: 10,
        marginRight: 5,
        flexDirection: "row",
      }}
    >
      <Icon
        name={icon}
        size={22}
        color={"#fff"}
        style={{ alignSelf: "center", marginLeft: 12, paddingBottom: 3 }}
      />
      <Icon name="arrow-forward" size={33} color={"#fff"} />
    </TouchableOpacity>
  );
}

function FormButtonBack(props) {
  let icon = props.props.iconName;
  let navigation = props.props.navigation;

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        // alignSelf: "flex-end",
        // backgroundColor: "#317CFA",
        paddingVertical: 4,
        // paddingLeft: 30,
        width: 90,
        paddingRight: 10,
        // alignContent: "flex-end",
        // justifyContent: "space-between",
        borderRadius: 10,
        marginRight: 18,
        flexDirection: "row",
      }}
    >
      <Icon
        name={icon}
        size={22}
        color={"#317CFA"}
        style={{ alignSelf: "center", paddingBottom: 0, marginRight: 2 }}
      />
      <Icon name="arrow-back" size={33} color={"#317CFA"} />
    </TouchableOpacity>
  );
}

// SEARCHFORM PAGEs

//Skills page - page 1
function Skills({ route, navigation }) {
  const { searchQuery } = route.params;
  let pageNumber = 1;
  const iconName = "star";
  const nextIcon = "event-note";
  const nextPage = "JobDuration";

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {/* <FormHeader props={{ iconName: iconName, pageNumber: pageNumber }} /> */}
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.label}>Any specific skills or qualifications?</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <RenderAvailableSkills searchText={searchQuery} />
      </View>
      <View
        style={{
          alignSelf: "flex-end",
          position: "absolute",
          bottom: 30,
          right: 10,
        }}
      >
        <FormButtonNext
          props={{
            iconName: nextIcon,
            navigation: navigation,
            nextPage: nextPage,
          }}
        />
      </View>
    </View>
  );
}

// Job Duration - Page 2
function JobDuration({ navigation }) {
  // Date picker state controls
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    // setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const dateString = date.toLocaleString("en-US", {
    timeZone: "Africa/Lagos",
  });

  //form navigation controls
  let pageNumber = 2;
  const backIconName = "star";
  const iconName = "event-note";
  const nextIcon = "note-add";
  const nextPage = "MoreDetails";

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          marginBottom: 15,
          // flexDirection: "row",
          // justifyContent: "space-between",
        }}
      >
        <Text style={styles.label}>When?</Text>
        <TouchableOpacity
          onPress={showDatepicker}
          style={{
            flexDirection: "row",
            color: "#555",
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans-Bold",
              fontSize: 22,
              color: "#4a4a4a",
            }}
          >
            {moment.utc(date).format("dddd, MMM D")} at{" "}
            {moment.utc(date).format("h:mm A")}
          </Text>
          <View>{/* <Icon name={"arrow-drop-down"} size={33} /> */}</View>
          {/* <Text>{Date()}</Text> */}
        </TouchableOpacity>
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={"datetime"}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        <View style={{ marginTop: 18 }}>
          <Text style={styles.label}>Duration</Text>
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={[
                { id: "001", duration: "< 1 day" },
                { id: "002", duration: "1 - 5 days" },
                { id: "003", duration: "1 - 2 weeks" },
                { id: "004", duration: "3 - 4 weeks" },
                { id: "005", duration: "1 - 3 months" },
                { id: "006", duration: "> 3 months" },
              ]}
              renderItem={(item) => {
                return (
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontFamily: "OpenSans-Bold",
                        fontSize: 17,
                        marginLeft: 15,
                        color: "#4a4a4a",
                      }}
                    >
                      {item.item.duration}
                    </Text>
                  </View>
                );
              }}
              keyExtractor={(item, index) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "flex-end",
          // flex: 1
          width: "100%",
          position: "absolute",
          bottom: 10,
        }}
      >
        <FormButtonBack
          props={{
            iconName: backIconName,
            navigation: navigation,
          }}
        />
        <FormButtonNext
          props={{
            iconName: nextIcon,
            navigation: navigation,
            nextPage: nextPage,
          }}
        />
      </View>
    </View>
  );
}

// MoreDetails - Page 3
function MoreDetails({ navigation }) {
  let pageNumber = 3;
  const backIconName = "event-note";
  const iconName = "note-add";
  const handleClick = () => {
    navigation.navigate("Home");
  };
  return (
    <View
      style={{ backgroundColor: "#fff", flex: 1 }}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps={"always"}
    >
      <TextInput
        autoFocus={true}
        style={{
          fontFamily: "OpenSans-Bold",
          fontSize: 22,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: "#ccc",
          padding: 5,
        }}
        placeholder="Title your project"
        placeholderTextColor="#666"
      />
      {/* additional details */}
      <TextInput
        numberOfLines={25}
        multiline={true}
        textAlignVertical={"top"}
        placeholder="additional details"
        placeholderTextColor="#666"
        style={{
          // flex: 1,
          borderBottomWidth: 1,
          borderColor: "#ccc",
          height: 250,
          fontFamily: "OpenSans-Regular",
          fontSize: 18,
          paddingTop: 10,
          marginLeft: 5,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "flex-end",
          // flex: 1
          width: "100%",
          position: "absolute",
          bottom: 90,
        }}
      >
        <FormButtonBack
          props={{
            iconName: backIconName,
            navigation: navigation,
          }}
        />
        <TouchableOpacity onPress={handleClick}>
          <Text style={{ fontSize: 22 }}>POST JOB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };
  }

  searchText = this.props.searchText.toLowerCase().trim();

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FormHeader />
        <PostJobForm searchText={this.searchText} />
      </SafeAreaView>
    );
  }
}
export default SearchForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 18,
    marginTop: 18,
  },
  textInput: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "helvetica",
    paddingLeft: 10,
    paddingBottom: 5,
    color: "#4d4d4d",
  },
  item: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 18,
    marginHorizontal: 9,
    flexWrap: "wrap",
    flexDirection: "column",
    borderWidth: 1.5,
    borderColor: "#78A0E9",
  },
  itemSelected: {
    backgroundColor: "#78A0E9",
  },
  title: {
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  titleUnselected: {
    color: "#6797E7",
  },
  titleSelected: {
    color: "#fff",
  },
  label: {
    fontSize: 19,
    color: "#4a4a4a",
    fontFamily: "Lato-Bold",
  },
});
