import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import {SIZE} from '../../App';

export const BasicAnimations = () => {

    /*
    This file contains basic hooks fom react native reanimated like used below.
    This is a simple example of how we can use hooks to reduce our lines of code we write.
    withRepeat is used for doing animations in repeat mode.
    withSpring gives small spring kind of appearence to the component.
    
    Note: With this basic setup we can do most of basic animations like fire and forget (keeps going infinitely)
    and also that works once. Scale, rotation, translate on x and y axis and many more like these.  
    */ 


  const progress = useSharedValue(0);

  const scaleValue = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {
          scale: scaleValue.value,
        },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1), 3, true);
    scaleValue.value = withRepeat(withSpring(2), 3, true);
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: 'pink',
          },
          reanimatedStyle,
        ]}
      />
    </View>
  );
};
