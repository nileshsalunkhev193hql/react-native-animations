import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring } from 'react-native-reanimated'
import { SIZE } from '../../App'

export const TapGestureHandler = () => {

    /*
    -Here we have seen Tap gesture. This deals with users tap interaction.
    -We have maxDistance that has pixels value which allows the tap gesture.
    -We have maxDuration and number of taps too.
    */
    const _tap = useSharedValue('blue')
    const scale = useSharedValue(1)

    const animatedStyle = useAnimatedStyle(() => {
        return (
            {
                backgroundColor: _tap.value,
                transform: [
                    {scale: scale.value}
                ]
            }
        )
    }, [])

    const tapGesture = Gesture.Tap()
    .maxDistance(200)
    .maxDuration(1000)
    .numberOfTaps(1)
    .onStart(() => {
        _tap.value = 'yellow' 
        scale.value = withRepeat(withSpring(1.5), 2, true)
    })

    return (
        <GestureDetector gesture={tapGesture}>
            <Animated.View 
            style={[
                {
                    height: SIZE,
                    width: SIZE,
                    borderRadius: SIZE / 2
                },
                animatedStyle
            ]}
            />
        </GestureDetector>
    )
}