import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

class MessagesComponent extends Component {
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

                <View style={styles.footer}>

                    <Text>Footer </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {

        height: 120,
        width: '100%',

        // backgroundColor: 'red',
        // backgroundColor: 'lightblue'
    },

    footer: {

        flex: 1,
        width: '100%',

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
        height:50
        
        // backgroundColor:'red'
    }


});

export default MessagesComponent;