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

class NotificationComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {

            data_notification: [
                {
                    id: 'x1fie5vhFr',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'Kashan Mehmood',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: false,
                    created_at: '20 seconds ago',
                },
                {
                    id: 'gjYQQVjxTD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: false,
                    created_at: '34 minutes ago',
                },
                {
                    id: 'gjYQQVjxxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVjcxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVbjxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVljxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVjxiETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVujxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVjxEqTD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVwjxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVsjxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYaQQVjxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
                {
                    id: 'gjYQQVjdxETD',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: require('../images/avatar_default.png'),
                    notificaton: 'comment your avatar.',
                    readed: true,
                    created_at: '1 hour ago',
                },
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableHighlight

                // underlayColor="#e0e0e0"
                style={[
                    styles.itemContainer,
                    {
                        backgroundColor: item.readed ? 'white' : '#e1ffed',
                    }
                ]}

                activeOpacity={0.4}
                // onPress={() => this.props.navigation.navigate('ChatScreen')}

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
                            justifyContent:'center',
                            // alignItems:'center'
                            // backgroundColor: 'lightblue'
                        }}>

                            <View
                                style={{
                                    color: 'black',
                                    flexDirection: 'row',

                                    // flex: 1,

                                    fontWeight: item.readed ? null : 'bold',
                                    // backgroundColor: 'lightblue',
                                }}
                            >

                                <Text
                                    numberOfLines={1}
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        // flex: 1,
                                        // fontWeight: item.readed ? null : 'bold',
                                        // backgroundColor: 'green',
                                    }}
                                >
                                    {item.user_name}

                                </Text>

                                <Text
                                    numberOfLines={1}
                                    style={{
                                        color: 'black',
                                        flex: 1,
                                        marginLeft: 4,
                                        fontWeight: item.readed ? null : 'bold',
                                        // backgroundColor: 'red',
                                    }}
                                >
                                    {item.notificaton}
                                </Text>
                            </View>

                            <Text
                                numberOfLines={1}
                                style={{
                                    color: 'black',
                                    // backgroundColor: 'green',
                                }}
                            >
                                {item.created_at}
                            </Text>
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
                    <View style={styles.notificationContainer}>
                        <Text style={styles.notificationText}>NOTIFICATION</Text>
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

                            <Ionicons name="md-settings" size={25} color='white' />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                <View style={styles.footer}>

                    <FlatList
                        data={this.state.data_notification}
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

        // borderBottomRightRadius:10,
        // borderBottomLeftRadius:45

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

    notificationContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 30,
        height: 75
        
        // alignItems: 'center',
        // backgroundColor: 'green',
    },

    notificationText: {

        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },

    addContainer: {

        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 75,
        width: 50,

        // alignItems: 'center',
        // backgroundColor: 'green',
    },

    itemContainer: {

        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',

        // paddingLeft: 20,
        // backgroundColor: 'lightblue',


    },

    itemMessage: {

        flex: 1,
        flexDirection: 'row',
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

export default NotificationComponent;