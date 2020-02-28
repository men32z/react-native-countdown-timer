import React from 'react';
import {Button, Text, View} from 'react-native';
import { Icon } from 'antd-mobile';

const Display = () => (
  <View>
    <Text>15:31</Text>
    <Button
      onPress={() => {
        alert('You tapped the button!');
      }}
      title="1.5x"
    />
    <Icon type="pause" />
  </View>
);

export default Display;
