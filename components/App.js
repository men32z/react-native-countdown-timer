import React from 'react';
import { StyleSheet, View } from 'react-native';
import CountdownForm from './CountdownForm';
import Display from './Display';
import Speed from './Speed';
import Message from './Message';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <CountdownForm />
      <Message />
      <Display />
      <Speed />
    </View>
  );
}
