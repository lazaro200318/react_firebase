import React from 'react';
import Animated from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import logginScreen from './screens/logginScreen';
import HomeScreen from './screens/HomeScreen';
import sitiosScreen from './screens/sitiosScreen';
import cuestionarioScreen from './screens/CuestionarioScreen';
import RestaurantScreen from './screens/RestaurantScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen name="Loggin" component={logginScreen} />

        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="sitios" component={sitiosScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="cuestionario" component={cuestionarioScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

