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
import Logo from '../../assets/logo.svg';

export default function GettingStarted() {
  let { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.mainContent}>
        <View style={styles.logoWrapper}>
          <Logo style={styles.logo} color={theme.colors.primary} />
        </View>
        <Text style={styles.paragraph}>{t('The official COVID-19 GUIDE')}</Text>
        <Text style={styles.paragraph}>
          {t(
            'Learn how to protect yourself and your community. Find medical resources to help.',
          )}
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{t('Main Menu')}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  mainContent: {
    padding: 30,
    alignItems: 'center',
  },
  logoWrapper: {
    width: '60%',
    aspectRatio: 1,
    marginBottom: 40,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  paragraph: {
    marginVertical: 15,
    fontSize: 17,
    textAlign: 'center',
  },
  button: {
    margin: 30,
    padding: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
