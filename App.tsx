/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'
import React from 'react';
import {
  View,
} from 'react-native';
import { BasicAnimations } from './src/Animations/BasicAnimation';
import { PanGestureComponent } from './src/Animations/PanGestureHandler';
import { PinchGestureHandler } from './src/Animations/PinchGestureHandler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TapGestureHandler } from './src/Animations/TapGestureHandler';

export const SIZE = 100

function App(): React.JSX.Element {


    return (
    <GestureHandlerRootView
    style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    }}
    >
      {/* <BasicAnimations /> */}
      {/* <PanGestureComponent /> */}
      {/* <PinchGestureHandler /> */}
      <TapGestureHandler />
    </GestureHandlerRootView>
  );
}
export default App;
