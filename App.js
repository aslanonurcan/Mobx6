import React from 'react'
import HomeScreen from './src/Home'
import OptionScreen from './src/Option'
import{createStackNavigator} from '@react-navigation/stack'
import{NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Option" component={OptionScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}
