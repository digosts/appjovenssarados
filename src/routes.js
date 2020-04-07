import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home'
import Frase from './screens/Frase'

import Cifras from './screens/Cifras'
import Cifra from './screens/Cifra'

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      headerMode='none'
    >
      <HomeStack.Screen name="Frases" component={Home} />
      <HomeStack.Screen name="Frase" component={Frase} />
    </HomeStack.Navigator>
  );
}

const CifrasStack = createStackNavigator();

function CifrastackScreen() {
  return (
    <CifrasStack.Navigator
      headerMode='none'
    >
      <CifrasStack.Screen name="Cifras" component={Cifras} />
      <CifrasStack.Screen name="Cifra" component={Cifra} />
    </CifrasStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-chatboxes'
                : 'md-chatboxes';
            } else if (route.name === 'Cifras') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#d90c1e',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Cifras" component={CifrastackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}