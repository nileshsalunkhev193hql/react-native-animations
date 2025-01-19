import React from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export const AnimatedButton = () => {
    return (
        <RectButton onPress={() => { 
            console.log('Clicked')
         }}>
            <View>
                <Text>Click</Text>
            </View>
        </RectButton>
    )
}