import React from 'react';
import {Button, View} from 'react-native';

const Speed = () => (
  <View>
    <Button
      onPress={() => {
        alert('You tapped the button!');
      }}
      title="1x"
    />
    <Button
      onPress={() => {
        alert('You tapped the button!');
      }}
      title="1.5x"
    />
    <Button
      onPress={() => {
        alert('You tapped the button!');
      }}
      title="2x"
    />
  </View>
);

export default Speed;
