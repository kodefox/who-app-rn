import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GettingStarted() {
  let { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ padding: 30 }}>
        <Text>{t('The official COVID-19 GUIDE')}</Text>
        <Button title="Main Menu" onPress={() => navigate('Home')} />
      </View>
    </SafeAreaView>
  );
}
