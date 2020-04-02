import React, { Component } from "react";
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
  Animated
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

let WIDTH = Dimensions.get("window").width;
let HEIGHT = Dimensions.get("window").height;

import Icon from "react-native-vector-icons/MaterialIcons";

import { SEARCH_DATA } from "../components/dev/data";

const searchFormNavigator = createStackNavigator();

function NavigateSearchForm(searchText) {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <searchFormNavigator.Navigator headerMode="none" style={{ flex: 1 }}>
        <searchFormNavigator.Screen
          name="Skills"
          component={Skills}
          initialParams={{ searchQuery: searchText.searchText }}
        />
        <searchFormNavigator.Screen
          name="JobDuration"
          component={JobDuration}
        />
        <searchFormNavigator.Screen
          name="MoreDetails"
          component={MoreDetails}
        />
      </searchFormNavigator.Navigator>
    </View>
  );
}

export function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        selected ? styles.itemSelected : styles.itemUnselected
      ]}
    >
      <Text
        style={[
          styles.title,
          selected ? styles.titleSelected : styles.titleUnselected
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
    id => {
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
function FormHeader(props) {
  return (
    <View
      style={{
        // alignSelf: "flex-end",
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Icon
        name={props.props.iconName}
        size={22}
        color={"#78A0E9"}
        style={{ alignSelf: "center" }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#5f6f5f"
        }}
      >
        {props.props.pageNumber}/3
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
        flexDirection: "row"
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
        flexDirection: "row"
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
      <FormHeader props={{ iconName: iconName, pageNumber: pageNumber }} />
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.label}>Select specific skills/qualifications</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <RenderAvailableSkills searchText={searchQuery} />
      </View>
      <View
        style={{
          alignSelf: "flex-end",
          position: "absolute",
          marginTop: 270
          // elevation: 3,
          // shadowOffset: { width: 1, height: 3 },
          // shadowColor: "#6797E7",
          // shadowOpacity: 1,
          // bottom: 20,
          // right: 20
        }}
      >
        <FormButtonNext
          props={{
            iconName: nextIcon,
            navigation: navigation,
            nextPage: nextPage
          }}
        />
      </View>
    </View>
  );
}

// Job Duration - Page 2
function JobDuration({ navigation }) {
  let pageNumber = 2;
  const backIconName = "star";
  const iconName = "event-note";
  const nextIcon = "note-add";
  const nextPage = "MoreDetails";

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <FormHeader props={{ iconName: iconName, pageNumber: pageNumber }} />
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.label}>Duration</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 77 }}>BACK</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "flex-end",
          // flex: 1
          width: "100%",
          position: "absolute",
          marginTop: 270
        }}
      >
        <FormButtonBack
          props={{
            iconName: backIconName,
            navigation: navigation
          }}
        />
        <FormButtonNext
          props={{
            iconName: nextIcon,
            navigation: navigation,
            nextPage: nextPage
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
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <FormHeader props={{ iconName: iconName, pageNumber: pageNumber }} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 77 }}>BACK</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "flex-end",
          // flex: 1
          width: "100%",
          position: "absolute",
          marginTop: 250
        }}
      >
        <FormButtonBack
          props={{
            iconName: backIconName,
            navigation: navigation
          }}
        />
        <TouchableOpacity>
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
      page: 1
    };
  }

  searchText = this.props.searchText.toLowerCase().trim();
  location = this.props.location;

  searchData = SEARCH_DATA;

  // renderFormInParts = () => {
  //   if (this.state.page === 1) {
  //     return (
  //       <View>
  //         <View style={{ marginTop: 30, marginBottom: 20 }}>
  //           <Text style={styles.label}>
  //             Select specific skills/qualifications
  //           </Text>
  //         </View>
  //         <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
  //           <RenderAvailableSkills searchText={this.searchText} />
  //         </View>
  //         <TouchableOpacity onPress={this.moveToNextPage}>
  //           <Text>next---></Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   } else if (this.state.page == 2) {
  //     return (
  //       <View>
  //         <Text>{this.state.page}</Text>
  //         <TouchableOpacity onPress={this.moveToPrevPage}>
  //           <Text style={{ fontSize: 77 }}>BACK</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }
  // };

  moveToNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  };

  moveToPrevPage = () => {
    this.setState(prevState => ({
      page: prevState.page - 1
    }));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Render available skills for Type Worker searched for in "selectable tags" form */}
        {/* {this.renderFormInParts()} */}
        <NavigateSearchForm searchText={this.searchText} />
      </SafeAreaView>
    );
  }
}
export default SearchForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 18
  },
  textInput: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "helvetica",
    paddingLeft: 10,
    paddingBottom: 5,
    color: "#4d4d4d"
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
    borderColor: "#78A0E9"
  },
  itemSelected: {
    backgroundColor: "#78A0E9"
  },
  title: {
    fontSize: 19
  },
  titleUnselected: {
    color: "#6797E7"
  },
  titleSelected: {
    color: "#fff"
  },
  label: {
    fontSize: 22,
    color: "#3F3F3F"
  }
});
