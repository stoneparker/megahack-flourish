import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({text, onPress, background= '#79C255'}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, {backgroundColor: background,}]}>
            <View style={styles.btnContainer}>
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 30,
        width: '90%',
        height: 45,
        marginBottom: 15,
        marginTop: 32,
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    btnText: {
        textAlign: "center", 
        color: "white", 
        fontSize: 20,
    }
})