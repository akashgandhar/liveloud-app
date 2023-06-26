import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingButtons = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress('latest')} style={styles.button}>
        <Icon name="access-time" size={24} color="#2596be" />
        <Text style={styles.buttonLabel}>Latest</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('latest')} style={styles.button}>
        <Icon name="star" size={24} color="#2596be" />
        <Text style={styles.buttonLabel}>Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('latest')} style={styles.button}>
        <Icon name="whatshot" size={24} color="#2596be" />
        <Text style={styles.buttonLabel}>Hot</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('latest')} style={styles.button}>
        <Icon name="trending-up" size={24} color="#2596be" />
        <Text style={styles.buttonLabel}>Trending</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button: {
    alignItems: 'center',
  },
  buttonLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#000000',
  },
});

export default FloatingButtons;
