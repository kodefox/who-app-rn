import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

import BannerLogo from '../../assets/banner_logo.png';
import Close from '../../assets/close.svg';

type Props = {
  onClosePress?: () => void;
};

function Banner(props: Props) {
  let { onClosePress } = props;
  return (
    <View style={styles.root}>
      <Image resizeMode="contain" source={BannerLogo} style={styles.logo} />
      {onClosePress && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onClosePress}
          style={styles.closeWrapper}
        >
          <Close />
        </TouchableOpacity>
      )}
    </View>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 72,
    maxHeight: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
  },
  logo: {
    // The logo assets have white spaces in them, so we don't add margin left here.
    width: 250,
    height: 60,
  },
  closeWrapper: {
    width: 36,
    marginRight: 12,
  },
});

export default Banner;
