import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../constants/theme';
import Logo from '../../assets/logo.svg';
import Button from '../components/Button';

export default function GettingStarted() {
  let { navigate } = useNavigation();
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.logoWrapper}>
          <Logo
            style={StyleSheet.flatten(styles.logo)}
            color={theme.colors.primary}
          />
        </View>
        <Text style={styles.paragraph}>{t('The official COVID-19 GUIDE')}</Text>
        <Text style={styles.paragraph}>
          {t(
            'Learn how to protect yourself and your community. Find medical resources to help.',
          )}
        </Text>
        <Button onPress={() => navigate('OnboardingMessage')}>
          {t('Check Your Health')}
        </Button>
      </View>
    </ScrollView>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'space-between',
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
});
