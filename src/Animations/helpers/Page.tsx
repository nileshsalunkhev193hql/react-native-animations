import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SIZE} from '../../../App';

interface PageTypes {
  title: string;
  index: number;
  translateX: SharedValue<number>;
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Page: React.FC<PageTypes> = ({title, index, translateX}) => {
  
    const rStyleX = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolation.CLAMP,
    );

    const borderRadius = interpolate(
        translateX.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [0, SIZE / 1, 0],
        Extrapolation.CLAMP,
      );

    return {
      transform: [{scale}],
      borderRadius
    };
  }, []);


  const textStyle = useAnimatedStyle(() => {

    const opacity = interpolate(
        translateX.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [-2, 1, -2],
        Extrapolation.CLAMP,
      );

      const translateY = interpolate(
        translateX.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [200, 1, -200],
        Extrapolation.CLAMP,
      );

      return (
        {
            opacity,
            transform: [
                {translateY}
            ]
        }
      )
  }, [])

  return (
    <Animated.View
      key={index}
      style={[
        styles.container,
        {
          backgroundColor: `rgba(0,0,256, 0.${index + 2})`,
        },
      ]}>
      <Animated.View
        style={[
          styles.circleContainer,
          {
            backgroundColor: `rgba(0,0,256, 0.5)`,
          },
          rStyleX
        ]}>
        <Animated.Text style={[styles.text, textStyle]}>{title}</Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
  circleContainer: {
    height: SIZE * 2,
    width: SIZE * 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 100
  },
});
