import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import BottomTabNavigator from '../components/BottomTabNavigator';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default HomeScreen;
