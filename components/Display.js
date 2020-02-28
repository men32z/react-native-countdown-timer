import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 110,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  }
});

const Display = ({time}) => (
  <View style={styles.container}>
    <Text style={styles.time}>{time}</Text>
    <Icon name="pause-circle-outline" size={55} color="#000"
      onPress={() => {
        alert('You tapped the button!');
      }}
      />
  </View>
);
// play-circle-outline

const mapStateToProps = state => ({time: state.countdown.time});

export default connect(mapStateToProps)(Display);
