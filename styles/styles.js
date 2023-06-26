import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row', // row
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    tabContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000', // Example background color for the tab content
        paddingHorizontal: 16, // Example horizontal padding for the tab content
      },
  });

  export default styles;