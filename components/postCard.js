import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PostCard = ({title, username, imageSource, caption}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.caption}>{caption}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="favorite-border" size={16} color="#333333" />
          <Text style={styles.buttonText}>1000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="thumb-down" size={16} color="#333333" />
          <Text style={styles.buttonText}>1000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="comment" size={16} color="#333333" />
          <Text style={styles.buttonText}>1000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="volume-up" size={16} color="#333333" />
          <Text style={styles.buttonText}>1000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="share" size={16} color="#333333" />
          <Text style={styles.buttonText}>1000</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    margin: 16,
    padding: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profilePicture: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  caption: {
    fontSize: 14,
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  buttonText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#333333',
  },
});

export default PostCard;
