import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Banner from '../components/Banner';
import Button from '../components/Button';

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.contentContainer}
    >
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
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingHorizontal: 40,
  },
  wrapper: {
    marginTop: 20,
  },
  button: {
    marginVertical: 15,
    paddingVertical: 20,
  },
});
