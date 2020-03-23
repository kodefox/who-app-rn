import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../constants/theme';

import Banner from '../../assets/banner_logo.svg';

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.mainContent}>
        <Banner />
        <TouchableOpacity onPress={() => navigate('CheckHealth')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{t('Check your health')}</Text>
          </View>
        </TouchableOpacity>
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
  button: {
    margin: 30,
    padding: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: { color: 'white' },
});
