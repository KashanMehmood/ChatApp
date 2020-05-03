import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoginComponent from '../component/LoginComponent';
import ContactComponent from '../component/ContactComponent';
import MessagesComponent from '../component/MessagesComponent';
import NotificationComponent from '../component/NotificationComponent';

import ChatComponent from '../component/ChatComponent';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class RootStack extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>RootStack Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Tabnavigator = createMaterialBottomTabNavigator({

    Messages: {
        screen: MessagesComponent,
        navigationOptions: {
            tabBarLabel: 'Messages',
            // tabBarLabel: <Text style={{ fontWeight:'bold' }}> Messages </Text>,
            tabBarIcon: ({ tintColor, focused }) => <MaterialIcons name="message" size={focused ? 25 : 20} color={focused ? tintColor : 'gray'} />,
        }
    },

    Contact: {
        screen: ContactComponent,
        navigationOptions: {
            tabBarLabel: 'Contact',
            // tabBarLabel: <Text style={{ fontWeight:'bold' }}> Contact </Text>,
            tabBarIcon: ({ tintColor, focused }) => <MaterialIcons name="contacts" size={focused ? 25 : 20} color={focused ? tintColor : 'gray'} />,
        }
    },

    Notification: {
        screen: NotificationComponent,
        navigationOptions: {
            tabBarLabel: 'Notification',
            // tabBarLabel: <Text style={{ fontWeight:'bold' }}> Notification </Text>,
            tabBarIcon: ({ tintColor, focused }) => <MaterialIcons name="notifications" size={focused ? 25 : 20} color={focused ? tintColor : 'gray'} />,
        }
    },
}, {
    initialRouteName: 'Messages',
    activeColor: 'green',
    inactiveColor: 'gray',
    barStyle: { backgroundColor: 'white' },
    // shifting: true
});


const Stacknavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    
    Home: {
        screen: Tabnavigator,
        navigationOptions: {
            headerShown: false
        }
    },

    ChatScreen: {
        screen: ChatComponent,
        navigationOptions: {
            headerShown: false
        }
    },
});

export default createAppContainer(Stacknavigator);