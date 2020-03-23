import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Banner from '../components/Banner';
import Button from '../components/Button';

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <Banner />
      <View style={styles.mainContent}>
        <Button onPress={() => navigate('ProtectYourself')}>
          {t('Protect Yourself')}
        </Button>
        <Button onPress={() => navigate('CheckHealth')}>
          {t('Check Your Health')}
        </Button>
      </View>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  mainContent: { padding: 30 },
});
