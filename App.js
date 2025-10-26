import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Telas
import WelcomeScreen from './src/components/screens/WelcomeScreen';
import BottomTabNavigator from './src/components/navigation/BottomTabNavigation';
import { CartProvider } from './src/components/screens/CartContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          {/* Tela de boas-vindas */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />

          {/* Navegação principal com abas */}
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
