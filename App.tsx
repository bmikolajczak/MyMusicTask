/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {Home} from './src/features/home/screens/homeScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
