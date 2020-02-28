import React from 'react';
import {
  Text, TouchableHighlight, View, TextInput
} from 'react-native';
import styles from './styles/countdownform';

const CountdownForm = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Countdown:</Text>
    <TextInput
      style={styles.input}
      placeholder="(min)"
    />
    <TouchableHighlight
      style={styles.button}
      onPress={() => {
        alert('You tapped the button!');
      }}
    ><Text style={styles.buttonText}>START</Text></TouchableHighlight>
  </View>
);

export default CountdownForm;
