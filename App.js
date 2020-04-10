import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, View, Text, SafeAreaView, Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import Home from "./src/screens/home";
import Profile from "./src/screens/profile";
import Wallet from "./src/screens/wallet";
import SearchForm from "./src/screens/search-form";
import Jobs from "./src/screens/jobs";
import Search from "./src/components/search";

//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Foundation";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CouldIt = createStackNavigator();

function mawHome() {
  return (
    <Tab.Navigator
      tabBarPosition={"bottom"}
      tabBarOptions={{
        activeTintColor: "#333",
        inactiveTintColor: "#888",
        style: {
          borderTopColor: "transparent",
          borderTopWidth: 0,
          backgroundColor: "#fff",
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
          // flex: 1
        },
        indicatorStyle: {
          // flex: 1,
          width: 0,
          justifyContent: "center",
          alignSelf: "center",
        },
        showLabel: false,
        showIcon: true,
        headerMode: "none",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name={"home"} size={29} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          tabBarLabel: "Jobs",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"ios-briefcase"} size={29} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"ios-card"} size={29} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function ModalScreen({ route, navigation }) {
  return <SearchForm navigation={navigation} route={route} />;
}

function notificationsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      <Text style={{ fontSize: 30 }}>Notifications!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function notifications() {
  return (
    <CouldIt.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CouldIt.Screen name="CINotifications" component={notificationsScreen} />
    </CouldIt.Navigator>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Search navigation={navigation} />
    </View>
  );
}

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationContainer>
        <Stack.Navigator
          mode="modal"
          screenOptions={{
            headerShown: false,
            backgroundColor: "#fff",
          }}
          headerMode={false}
        >
          <Stack.Screen
            name="Home"
            component={mawHome}
            // options={{
            //   title: "My home",
            //   headerStyle: {
            //     backgroundColor: "#f4511e"
            //   },
            //   headerTintColor: "#fff",
            //   headerTitleStyle: {
            //     fontWeight: "bold"
            //   }
            // }}
          />
          <Stack.Screen
            name="MyModal"
            component={ModalScreen}
            options={{
              style: {
                backgroundColor: "#fff",
              },
            }}
          />
          <Stack.Screen name="Notifications" component={notifications} />
          <Stack.Screen name="Search Screen" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
