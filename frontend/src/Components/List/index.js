import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function List({title, data}) {
    return (
        <View>
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.container}>
                {data.map((itemName, itemValue, key)=> (
                    <View style={styles.itemContainer} key={key}>
                        <Text style={styles.text}>{itemName}</Text>
                        <Text style={styles.text}>{itemValue}</Text>
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
        flex: 1, 
        alignItems: 'center',
        flexDirection: 'column', 
        width: '100%', 
        justifyContent: 'center'
    },
    itemContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row',  
        backgroundColor: '#51B2BC', 
        width: '90%',
        borderRadius: 50, 
        padding: 15, 
        marginBottom: 15
    },
    text: {
        fontSize: 24, 
        color: 'white'
    }
});