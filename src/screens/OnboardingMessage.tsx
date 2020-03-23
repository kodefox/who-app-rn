import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Text from '../components/Text';
import theme from '../constants/theme';

import Logo from '../../assets/logo.svg';

const MESSAGE_FEATURES = [
  'Get the latest information',
  'Learn how to protect yourself',
  'Report sickness',
];

export default function OnboardingMessage() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.logoWrapper}>
        <Logo
          style={StyleSheet.flatten(styles.logo)}
          color={theme.colors.primary}
        />
      </View>
      <View>
        {MESSAGE_FEATURES.map((item) => {
          return (
            <View style={styles.messageRow} key={item}>
              <View style={styles.bullet} />
              <Text size={20} weight="500" style={styles.messageText}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    width: '40%',
    aspectRatio: 1,
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 14,
    height: 14,
    backgroundColor: theme.colors.primary,
    marginRight: 8,
  },
  messageText: {
    color: theme.colors.primary,
  },
});
