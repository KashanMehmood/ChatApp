import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    FlatList,
    TextInput,
    SafeAreaView, ScrollView
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// for avoid flatlist warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested'])

class MessagesComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {

            searchText: '',
            data_messages: [
                {
                    id: 'rwBa06nqlR',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH Hello',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongtinh_Rc0LjZ54yj',
                    messages: 'Hello',
                    readed: false,
                    item_mute: true,
                    num_messages_readed: 6,
                    created_at: '12:00 PM',
                },
                {
                    id: 'qKwgXmIoN0',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthanh_O7xyqYRvo1',
                    messages: 'What are you doing?',
                    readed: true,
                    item_mute: false,
                    num_messages_readed: 0,
                    created_at: '11:00 AM',
                },
                {
                    id: 'ucPA0NXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: true,
                    item_mute: true,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0dNXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0NXaweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0NXdweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPAw0aNXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0vNXdweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0NXweeB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: true,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0NXnweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: true,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0NkXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    item_mute: true,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0NuXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0tNXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0wNXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: true,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
                {
                    id: 'ucPA0NfXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: require('../images/avatar_default.png'),
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: true,
                    item_mute: false,
                    num_messages_readed: 3,
                    created_at: '1:00 PM',
                },
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableHighlight
                underlayColor="#f9f9f9"
                // underlayColor="#f2f2f2"
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

                <View style={styles.TouchableHighlightContainer}
                >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Image
                            source={item.user_avatar}
                            style={{
                                height: 50, width: 50,
                            }}
                            resizeMode="stretch"
                        />
                    </View>

                    <View style={styles.itemMessage}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            // height:  '10%',
                            // backgroundColor: 'red'
                        }}>

                            <Text
                                numberOfLines={1}
                                style={{
                                    color: 'black',
                                    fontWeight: item.readed ? null : 'bold',
                                    paddingTop: 10,
                                    // backgroundColor: 'green',
                                }}
                            >
                                {item.user_name}
                            </Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: 'black',
                                    paddingBottom: 10,
                                    fontWeight: item.readed ? null : 'bold',

