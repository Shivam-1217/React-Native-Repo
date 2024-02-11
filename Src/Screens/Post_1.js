import { StyleSheet, Text, View,TextInput, Dimensions, Button } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
const {height,width}=Dimensions.get('window')

const Post_1 =  () => {
  


const Shivam = async () => {
  try {
    let data = {
      name: "kaushikiandshivam",
      age: 21,
      emailAddress: "kaushikiOjha@1217.com"
    };
    let url = "http://192.168.54.97:3000/users";
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
     let result = await response.json();
     console.log(result)
    
  } catch (error) {
    console.error("Error:", error);
  }
};
 return (
    <View>
      <Text style={styles.txt1}>Now we are going to Open the Secreat of Post API</Text>

      
     <TouchableOpacity style={styles.btn1} onPress={Shivam}>
      <Text style={{color:'white'}}>Click here</Text>
     </TouchableOpacity>
     

    </View>
  )
};


export default Post_1

const styles = StyleSheet.create({
    txt1:{
        color:'green',
        fontWeight:'500',
        fontSize:18,
    },
    txtInput:{
        width:"95%",
        // height:height*0.04,
        borderRadius:10,
        borderWidth:0.5,
        alignSelf:'center',
        marginTop:height*0.02,
        color:'violet',
        fontWeight:'bold',
        
    },
    btn1:{
      width:"95%",
      borderRadius:10,
      marginTop:20,
      backgroundColor:'red',
      height:height*0.055,
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center'
    }
})