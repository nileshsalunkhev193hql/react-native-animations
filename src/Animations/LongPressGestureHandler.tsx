import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';
import { AnimatedButton } from './Components/Buttons';

export const LongPressGestureHandler = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, []);

  const longPressGesture = Gesture.LongPress()
    .minDuration(500) // Minimum time required for a long press
    .onStart(() => {
      // Start with a slight increase in scale
      scale.value = 1.5;
    })
    .onEnd(() => {
      // Apply decay animation to reduce scale gradually
      scale.value = withDecay({
        velocity: -2, // Simulate a shrinking effect
        clamp: [1, 1.5], // Ensure scale remains between 1 and 1.5
      });
    });

  return (
    <GestureDetector gesture={longPressGesture}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: 100,
  },
});
