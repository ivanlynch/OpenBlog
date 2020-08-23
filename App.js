import Feed from './src/components/Feed.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
//Screens
import Profile from './src/components/Profile.js';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
Icon.loadFont();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({color, size}) => <Icon name={'rss'} size={20} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => <Icon name={'user'} size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
