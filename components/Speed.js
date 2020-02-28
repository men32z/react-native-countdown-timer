import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    alignItems: 'center',
    width: 70,
    borderColor: '#141414',
    padding:10,
    marginLeft:10,
    color: '#000',
  },
  text: {
    fontWeight: 'bold'
  },
});

class Speed extends Component {
    render(){
      return (
        <View style={styles.container}>
          <TouchableHighlight
            style={[styles.button]}
            onPress={() => {
              alert('You tapped the button!');
            }}
          ><Text style={styles.text}>1x</Text></TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              alert('You tapped the button!');
            }}
            title="1.5x"
          ><Text style={styles.text}>1.5x</Text></TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              alert('You tapped the button!');
            }}
            title="2x"
          ><Text style={styles.text}>2x</Text></TouchableHighlight>
        </View>
      );
    }
}

export default Speed;
