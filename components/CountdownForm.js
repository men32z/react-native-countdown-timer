import React, {Component} from 'react';
import {
  Text, TouchableHighlight, View, TextInput
} from 'react-native';
import styles from './styles/countdownform';
import {connect} from 'react-redux';
import {setSeconds, decrease} from '../store/actions';

class CountdownForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      minutes: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.play = this.play.bind(this);
  }

  handleClick(){
    const {setSeconds} = this.props;
    const {minutes} = this.state;
    setSeconds(parseInt(minutes * 60));
    setTimeout(()=>{this.play();}, 100);

  }

  play(){
    const {decrease, seconds, speed, paused} = this.props;

    if(seconds > 0 && !paused){
      setTimeout(()=>{
        decrease();
        this.play();
      }, parseInt(1000 / speed));
    }
  }

  render(){
    const {minutes} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Countdown:</Text>
        <TextInput
          style={styles.input}
          placeholder="(min)"
          value={minutes}
          onChangeText={(text) => this.setState({minutes: text.replace(/[^0-9]/g, '')})}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleClick}
        ><Text style={styles.buttonText}>START</Text></TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  seconds: state.countdown.seconds,
  speed: state.countdown.speed,
});
const mapDispatchToProps = dispatch => ({
  setSeconds: (seconds) => dispatch(setSeconds(seconds)),
  decrease: () => dispatch(decrease())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountdownForm);
