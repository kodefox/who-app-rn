import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper, { SwiperProps } from 'react-native-web-swiper';

export type Props = Omit<SwiperProps, 'from' | 'children'> & {
  currentIndex: number;
  children: ReactNode;
};

export default function Carousel(props: Props) {
  let { currentIndex, children, ...otherProps } = props;

  return (
    <View style={styles.container}>
      <Swiper
        from={currentIndex}
        {...otherProps}
        controlsProps={{
          prevPos: false,
          nextPos: false,
        }}
      >
        {children}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
