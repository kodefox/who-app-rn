import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={{ padding: 30 }}>
        <Text style={{ textAlign: 'center' }}>
          {t('Main menu will go here.')}
        </Text>
      </View>
    </SafeAreaView>
  );
}