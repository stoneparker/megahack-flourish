import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';
import ModalDatePicker from 'react-native-datepicker-modal';
import DatePicker from 'react-native-datepicker';

export default function DateInputModal({ style, ...props })  {
  if(Platform.OS === 'ios') {
    return (
      <ModalDatePicker
      
      style={[styles.container, style]}
      renderDate={({ year, month, day, date }) => {
        if (!date) {
          return <Text style={[styles.text, styles.placeholderText]}></Text>
        }
  
        const dateStr = `${day}-${month}-${year}`
        return <Text style={styles.text}>{dateStr}</Text>
      }}
      {...props}
    />
    )
  }
  else {
    return (
      <DatePicker 
      mode='date'
      display='default'
      format='YYYY-MM-DD'
      showIcon={false}
      customStyles={{
        placeholderText: { color: '#fff' },
        dateInput: { borderWidth: 0 }
      }}
      style={styles.androidDate}
      {...props}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 2,
    height: 45,
    backgroundColor: '#51B2BC',
    borderRadius: 30,
  },
  placeholderText: {
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    width: '100%',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  androidDate: {
    width: '100%',
    height: 45,
    marginBottom: 17,
    backgroundColor: '#51B2BC',
    borderRadius: 30,
    color: '#fff',
  }
})