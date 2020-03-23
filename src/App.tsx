import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import GettingStartedScreen from './screens/GettingStarted';
import CheckYourHealthScreen from './screens/CheckYourHealth';

import useGettingStarted from './helpers/useGettingStarted';

const Stack = createStackNavigator();

function App() {
  let isReturningUser = useGettingStarted();

  if (isReturningUser == null) {
    // TODO: Should display splash screen
    return <ActivityIndicator />;
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
          {!isReturningUser && (
            <Stack.Screen
              name="GettingStarted"
              component={GettingStartedScreen}
              options={{
                headerShown: false,
              }}
            />
          )}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="CheckHealth"
            component={CheckYourHealthScreen}
            options={{ title: t('Check Your Health') }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
