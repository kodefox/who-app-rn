import React, {
  useState,
  ComponentType,
  ReactNode,
  ComponentProps,
  useEffect,
} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Image as ImageBase,
} from 'react-native';

import Carousel from './Carousel';
import Text from './Text';
import {
  ScreenType,
  Screen,
  TextImageScreen,
  LoadedFlow,
} from '../content/flow';
import useDynamicFlow from '../helpers/useDynamicFlow';
import getLocalAsset from '../helpers/getLocalAsset';

type Props = {
  flowId: string;
};

function FlowCarousel(props: Props) {
  let { flowId } = props;
  let flow = useDynamicFlow(flowId);
  let [currentIndex, setCurrentIndex] = useState(0);

  if (flow.content == null) {
    return (
      <View style={styles.root}>
        <ActivityIndicator />
      </View>
    );
  }

  let { content } = flow;

  return (
    <Carousel currentIndex={currentIndex} onIndexChanged={setCurrentIndex}>
      {content.screens?.map((s) => {
        let Screen = Screens[s.type];
        if (!Screen) {
          // Specified screen type not found.
          return null;
        }
        return <Screen flow={flow} screen={s} />;
      })}
    </Carousel>
  );
}

type ScreenProp<T extends Screen> = {
  flow: LoadedFlow;
  screen: T;
  children?: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Screens: Record<ScreenType, ComponentType<any> | null> = {
  TextImage: (props: ScreenProp<TextImageScreen>) => {
    let { flow, screen } = props;
    let [imageUri, setImageUri] = useState<string | null>(null);
    let { bottomImageUri } = screen;

    // TODO: Move this logic out
    useEffect(() => {
      if (bottomImageUri) {
        getLocalAsset(flow.imgPrefix, bottomImageUri).then((asset) => {
          setImageUri(asset.uri);
        });
      }
    }, [flow.imgPrefix, bottomImageUri]);

    return (
      <Wrapper>
        {screen.bodyTexts?.map((text) => (
          <BodyText key={text}>
            {/* TODO: Should not use non-literal string with translate function */}
            {t.frag(text, {
              em: (text) => <EmText>{text}</EmText>,
            })}
          </BodyText>
        ))}
        {imageUri && <Image source={{ uri: imageUri }} />}
      </Wrapper>
    );
  },
  HeroImage: null,
};

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
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

let BodyText = (props: ComponentProps<typeof Text>) => (
  <Text style={styles.caption} size={24} {...props} />
);

let EmText = (props: ComponentProps<typeof Text>) => (
  <BodyText weight="bold" {...props} />
);

export default FlowCarousel;
