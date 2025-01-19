import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SIZE } from '../../App';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export const PinchGestureHandler = () => {

    /*
    Here we have added rotation gesture and Pich gesture.
    -The rotation gesture deals with the users movement with regards to rotation of the object. The onUpdate method has event which gives us 
    rotate property.
    - The pinch gesture deals with basically users movement with regards to zoom in / zoom out of the object. The onUpdate method has event
    which gives us scale property.

    */
    const rotateValue = useSharedValue(0);
    const zoomValue = useSharedValue(3); // Initial scale should be 1

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: `${rotateValue.value}rad` }, // Rotation is in radians
                { scale: zoomValue.value }, // Scale must be 1 or higher to be visible
            ],
        };
    }, []);

    // Rotation gesture
    const rotateHandler = Gesture.Rotation()
        .onUpdate((event) => {
            rotateValue.value = event.rotation; // Update rotation in radians
        })
        .onEnd(() => {
            rotateValue.value = withSpring(0); // Reset rotation on end
        });

    // Pinch (Zoom) gesture
    const pinchHandler = Gesture.Pinch()
        .onUpdate((event) => {
            zoomValue.value = event.scale; // Update scale during pinch
        })
        .onEnd(() => {
            zoomValue.value = withSpring(2); // Reset scale on end
        });

    // Combine gestures
    const combinedGesture = Gesture.Simultaneous(pinchHandler, rotateHandler);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <GestureDetector gesture={combinedGesture}>
                <Animated.Image
                    source={require('../assets/doggo.jpg')}
                    style={[
                        {
                            height: SIZE,
                            width: SIZE,
                        },
                        animatedStyle,
                    ]}
                />
            </GestureDetector>
        </View>
    );
};
