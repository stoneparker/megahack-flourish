import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LabelAdd() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Adicionar</Text>
          <Text style={styles.textAdd}>+</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        width: '80%', 
        marginBottom: 25
    },
    text: {
        fontSize: 24, 
        color: '#F8D332',
    },
    textAdd: {
        fontSize: 36, 
        color: '#F8D332',
    }
})