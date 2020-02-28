import React, {Component} from 'react';
import {View, Text, TouchableHighlight } from 'react-native';
import styles from './styles/speed';

class Speed extends Component {
    render(){
      return (
        <View style={styles.container}>
          <TouchableHighlight
            style={[styles.button, styles.buttonActive]}
            onPress={() => {
              alert('You tapped the button!');
            }}
          ><Text style={styles.text}>1x</Text></TouchableHighlight>
          <TouchableHighlight
            style={[styles.button]}
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
