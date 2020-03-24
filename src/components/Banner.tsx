import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

import BannerLogo from '../../assets/logo_horizontal.svg';
import Close from '../../assets/close.svg';

type Props = {
  onClosePress?: () => void;
  style?: StyleProp<ViewStyle>;
};

function Banner(props: Props) {
  let { onClosePress, style } = props;
  return (
    <View style={[styles.root, style]}>
      <View style={styles.logo}>
        <BannerLogo />
      </View>
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
    height: 60,
    minHeight: 60,
    maxHeight: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  logo: {
    height: 60,
    width: 196,
  },
  closeWrapper: {
    width: 36,
  },
});

export default Banner;
