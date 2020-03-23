import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';

import Banner from '../components/Banner';
import ProtectYourselfCarousel from '../components/ProtectYourselfCarousel';
import { setHasFinishedOnboarding } from '../helpers/useGettingStarted';
import { RootStackParamList } from '../App';

type Props = { route: RouteProp<RootStackParamList, 'ProtectYourself'> };

function ProtectYourself(props: Props) {
  let { route } = props;
  let { navigate, setParams } = useNavigation();
  return (
    <View style={styles.root}>
      <Banner
        onClosePress={async () => {
          if (route.params?.fromOnboarding) {
            await setHasFinishedOnboarding();
            setParams({
              fromOnboarding: false,
            });
          }
          navigate('Home');
        }}
      />
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
