import React from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { Page } from '../helpers/Page'
import { SIZE } from '../../../App'

export const ScrollViewInterpolate = () => {

    const words = ["I", "Love", "you", "my", "pooja!"]

    const translateX = useSharedValue(0)

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x
    })
    return (
        <Animated.ScrollView
        horizontal
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{
            flex: 1
        }}
        >
        {
            words.map((x, index) => (
                <Page
                title={x}
                index={index}
                translateX={translateX}
                /> 

            ))
        }

        </Animated.ScrollView>
    )
}