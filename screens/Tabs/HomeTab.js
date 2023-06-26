import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopTabBar from '../../components/topTabBar';
import FloatingButtons from '../../components/topButtons';

const HomeTab = () => {
  const [selectedButton, setSelectedButton] = useState('latest');

  const handleButtonPress = button => {
    setSelectedButton(button);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 'latest':
        return <Text style={{color: 'black'}}>Latest Content</Text>;
      case 'popular':
        return <Text style={{color: 'black'}}>Popular Content</Text>;
      case 'hot':
        return <Text style={{color: 'black'}}>Hot Content</Text>;
      case 'trending':
        return <Text style={{color: 'black'}}>Trending Content</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TopTabBar />
      <FloatingButtons onPress={handleButtonPress} />
      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeTab;
