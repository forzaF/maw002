import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import MaskedViewIOS from '@react-native-community/masked-view';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default class GradientIcon extends React.Component {
    render() {
      return (
      <MaskedViewIOS 
        maskElement={
            <View
            style={{
                backgroundColor: 'transparent',
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
                marginTop: 10,
              }}>
            <Ionicons 
                name="ios-planet" 
                size={40} 
                style={{paddingLeft: 20}}
                color={'black'}
                >
            </Ionicons>
            </View>
            }>
                <LinearGradient
                    colors={['#41EBD0','#4AE4D2', '#2C76FC']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                <Ionicons 
                    name="ios-planet" 
                    size={40} 
                    style={{paddingLeft: 20, paddingTop: 15, opacity: 0}}
                    color={'black'}
                >
                </Ionicons>
                </LinearGradient>
      </MaskedViewIOS>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});