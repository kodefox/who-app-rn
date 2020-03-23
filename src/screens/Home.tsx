import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Banner from '../components/Banner';
import Button from '../components/Button';

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <ScrollView style={styles.root}>
      <Banner />
      <View style={styles.wrapper}>
        <Button
          onPress={() => navigate('ProtectYourself')}
          containerStyle={styles.button}
        >
          Protect Yourself
        </Button>
        <Button
          onPress={() => navigate('CheckHealth')}
          containerStyle={styles.button}
        >
          Check Your Health
        </Button>
        <Button outlined onPress={() => {}} containerStyle={styles.button}>
          Share the App
        </Button>
        <Button outlined onPress={() => {}} containerStyle={styles.button}>
          Send Feedback
        </Button>
        <Button outlined onPress={() => {}} containerStyle={styles.button}>
          About the App
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    marginTop: 20,
    paddingHorizontal: 40,
  },
  button: {
    marginVertical: 15,
    paddingVertical: 20,
  },
});
