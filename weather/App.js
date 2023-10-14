import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Position from './screens/Position'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current weather</Text>
      <Position />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
