import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Header, Left, Right, Row } from "native-base";
import BottomSheet from "reanimated-bottom-sheet";

import {
  CreditDisplay,
  THContainer,
  DebitDisplay,
  TransactionHistory
} from "../components/transaction-history";

import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import RBSheet from "react-native-raw-bottom-sheet";
import SlidingUpPanel from "rn-sliding-up-panel";
import Icon from "react-native-vector-icons/MaterialIcons";
import GradientIcon from "../components/custom-icons";

let { width, height } = Dimensions.get("screen");

class Wallet extends Component {
  openNotifications = () => {
    this.props.navigation.navigate("Notifications");
  };

  renderContent = () => (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <TransactionHistory />
    </View>
  );

  renderHeader = () => (
    <View
      style={{
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 15
      }}
    >
      <THContainer />
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Header style={[{borderBottomWidth: 0}, {backgroundColor: '#F2F2F9', marginBottom: 25}]}>
                    <Left><TouchableOpacity
                        onPress={this.openModal}
                    >
                        <GradientIcon></GradientIcon>
                        </TouchableOpacity>
                    </Left>
                    <Right style={{paddingRight: 18,}}>
                        <Icon 
                        name="chat-bubble-outline" 
                        size={25}
                        color={'rgba(0,0,0,.65)'}
                        style={{ transform: [{ scaleX: -1 }], alignSelf: "flex-start", marginTop: 17}}
                        onPress={this.openNotifications}
                        ></Icon>
                        <View style={{marginLeft: '10%', paddingTop: '5%'}}>
                            <Image                       
                                source={require('../dev_assests/img/primary_user.jpg')}
                                style={{height: 38, width: 38, borderRadius: 38/2, }}/>
                        </View>
                    </Right>
                </Header> */}
        {/* "card" */}
        <LinearGradient
          colors={["#0020D6", "#0020D6"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={{ justifyContent: "center" }}>
            <View>
              {/* myAnyWork Logo  */}
              <View>
                <Text style={styles.mawlogoOnCard}>myAnyWork</Text>
              </View>
              {/* Account Balance */}
              <View style={{ marginLeft: 20 }}>
                {/* Account Balance Figure*/}
                <View style={{ flexDirection: "row" }}>
                  {/* Naira Symbol */}
                  <View>
                    <Text style={styles.nairaSymbol}>{"\u20A6"}</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 1,
                        color: "white",
                        paddingLeft: 1,
                        paddingTop: 14,
                        fontSize: 33,
                        color: "#fff"
                      }}
                    >
                      .
                    </Text>
                  </View>
                </View>
                <Text style={styles.accountBalanceAmount}>
                  {parseInt(7777777).toLocaleString("en-US", {
                    style: "decimal",
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })}
                </Text>
              </View>
              {/* card details */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginTop: 44,
                  marginRight: 15
                }}
              >
                {/* card details button */}
                <LinearGradient
                  colors={["#41EBD0", "#4AE4D2", "#2C76FC"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 33, width: 33, borderRadius: 33 / 2 }}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
        {/* Actions + Transactions */}
        {/* Actions */}
        <View>
          {/* Make Payment label */}
          <View
            style={{
              marginTop: "10%",
              marginBottom: "1%",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "rgba(0,0,0,.65)",
                fontWeight: "800",
                fontFamily: "Helvetica"
              }}
            >
              FAST PAY
            </Text>
          </View>
          {/* payments available */}
          <View style={{ marginLeft: 15 }}>
            {/* payment */}
            <View style={{ flexDirection: "row" }}>
              {/* top up */}
              <View
                style={{
                  marginLeft: "5%",
                  alignContent: "center",
                  alignItems: "center",
                  height: 100,
                  justifyContent: "center",
                  width: 100,
                  borderRadius: 50
                }}
              >
                {/* icon */}
                <Ionicons
                  name="ios-phone-portrait"
                  size={44}
                  color="#0762ED"
                  style={{ paddingBottom: "2%" }}
                  onPress={() => this.RBSheet.open()}
                />
                {/* label */}
                <View>
                  <Text
                    style={{
                      paddingTop: "1%",
                      color: "#0020D6",
                      fontSize: 14,
                      fontWeight: "600",
                      justifyContent: "flex-end"
                    }}
                  >
                    Top-up
                  </Text>
                </View>
              </View>
              {/* TV */}
              <View
                style={{
                  marginLeft: "5%",
                  alignItems: "center",
                  height: 105,
                  width: 100,
                  borderRadius: 19,
                  justifyContent: "center"
                }}
              >
                {/* icon_tv */}
                <Ionicons
                  name="md-tv"
                  size={33}
                  color="#0762ED"
                  onPress={() => this._panel.show()}
                />
                {/* label_tv */}
                <View style={{ justifyContent: "flex-end" }}>
                  <Text
                    style={{
                      paddingTop: "13%",
                      color: "#0020D6",
                      fontSize: 14,
                      fontWeight: "600",
                      justifyContent: "flex-end"
                    }}
                  >
                    TV
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginLeft: "5%",
                  alignItems: "center",
                  height: 105,
                  width: 100,
                  borderRadius: 19,
                  justifyContent: "center"
                }}
              >
                <Ionicons name="md-send" size={33} color="#0762ED" />
                <View style={{ justifyContent: "flex-end" }}>
                  <Text
                    style={{
                      paddingTop: "13%",
                      color: "#0020D6",
                      fontSize: 14,
                      fontWeight: "600",
                      justifyContent: "flex-end"
                    }}
                  >
                    Transfer
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Bottom Sheet */}
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={350}
          duration={250}
          customStyles={{
            container: {
              // justifyContent: "center",
              // alignItems: "center"
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }
          }}
          closeOnDragDown={true}
        >
          <Text>Top-up</Text>
          {/* <TransactionHistory/> */}
          {/* <CreditDisplay/> */}
        </RBSheet>
        {/* <SlidingUpPanel 
                        ref={c => this._panel = c} 
                        draggableRange={{top: (height + 60 )- 150, bottom: (height) / 3.5}}
                        showBackdrop={false}
                        // height={height / 3}
                        containerStyle={{
                            backgroundColor: '#fff',
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30
                        }}
                    >
                        <View>
                            <THContainer/>
                            <TransactionHistory/>
                        </View>
                    </SlidingUpPanel> */}

        <BottomSheet
          snapPoints={["20%", "80%", "30%"]}
          renderContent={this.renderContent}
          renderHeader={this.renderHeader}
          backgroundColor="#fff"
        />
      </SafeAreaView>
    );
  }
}
export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  linearGradient: {
    height: height * 0.26,
    marginTop: 15,
    borderRadius: 12,
    marginLeft: 18,
    marginRight: 18,
    paddingTop: "2%"
  },
  mawlogoOnCard: {
    fontFamily: "futura",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    fontWeight: "bold",
    paddingRight: "5%",
    paddingTop: "3%",
    fontSize: 18,
    color: "rgba(255,255,255,.7)"
  },
  nairaSymbol: {
    paddingTop: "5%",
    fontSize: 25,
    color: "#fff",
    textDecorationLine: "underline",
    fontWeight: "700"
  },
  accountBalanceAmount: {
    flexShrink: 1,
    fontSize: 33,
    color: "#fff"
  },
  // bookBalanceLabel: {paddingLeft:'5%', fontFamily: 'futura', color: '#3f3f3f', fontSize:16, marginTop:'5%'
  // },
  // bookBalanceAmount: {paddingLeft:'2%', fontFamily: 'Courier New', fontSize:20, flexShrink:1, color:'grey', flexWrap: 'wrap', alignSelf: 'center', color: '#3f3f3f', paddingTop: 0, marginTop:'5%'
  // },
  nametag: {
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
    fontSize: 16,
    color: "rgba(255,255,255,.4)",
    fontWeight: "bold"
  },
  cardDetails: {
    justifyContent: "center",
    marginLeft: "22%"
    // alignItems: 'flex-end',
    // marginRight: '5%', marginTop: '8%'
  }
});
