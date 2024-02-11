import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import Input1 from '../Components/Input1';
import Button1 from '../Components/Button1';
import {RadioButton} from 'react-native-paper';
import Datepicker from '../Components/Datepicker';
import { launchCamera,launchImageLibrary } from 'react-native-image-picker';
import {Formik} from 'formik';
import * as yup from 'yup';

const {height, width} = Dimensions.get('window');

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[\S]*$/, 'Spaces not allowed')
    .matches(/^[a-zA-Z]+$/, 'Name must contain only alphabets')
    .min(3, 'Name should have at least 3 characters'),

  gender: yup.string().required('Gender is required'),

  dateOfBirth: yup.string().required('Date of Birth is required'),

  timeOfBirth: yup.string(),

  placeOfBirth: yup
    .string()
    .required('Place of Birth is required')
    .matches(/^[\S]*$/, 'Spaces not allowed')
    .matches(/^[a-zA-Z]+$/, 'City must contain only alphabets')
    .min(3, 'Place of Birth should have at least 3 characters'),

  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  alternativePhone: yup
    .string()
    .required('Alternative Phone No. is required')
    .matches(/^[0-9]+$/, 'Enter a valid phone number')
    .min(10, 'Must be 10 digits')
});



const Task = () => {
  const [checked, setChecked] = useState('first');
  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto,setGalleryPhoto]=useState();

  let options = {
    saveToPhotos : true,
    mediaType : 'photo',
  };

  const openCamera = async() =>{
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    if(granted === PermissionsAndroid.RESULTS.GRANTED){
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri)
    }
  }
  

  return (
    <View style={{flex: 1}}>
      <Header
        background={'#182C61'}
        title={'My Profile'}
        color={'#fff'}
        paddingTop={'2%'}
      />
      <View style={styles.background1}>
        <TouchableOpacity onPress={openCamera}>
          {
            cameraPhoto == null ? 
             <Image
            source={require('../Images/grandson.png')}
            resizeMode="contain"
            style={styles.grandsonImg}
          /> :
          <Image
          source={{uri: cameraPhoto}}
          resizeMode="contain"
          style={styles.grandsonImg}
        />
          }
         
        </TouchableOpacity>
        <Text style={styles.number}>+91-6388158576</Text>
        <ScrollView>

        <Formik   initialValues={{
    name: '',
    gender: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    email: '',
    alternativePhone: '',
  }}
  validationSchema={validationSchema}
  onSubmit={(values) => {
    
    console.log(values); 
    

  }}
>
{({
    handleChange,
    handleSubmit,
    setFieldTouched,
    values,
    touched,
    errors
  }) => (
        <View style={styles.background2}>
          <Input1
            label={'Name*'}
            width={width * 0.9}
            color={'#485460'}
            top={height * 0.03}
            height={height * 0.044}
            onChangeText={handleChange('name')}
        onBlur={() => setFieldTouched('name')}
        value={values.name}
        cusorColor={'black'}
          />
          
           {errors.name && <Text style={[styles.errors,{marginRight:width*0.64}]}>{errors.name}</Text>}
           
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: height * 0.01,
            }}>
            <Text
              style={{
                color: '#485460',
                fontSize: height * 0.018,
                marginRight: width * 0.2,
                marginLeft: -width * 0.12,
              }}>
              Gender
            </Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={{color: '#010', marginRight: width * 0.1}}>Male</Text>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={{color: '#010'}}>Female</Text>
          </View>

          <Datepicker
            label={'Date of Birth*'}
            width={width * 0.9}
            color={'#485460'}
            top={height * 0.02}
            height={height * 0.044}
          />

          <Datepicker
            label={'Time of Birth'}
            width={width * 0.9}
            color={'#485460'}
            top={height * 0.02}
            height={height * 0.044}
            mode={'time'}
          />

          <Input1
            label={'Place of Birth'}
            width={width * 0.9}
            color={'#485460'}
            top={height * 0.03}
            height={height * 0.044}
            onChangeText={handleChange('placeOfBirth')}
            onBlur={() => setFieldTouched('placeOfBirth')}
            value={values.placeOfBirth}
          />
           {errors.placeOfBirth && <Text style={styles.errors}>{errors.placeOfBirth}</Text>}

          <Input1
            label={'Email'}
            width={width * 0.9}
            color={'#485460'}
            top={height * 0.03}
            height={height * 0.044}
            contentType={'email-address'}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            value={values.email}
          />
           {errors.email && <Text style={[styles.errors,{marginRight:width*0.64}]}>{errors.email}</Text>}

          <Input1
            label={'Alternative Phone No.'}
            width={width * 0.9}
            color={'#485460'}
            top={height * 0.03}
            height={height * 0.044}
            contentType={'phone-pad'}
            prefix={'+91'}
            maxLength={10}
            
          />
           

          <Button1
            top={height * 0.05}
            bgColor={'#ff3f34'}
            height={height * 0.05}
            width={width * 0.85}
            title={'Update Profile'}
            radius={10}
            color={'#fff'}
            onPress={handleSubmit}
            // marginBottom={'40%'}
            bottom={'4%'}
 
            
          />
        </View>
        )}
        </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  background1: {
    width: width,
    alignItems: 'center',
    backgroundColor: '#182C61',
  },
  grandsonImg: {
    height: height * 0.12,
    width: height * 0.12,
    marginTop: 10,
    borderRadius: 50
  },
  number: {
    color: '#fff',
    marginTop: 16,
    fontSize: height * 0.02,
    fontWeight: '800',
    bottom:height*0.01
  },
  background2: {
    height: height,
    width: width,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: height * 0.02,
    alignItems: 'center',
  },
  errors:{
    color:'red',
    marginRight:width*0.54,
    marginTop:height*0.01
    
  }
});
