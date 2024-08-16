import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Home
import Home from './src/screens/Home';


// Viaturas
import Viaturas from './src/screens/Viaturas';
import CadastroViaturas from './src/screens/Viaturas/CadastroViaturas';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>


        {/* Tela Home */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        {/* Tela Viaturas */}
        <Stack.Screen
          name="Viaturas"
          component={Viaturas}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CadastroViaturas"
          component={CadastroViaturas}
          options={{
            headerShown: false,
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
