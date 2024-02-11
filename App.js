import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Task from './Src/Screens/Task';
import Post_1 from './Src/Screens/Post_1';
import Api1 from './Src/Screens/Api1';
import Api2 from './Src/Screens/Api2';
import Post_2 from './Src/Screens/Post_2';

const Stack = createStackNavigator(); 



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Post_2'>
        <Stack.Screen
          name="Task"
          component={Task}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Post_1' component={Post_1} options={{headerShown:false}}/>
        <Stack.Screen name='Api1' component={Api1} options={{headerShown:false}}/>
        <Stack.Screen name='Api2' component={Api2} options={{headerShown:false}}/>
        <Stack.Screen name='Post_2' component={Post_2} options={{headerShown:false}}/>



        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
