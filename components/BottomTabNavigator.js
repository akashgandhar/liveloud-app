import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeTab from '../screens/Tabs/HomeTab';
import SearchTab from '../screens/Tabs/SearchTab';
import CommunityTab from '../screens/Tabs/CommunityTab';
import NotificationTab from '../screens/Tabs/NotificationTab';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),headerShown:false
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
