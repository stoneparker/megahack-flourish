import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function List({title, data}) {
    return (
        <View style={{width: '90%'}}>
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.container}>
            {data.map((item)=> (
                <View style={styles.itemContainer} key={item.key}>
                    <Text style={styles.text}>{item.itemName}</Text>
                    <Text style={styles.text}>{item.itemValue}</Text>
                </View>
            ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 17, 
        marginBottom: 15, 
        width: '90%'
    },
    container: {
        alignItems: 'center'
    },
    itemContainer: {
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        backgroundColor: '#51B2BC',
        width: '100%',
        padding: 10, 
        borderRadius: 26, 
        marginBottom: 15
    },
    text: {
        fontSize: 24, 
        color: 'white'
    }
});