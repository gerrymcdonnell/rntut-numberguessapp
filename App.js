import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'

/**
 * yt video
 * https://www.youtube.com/watch?v=qSRrxpdMpVc&t=2021s
 * 3:48:39 starts
 */
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
});
