import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ChatComponent extends Component {
    render() {
        // const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>ChatComponent</Text>

                {/* <Text>
                    otherParam:{' '}
                    {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
                </Text> */}
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
});

export default ChatComponent;