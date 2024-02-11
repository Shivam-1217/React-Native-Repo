import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = ({title, background, color, paddingTop, marginLeft}) => {
  return (
    <View style={{backgroundColor: background, flexDirection: 'row', paddingTop: paddingTop,alignItems:'center'}}>
      <StatusBar backgroundColor={background} animated={true} barStyle='light-content' />
        <TouchableOpacity style={{marginLeft: marginLeft}}>
            <Image source={require('../Images/BackIcon.png')} resizeMode='contain' style={[styles.arrow,{tintColor: color}]}/>
        </TouchableOpacity>
        <Text style={{color: color, fontSize: height*0.018, fontWeight: '600'}}>{title}</Text>
    </View>
  )
}

export default Header

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    arrow:{
        height: height*0.015,
        width: width*0.15,
    }
})