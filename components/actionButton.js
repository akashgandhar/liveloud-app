import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ActionButtons = ({ onPress }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonPress = (button) => {
    setIsExpanded(false);
    onPress(button);
  };

  return (
    <View style={styles.container}>
      {isExpanded && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleButtonPress('image')}
        >
          <Icon name="image" size={20} color="#2596be" />
        </TouchableOpacity>
      )}
      {isExpanded && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleButtonPress('image')}
        >
          <Icon name="mood" size={20} color="#2596be" />
        </TouchableOpacity>
      )}
      {isExpanded && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleButtonPress('video')}
        >
          <Icon name="movie" size={20} color="#2596be" />
        </TouchableOpacity>
      )}
      {isExpanded && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleButtonPress('text')}
        >
          <Icon name="text-fields" size={20} color="#2596be" />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Icon name={isExpanded ? 'close' : 'add'} size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  mainButton: {
    backgroundColor: '#2596be',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 28,
    elevation: 4,
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#fffff0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    borderColor:'black',
    elevation: 4,

  },
});

export default ActionButtons;
