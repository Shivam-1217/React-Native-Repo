import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input1 = ({
  width,
  height,
  bg,
  label,
  color,
  top,
  contentType,
  prefix,
  maxLength,
  onChangeText,
  onBlur,
  value,
  cursorColor
  
  

}) => {
  return (
    <View style={{marginTop: top,}}>
      <Text style={[styles.label, {color: color}]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {width: width, height: height, backgroundColor: bg, caretColor:cursorColor}
          
        ]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        keyboardType={contentType}
        maxLength={maxLength}>
        {prefix}
       
      </TextInput>
    </View>
  );
};

export default Input1;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#808e9b',
    borderStyle: 'dashed',
    color: '#010',
    fontSize: height * 0.018,
    fontWeight: '600',
  },
  label: {
    fontSize: height * 0.018,
    paddingBottom: 0,
  },
});
