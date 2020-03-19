import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Image,
    SafeAreaView,
    Alert
} from "react-native";
import {Header, Left, Right} from "native-base";

//Icons and gradient
import Icon from 'react-native-vector-icons/MaterialIcons'
import GradientIcon from '../components/custom-icons'

//BottomSheet
import BottomSheet from 'reanimated-bottom-sheet'

// Components
import Search from '../components/search'
import Feed from '../components/feed'

// Data
import {activeJobs} from '../components/dev/data'


let indicator;

class Home extends Component   {
    
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }
    }  

    componentDidMount() {
        // this.setState = {
        //     listOfJobs: activeJobs[0]
        // }

        indicator = 'component is mounting fine'
    }

    openModal = () => {
        this.props.navigation.navigate('MyModal')
    }

    openNotifications = () => {
        this.props.navigation.navigate('Notifications')
    }

    renderContent = () => {
        let text ;
        if(this.state.index === 0) {
            text = "NO ACTIVE JOBS YET"
        } else if(this.state.index === 1){
            text = "NO ACTIVE JOBS YETTT"
        }
        return (
            <View style={{backgroundColor: 'white', height: '100%'}}>
                <Feed index={this.state.index} indicator={indicator} jobData={activeJobs} />
            </View>
        )
    }
    //* Bottom Sheet Header Control Icon
    renderHeaderControl = () => {
        if(this.state.index === 0) {
           return(
            <View style={{width: 55, height: 5, borderRadius: 50/3, backgroundColor: '#BDBEC8'}}></View>
           )
        } else if (this.state.index === 1) {
            return(
                <Icon name='keyboard-arrow-down' size={44} color={'#BDBEC8'}/>
            )
        }
    }
    
      renderHeader = () => (
          
        <View style={{backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 10}}>
            {/* Bottom Sheet Header Control Icon */}
        <View style={{flex: 1, justifyContent: "center", alignSelf: 'center'}}>
            {this.renderHeaderControl()}
        </View>
        </View>
      )

      toggleIndex = () => {
          if(this.state.index === 0) {
            this.setState({ index: 1})
          } else if (this.state.index === 1) {
            this.setState({ index: 0})
          }
        
      }
          

    render() {
        return (
            <View style={{flex: 1}}>
                <Header style={[{borderBottomWidth: 0}, {backgroundColor: '#F2F2F9'}]}>
                    {/* Feed button */}
                    <Left><TouchableOpacity
                        onPress={this.openModal}
                    >
                        <GradientIcon></GradientIcon>
                        </TouchableOpacity>
                    </Left>
                    <Right style={{paddingRight: 18}}>
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
                </Header>
                <Search/>
                <BottomSheet
                    snapPoints = {['10%','40%','80%']}
                    renderContent = {this.renderContent}
                    renderHeader = {this.renderHeader}
                    onOpenStart={this.toggleIndex}
                    onCloseEnd={this.toggleIndex}
                    enabledContentGestureInteraction={true}
                />


            </View>
        );
}
}

export default Home;

