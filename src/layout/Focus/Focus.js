import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { GlobStyles } from '../../styles/GlobStyles';

const Focus2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >What would you like to focus on?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "black"
    }
});

export default Focus2;