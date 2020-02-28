import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    paddingTop: 18,
    fontStyle:'italic',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});

const Message = () => (
  <View style={styles.container}>
    <Text style={styles.text}>More than halfway there!</Text>
  </View>
);

export default Message;
