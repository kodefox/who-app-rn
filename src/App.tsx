import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import GettingStartedScreen from './screens/GettingStarted';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
          <Stack.Screen
            name="GettingStarted"
            component={GettingStartedScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
