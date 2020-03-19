import React, { Component } from "react";

import { Animated, Easing, Platform } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CollapseExpandScreen from './CollapseExpandScreen';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './home'
import Feed from './feed'
import Profile from './profile'
import Wallet from './wallet'

const Tab = createBottomTabNavigator();

export default function mainNav() {
        return (
        <NavigationNativeContainer>
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
        </NavigationNativeContainer>
        );
    }


// let SlideFromRight = (index, position, width) => {
//     const translateX = position.interpolate({
//         inputRange: [index - 1, index],
//         outputRange: [width, 0],
//     })
    
//     return { transform: [ { translateX } ] }
//     };
    
    let SlideFromBottom = (index, position, height) => {
    const translateY = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [height, 0],
    })
    
    return { transform: [ { translateY } ] }
    };
    
    let CollapseTransition = (index, position) => {
        
        const opacity = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 1]
    });
    
    const scaleY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 1]
    });
    
    return {
        opacity,
        transform: [ { scaleY } ]
    }
    }
    
    const TransitionConfiguration = () => {
    return {
        transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const width = layout.initWidth;
        const height = layout.initHeight;
        const { index, route } = scene
        const params = route.params || {}; // <- That's new
        const transition = params.transition || 'default'; // <- That's new
        return {
            // default: SlideFromRight(index, position, width),
            bottomTransition: SlideFromBottom(index, position, height),
            collapseTransition: CollapseTransition(index, position)
        }[transition];
        },
    }
    }
    
    const RootStack = createStackNavigator({
    // SlideFromRight: { screen: SlideFromRightScreen },
    SlideFromBottom: { screen: Feed },
    Base: { screen: Home },
    CollapseExpand: { screen: CollapseExpandScreen }
    }, {
        initialRouteName: 'Home',
        headerMode: 'screen',
        transitionConfig: TransitionConfiguration,
    });
    
    // export default TransitionApp
    const AppContainer = createAppContainer(RootStack);
    
export class TransitionApp extends Component {
    render() {
        return <AppContainer />;
        }
    }