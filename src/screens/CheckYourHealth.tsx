import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';

import Carousel from '../components/Carousel';
import Text from '../components/Text';
import theme from '../constants/theme';

import Banner from '../../assets/banner_logo.svg';
import Fever from '../../assets/symptoms_fever.svg';
import Cough from '../../assets/symptoms_cough.svg';
import Breath from '../../assets/symptoms_breath.svg';
import Warning from '../../assets/warning.svg';

export default function CheckYourHealth() {
  const [carouselIndex, setIndex] = useState(0);
  return (
    <View style={styles.root}>
      <Banner />
      <View style={styles.headerText}>
        <Text style={styles.centerText}>
          {t.frag('Symptoms may appear <b>2-14 days after exposure</b>', {
            b: (content) => <Text weight="bold">{content}</Text>,
          })}
        </Text>
      </View>
      <Carousel
        currentIndex={carouselIndex}
        onIndexChanged={setIndex}
        slideWrapperStyle={styles.container}
      >
        <SymptomOne />
        <SymptomTwo />
        <SymptomThree />
        <SymptomFour />
      </Carousel>
    </View>
  );
}

CheckYourHealth.navigationOptions = {
  title: 'Check Your Health',
};

function SymptomOne() {
  return <Fever style={StyleSheet.flatten(styles.svg)} />;
}

function SymptomTwo() {
  return <Cough style={StyleSheet.flatten(styles.svg)} />;
}

function SymptomThree() {
  return <Breath style={StyleSheet.flatten(styles.svg)} />;
}

function SymptomFour() {
  return (
    <>
      <View style={styles.warningContainer}>
        <View style={styles.cardHeader}>
          <View style={styles.warningSvgWrapper}>
            <Warning style={StyleSheet.flatten(styles.svg)} />
          </View>
          <View style={styles.container}>
            <Text weight="bold" style={styles.centerText}>
              {t('Emergency Warning Signs')}
            </Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text>{t('- Difficulty breathing')}</Text>
          <Text>{t('- Chest pain or pressure')}</Text>
          <Text>{t('- Confusion or unresponsive')}</Text>
        </View>
      </View>
      <View style={styles.contactContainer}>
        <Text weight="bold" style={styles.centerText}>
          {t('Contact Your Doctor')}
        </Text>
        <View style={styles.description}>
          <Text>
            {t(
              'If you think you may have been exposed to COVID-19, contact your healthcare provider.',
            )}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
    padding: 30,
  },
  container: { flex: 1 },
  headerText: { paddingVertical: 24 },
  centerText: { textAlign: 'center' },
  svg: { alignSelf: 'center' },
  warningSvgWrapper: { paddingRight: 12 },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  description: { paddingTop: 12 },
  warningContainer: {
    backgroundColor: theme.colors.primaryCardBackground,
    padding: 24,
    marginBottom: 24,
  },
  contactContainer: {
    backgroundColor: theme.colors.secondaryCardBackground,
    padding: 24,
  },
});
