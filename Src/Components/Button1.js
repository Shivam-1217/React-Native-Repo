import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button1 = ({top, radius, bgColor, height, width, color, title, onPress,bottom}) => {
  return (
    <TouchableOpacity style={[styles.btn,{backgroundColor: bgColor, marginTop: top, borderRadius: radius, height: height, width: width,bottom:bottom}]} onPress={onPress}>
      <Text style={[styles.btnTxt,{color: color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button1

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    btn:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt:{
        fontSize: height*0.02,
        fontWeight: '600'
    }
})
