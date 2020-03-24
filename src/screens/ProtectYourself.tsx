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
  let { navigate, setParams, reset } = useNavigation();
  return (
    <View style={styles.root}>
      <Banner
        onClosePress={() => {
          if (route.params?.fromOnboarding) {
            setHasFinishedOnboarding();
            setParams({
              fromOnboarding: false,
            });
            // Reset the navigation state so new user won't see
            // transition from Home to CheckYourself screen
            // as going back.
            reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
            return;
          }
          navigate('Home');
        }}
        style={styles.banner}
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
  banner: {
    marginHorizontal: 40,
  },
});

export default ProtectYourself;
