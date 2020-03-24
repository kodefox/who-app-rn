import React, { useState, ReactNode, ComponentProps } from 'react';
import { StyleSheet, View, Image as ImageBase } from 'react-native';

import Carousel from './Carousel';
import Text from './Text';

import ProtectWashHand from '../../assets/protect_wash_hand.png';
import ProtectCough from '../../assets/protect_cough.png';
import ProtectTrashBin from '../../assets/protect_trash_bin.png';
import ProtectNoCrowd from '../../assets/protect_no_crowd.png';
import ProtectMedicalBag from '../../assets/protect_medical_bag.png';

// Right now this component is unused.
function ProtectYourselfCarousel() {
  let [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Carousel currentIndex={currentIndex} onIndexChanged={setCurrentIndex}>
      <Wrapper>
        <Text style={styles.caption} size={24}>
          {t('Wash your hands often with soap and running water frequently')}
        </Text>
        <Image source={ProtectWashHand} />
      </Wrapper>
      <Wrapper>
        <Text style={styles.caption} size={24}>
          {t(
            'When coughing and squeezing cover mouth and nose with flexed elbow or tissue',
          )}
        </Text>
        <Image source={ProtectCough} />
      </Wrapper>
      <Wrapper>
        <Text style={styles.caption} size={24}>
          {t('Throw tissue into closed bin immediately after use')}
        </Text>
        <Image source={ProtectTrashBin} />
      </Wrapper>
      <Wrapper>
        <Text style={styles.caption} size={24}>
          {t('Wash your hands again, frequently')}
        </Text>
        <Image source={ProtectWashHand} />
      </Wrapper>
      <Wrapper>
        <Text style={styles.caption} size={24}>
          {t('Avoid close contact and keep the physical distancing')}
        </Text>
        <Image source={ProtectNoCrowd} />
      </Wrapper>
      <Wrapper>
        <Text style={styles.caption} size={24}>
          {t(
            'Seek medical care early if you have fever, cough and difficulty breathing',
          )}
        </Text>
        <Image source={ProtectMedicalBag} />
      </Wrapper>
    </Carousel>
  );
}

let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
    paddingVertical: 60,
  },
  caption: {
    lineHeight: 28,
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    aspectRatio: 1,
  },
});

let Wrapper = (props: { children: ReactNode }) => (
  <View style={styles.wrapper} {...props} />
);

let Image = (props: ComponentProps<typeof ImageBase>) => (
  <View style={styles.imageContainer}>
    <ImageBase resizeMode="contain" style={styles.image} {...props} />
  </View>
);

export default ProtectYourselfCarousel;
