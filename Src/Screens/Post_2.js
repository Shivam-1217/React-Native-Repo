import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const Post_2 = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const saveData = async() => {
    console.warn(text);
    console.warn(email);
 console.warn(age);
 const url="http://192.168.54.97:3000/users";
 let response=await fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({text,email,age})
 });
 let result=await response.json();
if (result){
    console.warn('data recived')
}

 
 
  }

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={styles.txtInput}
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.txtInput}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.txtInput}
        value={age}
        onChangeText={age => setAge(age)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignItems: 'center',
          width: '50%',
          alignSelf: 'center',
          marginTop: 40,
          height: '5%',
          borderRadius: 20,
        }}
        onPress={saveData}>
        <Text>Press here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post_2;

const styles = StyleSheet.create({
  txtInput: {
    width: '50%',
    borderRadius: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 40,
  },
});
