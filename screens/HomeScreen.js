import React from 'react';
import {SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './Tabs/HomeTab';
import styles from '../styles/styles';
import SearchTab from './Tabs/SearchTab';
import CommunityTab from './Tabs/CommunityTab';
import NotificationTab from './Tabs/NotificationTab';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
          name="Home"
          component={HomeTab}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
            headerShown: false,
          }}
          name="Search"
          component={SearchTab}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="people" color={color} size={size} />
            ),
            headerShown: false,
          }}
          name="Community"
          component={CommunityTab}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="notifications" color={color} size={size} />
            ),
            headerShown: false,
          }}
          name="Notification"
          component={NotificationTab}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
