import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../../containers/screens/Map';
import CountryScreen from '../../containers/screens/Country';
import MainStack from './MainStack';
import color from '../constant/color';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// export default function App() {
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBarOptions={{
          style:{
            backgroundColor: color.oren,
            // activeBackgroundColor: color.blackLight,
          },
          activeTintColor: color.teal,
        }}
      >
        <Tab.Screen 
          name="Main" 
          component={MainStack} 
          options={{
            tabBarIcon:(props) => <Icon name="md-apps" size={30} color={props.color} />
          }}
          />
        <Tab.Screen 
          name="Map" 
          component={MapScreen} 
          options={{
            tabBarIcon:(props)=> <Icon name="md-map" size={30} color={props.color} />
          }}
          />
        <Tab.Screen 
          name="Country" 
          component={CountryScreen} 
          options={{
            tabBarIcon:(props) => <Icon name="md-globe" size={30} color={props.color} />
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation