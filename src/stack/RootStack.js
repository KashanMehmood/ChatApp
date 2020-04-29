import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoginComponent from '../component/LoginComponent';
// import ContactComponent from '../component/ContactComponent';
// import MessagesComponent from '../component/MessagesComponent';
// import NotificationComponent from '../component/NotificationComponent';

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

// const Tabnavigator = createMaterialBottomTabNavigator({

//     Messages: { 
//         screen: MessagesComponent, 
//         navigationOptions: {
//             tabBarLabel: 'Messages'        
//         }
//     },

//     Contact: { 
//         screen: ContactComponent, 
//         navigationOptions: {
//             tabBarLabel: 'Contact'        
//         }
//     },

//     Notification: { 
//         screen: NotificationComponent, 
//         navigationOptions: {
//             tabBarLabel: 'Notification'        
//         }
//     },
// });


// const AppNavigator = createStackNavigator({
//     Home: { 
//         screen: LoginComponent,
//         navigationOptions:{
//             headerShown:false
//         }
//     },
//   });

// export default createAppContainer(AppNavigator); 

const Stacknavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: LoginComponent,
        navigationOptions: {
            headerShown: false
        }
    },
});

export default createAppContainer(Stacknavigator);


// export default RootStack;