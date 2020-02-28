import React from 'react';
import {
  Text, Button, View, TextInput,
} from 'react-native';

const CountdownForm = () => (
  <View>
    <Text>Countdown:</Text>
    <TextInput
      placeholder="(min)"
    />
    <Button
      onPress={() => {
        alert('You tapped the button!');
      }}
      title="Start"
    />
  </View>
);

export default CountdownForm;
