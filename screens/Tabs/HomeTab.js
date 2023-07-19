import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import TopTabBar from '../../components/topTabBar';
import FloatingButtons from '../../components/topButtons';
import PostCard from '../../components/postCard';
import axios from 'axios';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButtons from '../../components/actionButton';

const HomeTab = () => {
  const [selectedButton, setSelectedButton] = useState('latest');
  const [postList, setPostList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpanded = button => {
    setIsExpanded(false);
    onPress(button);
    console.log(button);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (page = 1) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
      );
      const posts = response.data;
      setPostList(prevPosts => (page === 1 ? posts : [...prevPosts, ...posts]));
      setCurrentPage(page);
      setTotalPages(Math.ceil(response.headers['x-total-count'] / 10));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleButtonPress = button => {
    setSelectedButton(button);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    // setPostList([]);
    try {
      await fetchPosts();
    } catch (error) {
      console.error('Error refreshing posts:', error);
    }
    setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (loadingMore || currentPage >= totalPages) return;
    setIsLoading(true);
    const nextPage = currentPage + 1;
    fetchPosts(nextPage);
    setLoadingMore(false);
  };

  const renderPost = ({item}) => (
    <PostCard
      key={item.id}
      title={item.title}
      username="user_name"
      imageSource={require('../../assets/images.jpeg')}
      caption={item.body}
    />
  );

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={styles.loadingMoreContainer}>
        <ActivityIndicator size="small" color="#888" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TopTabBar />
      <FloatingButtons onPress={handleButtonPress} />
      <View style={styles.content}>
        <FlatList
          style={styles.flatList}
          data={postList}
          keyExtractor={item => item.id}
          renderItem={renderPost}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      </View>
      <ActionButtons/>
      {/* <View style={styles.container}>
       
      </View> */}
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
    justifyContent: 'flex-start',
  },
  flatListContent: {
    paddingBottom: 20, // Adjust the value as needed
  },
  loadingMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 50, // Set the desired height for the container
  },
  loadingMoreText: {
    marginLeft: 10,
    color: '#888',
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#ffffff'
  // },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeTab;
