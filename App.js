import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text } from 'react-native';

import Home from './src/screens/home'
import Profile from './src/screens/profile'
import Wallet from './src/screens/wallet'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Foundation'
import { IconFill, IconOutline } from "@ant-design/icons-react-native"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CouldIt = createStackNavigator();

function mawHome() {
  return (
          <Tab.Navigator
          screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                  ioniconName = 'md-home'
                  iconName = 'home'

                  return  <Icon name={iconName} size={29} color={color} />
              } else if (route.name === 'Wallet') {
                  ioniconName = 'ios-card';
                  iconName = 'credit-card';
              } else if (route.name === 'Profile') {
                  ioniconName = 'md-person';
                  iconName = 'torso';
          } else if (route.name === 'Feed') {
            iconName = 'ios-paper-plane'
          }
          
              return <Ionicons name={ioniconName} size={29} color={color} />;
              },
          })}
          tabBarOptions={{
              activeTintColor: '#333',
              inactiveTintColor: '#888',
          },{
            style: {
              // position: "absolute",
              borderTopColor: "transparent",
              borderTopWidth: 0,
              backgroundColor: '#fff',
              // marginBottom: '6%',
              // width: '70%',
              // alignSelf: "center",
              // marginLeft: '15%',
              // marginRight: '15%',
              // borderRadius: 30,
              // height: 66,
              // justifyContent: "center",
              // paddingTop: '2%'
            }, 
            showLabel: false,
        }
        
        }
          
          >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Wallet" component={Wallet} />
              {/* <Tab.Screen name="Profile" component={Profile} /> */}
              </Tab.Navigator>
      );
  }

  function ModalScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      </View>
    );
  }

  function notificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Notifications!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }

  function notifications () {
    return(
      <CouldIt.Navigator
        screenOptions ={{
        headerShown: false
        }}
      >
        <CouldIt.Screen name="CINotifications" component={notificationsScreen} />
      </CouldIt.Navigator>
    )
  }


  function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                mode="modal"
                screenOptions ={{
                headerShown: false
              }}
            >
              <Stack.Screen name="Home" component={mawHome} />
              <Stack.Screen name="MyModal" component={ModalScreen} />
              <Stack.Screen name="Notifications" component={notifications} />
            </Stack.Navigator>
        </NavigationContainer>
        );
    }


export default App;