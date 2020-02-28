import React, {Component} from 'react';
import {View, Text, TouchableHighlight } from 'react-native';
import styles from './styles/speed';
import {connect} from 'react-redux';
import {setSpeed} from '../store/actions'

class Speed extends Component {
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(speed){
      const {setSpeed} = this.props;
      setSpeed(speed);
    }

    render(){
      const {speed} = this.props;
      const speeds = [1, 1.5, 2].map(x=>(
        <TouchableHighlight
          key={x}
          style={[styles.button, speed === x ? styles.buttonActive : {}]}
          onPress={() => {
            this.handleClick(x);
          }}
        >
          <Text style={[styles.text, speed === x ? styles.buttonTextActive : {}]}
          >{x}x</Text>
        </TouchableHighlight>
      ));

      return (
        <View style={styles.container}>
          {speeds}
        </View>
      );
    }
}
const mapStateToProps = state => ({speed: state.countdown.speed})
const mapDispatchToProps = dispatch => ({
  setSpeed: speed => dispatch(setSpeed(speed))
});

export default connect(mapStateToProps, mapDispatchToProps)(Speed);
