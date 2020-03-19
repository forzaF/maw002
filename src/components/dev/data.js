import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

export const activeJobs = [
    {
        job: 'Landing Page',
        user: 'Tolani Williams',
        startDay: 22,
        startMonth: "AUG",
        rating: 4.4,
        deadline: 'November 19, 2019',
        location: 'Virtual',
        id: "23430",
        timestamp: "2019-11-30T19:33:44.124Z",
        bid: false,
        type: 'job',
        status: 'no bid',
        bidAmount: '',
        image: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/woman-wearing-black-sweatshirt-using-silver-macbook-1181230.jpg',
        jobAmount: 25000
    },
    {
        job: 'Lunch date',
        user: 'Fernando Rodriguez',
        startDay: 19,
        startMonth: "AUG",
        rating: 4.5,
        deadline: 'December 19, 2019',
        location: 'Virtual',
        id: "134545",
        timestamp: "2019-11-28T19:14:44.124Z",
        bid: false,
        type: 'job',
        status: 'bid sent',
        bidAmount: '',
        image: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/chef-holding-white-tea-cup-887827.jpg',
        jobAmount: 33000
    },
    {
        job: 'Personal fitness regime', 
        user: 'Femi Fitness',
        startDay: 10,
        startMonth: "AUG",
        rating: 4.0,
        id: "3",
        timestamp: "2019-11-29T19:04:44.124Z",
        reply: false,
        type: 'review',
        title: 'Awesome Job',
        review: 'Frank is very quick and delivered my work exactly to order. Definitely recommend.',
        image: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/man-wearing-orange-nike-crew-neck-t-shirt-733500.jpg',
        jobAmount: 30000
    },
    {
        job: 'Copywriting for JWS Briefing',
        user: 'Andrea Piacquadio',
        deadline: 'December 19, 2019',
        startDay: 8,
        startMonth: "AUG",
        rating: 5.0,
        location: 'Virtual',
        id: "1",
        timestamp: Date.now(),
        bid: false,
        type: 'accepted bid',
        status: 'job accepted',
        image: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/photo-of-woman-in-red-top-and-black-framed-eyeglasses-3762370.jpg',
        jobAmount: 18000
    }
]

export const activeBids = [
    {
        job: 'Digital marketing for eCommerce platform ',
        bidDiretion: 'out',
        bidAmount: 6000,
        bidFrequency: '/hr',
        postedBy: 'Tolani Williams',
        startDay: 22,
        startMonth: "AUG",
        location: 'Remote',
        id: "2343054",
        timestamp: "2019-11-30T19:33:44.124Z",
        image: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/woman-wearing-black-sweatshirt-using-silver-macbook-1181230.jpg',
    },
    {
        job: 'Make up for wedding',
        bidDiretion: 'in',
        numberOfBids: 3,
        bids: [
            {
                id: "1032435",
                userName: "Ronke Alabi",
                title: 'Make-up Artist',
                rating: 4.6,
                bidAmount: 15000,
                bidFrequency: 'flat',
                userImage: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/ronke_alabi.jpg',
            },
            {
                id: "1042435",
                userName: "Yogendra Singh",
                title: 'Make-up Artist',
                rating: 4.9,
                bidAmount: 6500,
                bidFrequency: '/hr',
                userImage: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/Yogendra.jpg',
            },
            {
                id: "3042435",
                userName: "Magda Ehlers",
                title: 'Make-up Artist',
                rating: 4.3,
                bidAmount: 5500,
                bidFrequency: '/hr',
                userImage: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/Magda Ehlers.jpg',
            },
        ],
        startDay: 25,
        startMonth: "AUG",
        location: '3B Aderoju Adewuyi St, Lagos',
        id: "443054",
        timestamp: "2019-11-30T19:33:44.124Z",
        image: '/Users/forzaflora/Documents/nous/sgw_maw/src/dev_assests/img/woman-wearing-black-sweatshirt-using-silver-macbook-1181230.jpg',
    },
]

class Data extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Data</Text>
            </View>
        );
    }
}
export default Data;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});