                                    //  paddingVertical: 10,
                                }}
                            >
                                {item.messages}
                            </Text>
                        </View>
                        <View style={{
                            alignItems: 'flex-end',
                            justifyContent: 'center',

                        }}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 12,
                                    fontWeight: item.readed ? null : 'bold',
                                    textAlign: 'right'

                                    // backgroundColor: 'lightseagreen',
                                    // fontStyle: 'italic',
                                }}
                            >
                                {item.created_at}
                            </Text>

                            <View style={{ flexDirection: 'row' }} >

                                {item.readed ? null :
                                    <View>
                                        <Text style={styles.numReaded}>5</Text>
                                    </View>}

                                {item.item_mute ?
                                    <View style={styles.icon}>
                                        <MaterialCommunityIcons style={{ justifyContent: 'center', alignItems: 'center' }} name="volume-variant-off" size={20} color='gray' />
                                    </View>
                                    : null}

                            </View>

                        </View>

                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <ImageBackground
                        style={styles.imageBackground}
                        source={require('../images/header_message.png')}
                        resizeMode="stretch"
                    >
                        <View style={styles.imageBackgroundInnerContainer}>
                            <View style={styles.logo}>
                                <Image
                                    style={styles.logoImage}
                                    source={require('../images/avatar_default.png')}
                                    resizeMode="contain"
                                />
                            </View>

                            <View style={styles.user}>
                                <Text numberOfLines={1} style={styles.username}>Kashan Mehmood</Text>
                                <View style={styles.action}>

                                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                                        <AntDesign name="scan1" color='white' size={20} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                                        <MaterialIcons name="add-to-photos" size={20} color='white' />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                                        <MaterialIcons name="camera-alt" size={20} color='white' />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                                        <Entypo name="log-out" color='white' size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <SafeAreaView style={styles.scrollViewContainer}>
                    <ScrollView style={styles.scrollView}>

                        <View style={styles.selection}>
                            <View style={styles.searchBar}>

                                <View style={{ alignItems: 'flex-start' }}>

                                    <TouchableOpacity style={{
                                        height: 40,
                                        width: 40,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        // backgroundColor:'green',
                                    }}
                                        activeOpacity={0.5}
                                        onPress={
                                            () => {
                                                // console.warn(this.state.searchText);
                                                this.setState({ searchText: '' })
                                            }
                                        }
                                    >
                                        <Ionicons name="ios-search" color='gray' size={25} />
                                    </TouchableOpacity>
                                </View>


                                {/* <View style={{alignItems: 'flex-start'}}>

                                <Ionicons style={{
                                    
                                    height: 40,
                                    width:40,

                                    alignItems:'center',
                                    justifyContent:'center',
                                    
                                    
                                    backgroundColor:'green',
                                }} name="ios-search" color='gray' size={20} />
                                </View> */}
                                <TextInput
                                    style={styles.searchTextInput}
                                    value={this.state.searchText}
                                    onChangeText={
                                        (text) => {
                                            // console.warn(text);
                                            this.setState({ searchText: text })
                                        }
                                    }
                                    placeholder="Search"
                                />

                                <View style={{ alignItems: 'flex-end' }}>

                                    <TouchableOpacity style={{
                                        height: 40,
                                        width: 40,
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                        // borderLeftWidth: 0.4,
                                        // borderLeftColor: '#d3d3d3',

                                        // backgroundColor:'green',
                                    }}
                                        activeOpacity={0.5}
                                        onPress={
                                            () => {
                                                // console.warn(this.state.searchText);
                                                this.setState({ searchText: '' })
                                            }
                                        }
                                    >
                                        <Ionicons name="ios-close" color='gray' size={25} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.footer}>

                            <FlatList
                                style={{ paddingTop:10 }} 
                                data={this.state.data_messages}
                                renderItem={this.renderItem}
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={this.ItemSeparatorComponent}
                            />

                        </View>

                    </ScrollView>
                </SafeAreaView>


                {/* <View style={styles.selection}>
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
                </View> */}

                {/* <View style={styles.footer}>

                    <FlatList
                        data={this.state.data_messages}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                    />

                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    header: {

        height: 120,
        width: '100%',

        // backgroundColor: 'red',
        // backgroundColor: 'lightblue'
    },

    scrollViewContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },

    footer: {

        flex: 1,
        width: '100%',


        borderWidth:1,

        borderColor: '#f2f2f2',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // backgroundColor: 'green'
        // height: '75%',
    },

    imageBackground: {

        width: '100%',
        height: '100%',

        // height: '80%',
        // backgroundColor: 'green'
    },

    imageBackgroundInnerContainer: {

        width: '100%',
        height: '100%',
        flexDirection: 'row',

        // flex: 1,
        // justifyContent:'flex-start',
        // alignItems:'flex-start',
        // height: '70%',
        // marginTop: 10,
        // backgroundColor:'lightblue'
    },

    logo: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,

        // alignItems: 'flex-start',
        // backgroundColor:'green'
    },

    logoImage: {

        height: 80,
        width: 80,
    },

    TouchableHighlightContainer: {

        flex: 1,
        flexDirection: 'row',
        // paddingLeft: 15,
        // borderBottomWidth: 1,
        // borderBottomColor: '#f2f2f2',
        // backgroundColor: 'lightblue',
    },


    user: {

        flex: 2,
        marginTop: 10,
        alignItems: 'center',

        // alignItems: 'center',
        // alignItems: 'flex-start',
        // backgroundColor:'red',
    },

    username: {

        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,

        // backgroundColor:'cadetblue'
    },

    action: {

        flexDirection: 'row',
        marginTop: 5,

        // backgroundColor: 'lightblue',
    },

    iconButton: {

        marginLeft: 10,
        height: 50

        // backgroundColor:'red'
    },

    itemContainer: {

        flexDirection: 'row',
        paddingHorizontal: 20,
        // paddingVertical: 10
        // paddingLeft: 20,

        // backgroundColor: 'lightblue',
    },

    itemMessage: {

        flex: 1,
        flexDirection: 'row',
        // paddingLeft: 15,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',

        // backgroundColor: 'lightblue',
    },

    numReaded: {

        height: 20,
        backgroundColor: '#30ac40',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 3,
        paddingTop: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        paddingHorizontal: 7,

        // paddingBottom: 2,
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingVertical: 5,
        // padding: 5,
        // paddingLeft: 5,
    },

    icon: {

        height: 20,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 3,

        // backgroundColor: 'green',
        // backgroundColor: '#25D366',
    },

    selection: {

        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: '#f2f2f2',
        width: '100%',
        // marginBottom: 10,

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
        // paddingLeft: 15,
        // paddingRight: 20

        // paddingHorizontal: 17
        // backgroundColor:'red',
    },

    searchTextInput: {

        flex: 1,
        alignItems: 'center',
        // paddingLeft: 10,

        // width: '95%',
        // paddingRight: 20,
        // paddingRight:7,
        // backgroundColor:'red'
    },

});

export default MessagesComponent;