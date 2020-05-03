import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class LoginComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <ImageBackground
                        style={styles.imageBackground}
                        source={require('../images/header.png')}
                        resizeMode="stretch"
                    >
                        <Image
                            style={styles.logo}
                            source={require('../images/avatar_default.png')}
                            resizeMode="contain"
                        />
                    </ImageBackground>

                </View>
                <View style={styles.footer}>

                    <View style={{ ...styles.InputContainer, marginTop: 20 }}>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                        />
                    </View>

                    <View style={styles.InputContainer}>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.InputContainer}>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.submitButton}
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <LinearGradient start={{ x: 0, y: 0 }} colors={['#39b54a', '#006837']} style={styles.linearGradient}>
                                <Text style={styles.loginText} >LOGIN</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    
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
        // backgroundColor: 'red'
    },

    header: {

        width: '100%',
        height: '55%',
        backgroundColor: 'white',
        // backgroundColor: 'red',
    },

    imageBackground: {

        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: 50,
        flex: 1,
        width: '100%',
        height: '100%',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },

    logo: {

        width: '60%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        //   backgroundColor: 'green',
        // justifyContent: 'center',
        // alignItems: 'flex-start',
        // align-items: flex-start;
    },

    footer: {

        width: '100%',
        height: '45%',
        flexDirection: 'column',
        backgroundColor: 'white',
        // backgroundColor: 'green',
        // alignItems: 'center',
        // justifyContent: 'center',
        // justifyContent: 'space-around',
    },

    InputContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        // backgroundColor: 'lightblue',
    },

    textInput: {

        backgroundColor: '#f2f2f2',
        width: '65%',
        borderRadius: 50,
        paddingLeft: 25,
        paddingRight: 25,
        // height: 50,
        //  backgroundColor: 'red',
    },

    submitButton: {

        width: '65%',
        // backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignContent:'center',
    },

    linearGradient: {

        borderRadius: 50,
    },

    loginText: {

        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 12
        // backgroundColor: 'green',
        // borderRadius: 50,
        // width: '65%',
        // height: 47,
    }
});

export default LoginComponent;