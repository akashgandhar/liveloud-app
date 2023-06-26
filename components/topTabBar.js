import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default TopTabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Icon name="person" size={24} color="#000000" style={styles.profileAvatar} />
      </View>
      <Text style={styles.appName}>LIVELOUD</Text>
      <View style={styles.profileContainer} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    elevation: 4,
    height: 56,
    paddingHorizontal: 16,
  },
  profileContainer: {
    width: 24,
  },
  profileAvatar: {
    fontSize: 24,
    color: '#000000',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});


