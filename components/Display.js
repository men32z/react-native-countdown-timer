import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: '8em',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  }
});

const Display = () => (
  <View style={styles.container}>
    <Text style={styles.time}>15:31</Text>
    <Icon name="pause-circle-outline" size={55} color="#000"
      onPress={() => {
        alert('You tapped the button!');
      }}
      />
  </View>
);
// play-circle-outline
export default Display;
