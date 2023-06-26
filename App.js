import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching data) that takes some time
    const fetchData = async () => {
      try {
        // Perform your asynchronous task here

        // Once the task is completed, hide the splash screen
        const timeout = setTimeout(() => {
          setShowSplash(false);
        }, 1500); // Adjust the timeout duration as needed
    
        return () => clearTimeout(timeout);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
