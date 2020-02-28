import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {pauseToggle} from '../store/actions';
import timer from '../helpers/timer';

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

class Display extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const {pauseToggle} = this.props;
    pauseToggle();
  }
  render(){
    const {time, paused} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{timer.getMinutes(time)}</Text>
        <Icon name={`${paused ? 'play' : 'pause'}-circle-outline`} size={55} color="#000"
          onPress={this.handleClick}
          />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  time: state.countdown.seconds,
  paused: state.countdown.paused
});
const mapDispatchToProps = dispatch => ({pauseToggle: () => dispatch(pauseToggle())});
export default connect(mapStateToProps, mapDispatchToProps)(Display);
