import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Api2 = () => {
  const[data,setData]=useState('')
    
    const getApi= async()=>{
      try{
        const url="http://192.168.215.78:3000/users";
        let reponse=await fetch(url)
        let json=await reponse.json()
        let result=await json
        setData(result)
        console.warn(result)
        
      }
      catch(error){
        console.error("here is some erro",error)

      }

       
       
    }
    useEffect(()=>{
        getApi()
    },[])
  return (
    <View>
       
      <Text style={{color:'red'}}>Api2</Text>
      {
        data.length? 
        data.map((kuchv)=> <View>
          <Text style={{color:'black'}}>{kuchv.name}</Text>
          <Text style={{color:'black'}}>{kuchv.age}</Text>

          
        </View>)
        

        :null
      }
     
    </View>
  )
}

export default Api2

const styles = StyleSheet.create({})