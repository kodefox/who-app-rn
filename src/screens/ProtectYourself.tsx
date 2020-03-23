import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Banner from '../components/Banner';
import ProtectYourselfCarousel from '../components/ProtectYourselfCarousel';

function ProtectYourself() {
  let { navigate } = useNavigation();
  return (
    <View style={styles.root}>
      <Banner onClosePress={() => navigate('Home')} />
      <ProtectYourselfCarousel />
    </View>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ProtectYourself;
