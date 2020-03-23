import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';

import HomeScreen from './screens/Home';
import GettingStartedScreen from './screens/GettingStarted';
import OnboardingMessageScreen from './screens/OnboardingMessage';
import ProtectYourselfScreen from './screens/ProtectYourself';
import CheckYourHealthScreen from './screens/CheckYourHealth';

import useGettingStarted from './helpers/useGettingStarted';

const Stack = createStackNavigator();

function App() {
  let isReturningUser = useGettingStarted();

  if (isReturningUser == null) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <NavigationContainer>
          {/* When headerMode is set to "none", we need to manually handle the safe area */}
          <Stack.Navigator headerMode="none">
            {!isReturningUser && (
              <>
                <Stack.Screen
                  name="GettingStarted"
                  component={GettingStartedScreen}
                />
                <Stack.Screen
                  name="OnboardingMessage"
                  component={OnboardingMessageScreen}
                />
              </>
            )}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ProtectYourself"
              component={ProtectYourselfScreen}
            />
            <Stack.Screen
              name="CheckHealth"
              component={CheckYourHealthScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
