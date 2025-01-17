/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import {
  View,
} from 'react-native';
import { BasicAnimations } from './src/Animations/BasicAnimation';


export const SIZE = 100

function App(): React.JSX.Element {


    return (
    <View
    style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    }}
    >
      <BasicAnimations />
    </View>
  );
}
export default App;
