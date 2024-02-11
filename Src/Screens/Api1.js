import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Api1 = () => {
  const [data,setData]=useState('undifined')
    const update= async()=>{
    const url="https://jsonplaceholder.typicode.com/posts/1"
    try{
        let response=await fetch(url);
        let json=await response.json();
        let result=await json
        setData(result)
    }
    catch(error){
        console.warn('error is here')
    }
}
useEffect(()=>{
update()
},[])
  return (
    <View>
      {
        data ?<View style={{marginTop:10,paddingTop:10}}>
<Text style={{color:'red'}}>{data.title}</Text>
<Text style={{color:'red'}}>{data.id}</Text>
<Text style={{color:'red'}}>{data.body}</Text>


        </View>:null
      }
      
    </View>
  )
}

export default Api1

const styles = StyleSheet.create({})