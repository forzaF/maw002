import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import DisplayTransaction from '../components/display-transaction'


let accountHistory = [
    {
        name: 'MAW Yetunde',
        amount: 80000,
        type: 'credit',
        transID: 1,
        date: '25-Feb-20'
    },
    {
        name: 'Uber',
        amount: 4000,
        type: 'debit',
        transID: 2,
        date: '24-Feb-20'
    }
]

export class TransactionHistory extends Component {
    constructor(props){
        super(props);

        this.state = {
            transactionHistory: []
        }
    }

    componentDidMount() {
        this.setState({
            transactionHistory: accountHistory
        })
    }

    renderTransactions = () => {
        if(1 === 1) {
            return(
                <View>
                    {
                        this.state.transactionHistory.map(transaction => {
                            let icon, iconColor

                            switch(transaction.type){
                                case 'debit':
                                    icon = 'ios-remove'
                                    iconColor = 'red'
                                    return(
                                        <DisplayTransaction
                                            name={transaction.name}
                                            amount={transaction.amount}
                                            date={transaction.date} 
                                            icon= {icon}
                                            iconColor = {iconColor}
                                            />
                                            )
                                case 'credit' :
                                    icon = 'ios-add'
                                    iconColor = '#00AA00'
                                    return(
                                        <DisplayTransaction
                                            name={transaction.name}
                                            amount={transaction.amount}
                                            date={transaction.date} 
                                            icon= {icon}
                                            iconColor = {iconColor}
                                            />
                                            )
                            }
                            })
                        }
                </View>
                )
        } else {
            return(
                <View style={{flex: 1, justifyContent: "center"}}>
                    <Text>Nothing Yet.</Text> 
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                {this.renderTransactions()}
            </View>
        );
    }
}

export default TransactionHistory;

export function THContainer() {
    return(
        <View>
            <View style={{flex: 1, justifyContent: "center", alignSelf: 'center'}}>
                <View style={{width: 55, height: 5, borderRadius: 50/3, backgroundColor: '#BDBEC8'}}></View>
            </View>
                {/* Transaction label */}
            <View style={{marginLeft: '8%', marginRight: 18, marginBottom: 8, marginTop: 15}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: 'rgba(0,0,0,.65)' }}>HISTORY</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});