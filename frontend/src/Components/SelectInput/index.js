import React, {useState} from 'react';
import {Platform, View, Button, Picker, StyleSheet, Text} from 'react-native';

export default function SelectInput({selectedValue, setSelectedValue, data}) {
    
    const [iosPickerCollapsed, setIosPickerCollapsed] = useState("none");

    if(Platform.OS === 'ios'){
        return  (
          <>
            <View style={styles.container}>
              <Button title={selectedValue} color="white" onPress={() => setIosPickerCollapsed('flex')} />
            </View>

            <View style={[{display: iosPickerCollapsed, padding: 10, backgroundColor: '#ccc'}, styles.containerIOS]}>
                  <View>
                    <Button style={styles.buttonIOS} color='black' title="X" onPress={()=>{setIosPickerCollapsed('none')}}/>
                  </View>
                  <View >
                  <Picker 
                    value={selectedValue} 
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    selectedValue={selectedValue}
                    >
                        {data.map((item)=>(
                            <Picker.Item label={item.label} value={item.value} key={item.key} />
                        ))}
                    </Picker>
                  </View>
            </View>
          </>
        )
    }
    else {
        return (
            <View style={styles.container}>
              <Picker 
                value={selectedValue} 
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                    {data.map((item)=>(
                        <Picker.Item label={item.label} value={item.value} key={item.key} />
                    ))}
              </Picker>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#51B2BC',
        height: 50,
        width: '90%',
        borderRadius: 26, 
        marginBottom: 15
    },
    containerIOS: {
        backgroundColor: 'white', 
        width: '100%',
        position: 'absolute', 
        bottom: 0, 
        zIndex: 15
    },
    buttonIOS: {
        fontSize: 20
    }
});