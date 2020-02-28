import React from 'react';
import { StyleSheet, View } from 'react-native';
import CountdownForm from './components/CountdownForm';
import Display from './components/Display';
import Speed from './components/Speed';
import Message from './components/Message';

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
