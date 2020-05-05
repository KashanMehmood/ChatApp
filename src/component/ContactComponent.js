import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    FlatList,
    TextInput
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ContactComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {

            data_contact: [
                {
                    id: 'Rc0LjZ54yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ54ayj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ54syj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ54dyj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LfjZ54yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ5g4yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ5h4yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ5j4yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZk54yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZl54yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ54yzj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ5x4yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZc54yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
                {
                    id: 'Rc0LjZ5v4yj',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: require('../images/avatar_default.png'),
                    user_phonenumber: '+84 93456788'
                },
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableHighlight
                underlayColor="#f9f9f9"
                // underlayColor="#e0e0e0"
                style={styles.itemContainer}
                activeOpacity={0.4}
                onPress={() => this.props.navigation.navigate('ChatScreen')}

            // onPress={() => {
            //     this.props.navigation.navigate('ChatScreen', {
            //         itemId: 86,
            //         otherParam: item.user_name,
            //     });
            // }}
            >

                <View style={styles.TouchableHighlightContainer}>

                    <Image
                        source={item.user_avatar}
                        style={{ height: 50, width: 50 }}
                        resizeMode="stretch"
                    />
                    <View style={styles.itemMessage}>
                        <View style={{
                            flex: 1,
                            // backgroundColor: 'red'
                        }}>

                            <Text
                                numberOfLines={1}
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    // backgroundColor: 'green',
                                }}
                            >
                                {item.user_name}
                            </Text>
                            
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: 'black',
                                }}
                            >
                                {item.user_phonenumber}
                            </Text>
                        </View>
                        
                        <View style={{
                            flex: 0.19,
                            justifyContent: 'center',
                            alignItems: 'center',
                            // backgroundColor: 'red',
                        }}>
                            <TouchableOpacity
                             activeOpacity={0.35}
                            >
                                <MaterialIcons name="call" size={24} color='green' />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient start={{ x: 0, y: 0 }} colors={['#39b54a', '#006837']} style={styles.header}>
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactText}>CONTACT</Text>
                    </View>
                    <View style={styles.addContainer}>

                        <TouchableOpacity>

                            {/* <Text style={{
                            color: 'white',
                            fontSize: 25,
                            fontWeight:'bold',

                            borderWidth:0.7,
                            borderColor:'white',
                            padding:8,
                            paddingTop:4,
                            paddingBottom:4,
                        }}>+</Text> */}

                            <AntDesign name="plus" size={25} color='white' />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                <View style={styles.selection}>
                    <View style={styles.searchBar}>

                        <Ionicons style={{
                            alignItems: 'flex-start'
                            // paddingLeft: 5,
                            // backgroundColor:'green',
                        }} name="ios-search" color='gray' size={20} />

                        <TextInput
                            style={styles.searchTextInput}
                            placeholder="Search"
                        />

                        <TouchableOpacity style={{
                            paddingLeft: 5,
                            alignItems: 'flex-end'
                            // paddingRight: 7,
                            // backgroundColor:'green',
                        }} activeOpacity={0.5}>

                            <Ionicons name="ios-close" color='gray' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>

                    <FlatList
                        data={this.state.data_contact}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: 'white',

        // justifyContent: 'center',
        // alignItems: 'center',
    },

    header: {

        height: 75,
        flexDirection: 'row',

        // backgroundColor: 'lightblue',
        // justifyContent: 'center',
        // alignItems: 'center'
    },

    footer: {

        flex: 1,
        width: '100%',

        // backgroundColor: 'green'
        // height: '75%',
    },

    contactContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 75

        // backgroundColor: 'green',
    },

    contactText: {

        textAlign:'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },

    addContainer: {

        justifyContent: 'center',
        // alignItems: 'center',
        alignItems: 'flex-start',
        height: 75,
        width: 50,
        // backgroundColor: 'green',
    },

    selection: {

        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        width: '100%',

        // flexDirection:'row',
        // backgroundColor:'red'
        // height: 70,
    },

    searchBar: {

        marginTop: 15,
        marginBottom: 15,
        width: '90%',
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 20

        // paddingHorizontal: 17
        // backgroundColor:'green',
    },

    searchTextInput: {

        flex: 1,
        alignItems: 'center',
        paddingLeft: 10,

        // width: '95%',
        // paddingRight: 20,
        // paddingRight:7,
        // backgroundColor:'red'
    },

    itemContainer: {

        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,

        // paddingLeft: 20,
        // backgroundColor: 'lightblue',
    },

    itemMessage: {

        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        marginLeft: 10,

        // paddingLeft: 15,
        // marginRight:10,
        // backgroundColor: 'red',
    },


    TouchableHighlightContainer: {

        flex: 1,
        flexDirection: 'row',

        // paddingLeft: 15,
        // borderBottomWidth: 1,
        // borderBottomColor: '#f2f2f2',
        // backgroundColor: 'lightblue',
    },

});

export default ContactComponent;