import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Button,
    TouchableWithoutFeedback
} from "react-native";
import {Header, Left, Right} from "native-base";

import MaskedViewIOS from '@react-native-community/masked-view';

//Icons and gradient
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

//navigation
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import Home from "./home"
import Feed from "./feed";
import Profile from './profile'
import Wallet from './wallet'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function mawHome() {
  return (
          <Tab.Navigator
          screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                  iconName = 'md-home'
              } else if (route.name === 'Wallet') {
                  iconName = 'ios-wallet';
              } else if (route.name === 'Profile') {
          iconName = 'md-person'
          }
          
              return <Ionicons name={iconName} size={size} color={color} />;
              },
          })}
          tabBarOptions={{
              activeTintColor: '#333',
              inactiveTintColor: '#888',
          }}
          >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Wallet" component={Wallet} />
              <Tab.Screen name="Profile" component={Profile} />
              </Tab.Navigator>
      );
  }

  function ModalScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }

  function HomeStack() {
    return (
        <NavigationNativeContainer>
            <Stack.Navigator
              screenOptions ={{
                headerShown: false
              }}
            >
              <Stack.Screen name="Home" component={mawHome} />
              <Stack.Screen name="MyModal" component={ModalScreen} />
            </Stack.Navigator>
        </NavigationNativeContainer>
        );
    }

    class TransitionScreen extends Component {
        render () {
            return (
                <HomeStack/>
            )
        }
    }

    export default TransitionScreen;