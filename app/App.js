/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import MainStackNavigator from './screens/MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SharedProvider} from './utils/Context';
const App = () => {
  const [qsNum, setQsNum] = useState(10);
  const [isMCUEnabled, setIsMCUEnabled] = useState(true);
  const [isBusinessEnabled, setIsBusinessEnabled] = useState(false);
  const [isFoodEnabled, setIsFoodEnabled] = useState(false);
  const [isGamesEnabled, setIsGamesEnabled] = useState(false);

  const sharedValue = {
    number: {
      get: qsNum,
      set: setQsNum,
    },
    mcu: {
      get: isMCUEnabled,
      set: setIsMCUEnabled,
    },
    business: {
      get: isBusinessEnabled,
      set: setIsBusinessEnabled,
    },
    food: {
      get: isFoodEnabled,
      set: setIsFoodEnabled,
    },
    games: {
      get: isGamesEnabled,
      set: setIsGamesEnabled,
    },
  };

  return (
    <NavigationContainer>
      <SharedProvider value={sharedValue}>
        <MainStackNavigator value={sharedValue} />
      </SharedProvider>
    </NavigationContainer>
  );
};

export default App;
