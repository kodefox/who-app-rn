import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Text from '../components/Text';
import theme from '../constants/theme';

import Logo from '../../assets/logo.svg';

export default function OnboardingMessage() {
  let { navigate } = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.root}
      onPress={() =>
        navigate('ProtectYourself', {
          fromOnboarding: true,
        })
      }
    >
      <View style={styles.logoWrapper}>
        <Logo
          style={StyleSheet.flatten(styles.logo)}
          color={theme.colors.primary}
        />
      </View>
      <View>
        <MessageRow text={t('Get the latest information')} />
        <MessageRow text={t('Learn how to protect yourself')} />
        <MessageRow text={t('Report sickness')} />
      </View>
    </TouchableOpacity>
  );
}

type MessageRowProps = {
  text: string;
};

function MessageRow({ text }: MessageRowProps) {
  return (
    <View style={styles.messageRow}>
      <View style={styles.bullet} />
      <Text size={20} weight="500" style={styles.messageText}>
        {text}
      </Text>
    </View>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
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
