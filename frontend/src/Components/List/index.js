import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function List({title, data, onEdit}) {
    return (
        <View style={{width: '90%'}}>
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.container}>
            {data.map((item)=> (
                <TouchableOpacity onPress={()=> onEdit(item.key)} style={styles.itemContainer} key={item.key}>
                    <Text style={styles.text}>{item.itemName}</Text>
                    <Text style={styles.text}>{item.itemValue}</Text>
                </TouchableOpacity>
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
        alignItems: 'stretch',
        width: '100%'
    },
    itemContainer: {
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        backgroundColor: '#51B2BC',
        padding: 10, 
        borderRadius: 26, 
        marginBottom: 15
    },
    text: {
        fontSize: 24, 
        color: 'white'
    }
});