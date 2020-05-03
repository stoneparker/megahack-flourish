import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function Header({title}) {
    return (
        <View style={styles.headerContainer}>
            <Image 
              style={styles.headerImg}
              source={require('../../../assets/logotipo.png')}
            />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 15
    },
    headerImg: {
        width: 250
    },
    headerText: {
        paddingBottom: 20, 
        bottom: 50, 
        color: '#4F4F4F', 
        width: 150 
    }
});