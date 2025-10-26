import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

// Telas
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CartScreen from './screens/CartScreen';
import ListScreen from './screens/ListScreen';

// Ícones personalizados
const Tab = createBottomTabNavigator();

const screenIcons = {
  'Início': require('../assets/icon-home.png'),
  'Buscar': require('../assets/icon-search.png'),
  'Lista': require('../assets/icon-list.png'),
  'Carrinho': require('../assets/icon-Shopping-bag.png'),
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#666',
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = screenIcons[route.name];
          // Usamos 'color' que é gerenciado pelo Tab Navigator
          return <Image source={iconName} style={[styles.icon, { tintColor: color }]} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />

      <Tab.Screen name="Buscar" component={SearchScreen} />

      <Tab.Screen name="Lista" component={ListScreen} />

      <Tab.Screen name="Carrinho" component={CartScreen} />
    </Tab.Navigator>
  );
};

// Estilos
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: 60,
    paddingVertical: 8,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

export default BottomTabNavigator;
