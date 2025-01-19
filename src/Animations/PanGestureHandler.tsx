import React from 'react'
import { View } from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { SIZE } from '../../App'

export const PanGestureComponent = () => {

    /*
    Pangesture is basically a type of gesture which deals with continuous tracking of user moment.
    Eg. Dragging of some object like we have done below.
    */

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const startValue = useSharedValue({
        x: 0,
        y: 0
    })

    const translateStyle = useAnimatedStyle(() => {
        return (
            {
                transform: [
                    { translateX: translateX.value },
                    { translateY: translateY.value },
                ]
            }
        )
    }, [])

    const _dragGesture = Gesture.Pan()
    .onStart(() => {
        startValue.value.x = translateX.value
        startValue.value.y = translateY.value
    })
    .onUpdate((event) => {
        translateX.value = event.translationX + startValue.value.x
        translateY.value = event.translationY + startValue.value.y
    })
    .onEnd(() => {
        translateX.value = withSpring(0)
        translateY.value = withSpring(0)
        startValue.value.x = withSpring(0)
        startValue.value.y = withSpring(0)
    })

    return (
        <View
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}
        >
            <View style={{ 
                height: SIZE * 3.5, 
                width: SIZE * 3.5,
                borderRadius: SIZE * 3.5 / 2,
                justifyContent:'center',
                alignItems:'center',
                borderWidth: 5,
                borderColor: 'pink'

             }} >
            <GestureDetector gesture={_dragGesture}>
            <Animated.View 
            style={[
                {
                    height: SIZE,
                    width: SIZE,
                    backgroundColor: 'rgba(0,0,256,0.9)',
                    borderRadius: SIZE / 2
                },
                translateStyle
            ]}
            />
            </GestureDetector>
            </View>
        </View>
    )
}