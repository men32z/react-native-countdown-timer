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
    justifyContent: 'end',
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
    this.state = {
      blinkedText: '',
      showText: true,
    }
    this.handleClick = this.handleClick.bind(this);
    this.blinkText = this.blinkText.bind(this);
  }
  handleClick(){
    const {pauseToggle, play, paused} = this.props;
    pauseToggle();
    setTimeout(()=>{play();}, 100);
  }

  blinkText(){
    const {time} = this.props;
      setTimeout(()=>{
        if(time <= 10 && time !== 0){
          this.setState({
            blinkedText: this.state.showText ? '#ff0000' : 'transparent',
            showText: !this.state.showText
          });
        }
        this.blinkText();
      }, parseInt(this.state.showText? 50 : 250));
  }

  componentDidMount(){
    this.blinkText();
  }

  render(){
    const {time, paused, startSeconds} = this.props;
    return (
      <View style={styles.container}>
        <Text style={[
          styles.time,
          time <= 20 && startSeconds !== 0? {color: "#ff0000"} : {},
          time <= 10 && time !== 0 ? {color: this.state.blinkedText} : {},
        ]}>
          {timer.getMinutes(time)}
        </Text>
        <Icon name={`${paused ? 'play' : 'pause'}-circle-outline`} size={55} color="#000"
          onPress={this.handleClick}
          />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  startSeconds: state.countdown.startSeconds,
  time: state.countdown.seconds,
  paused: state.countdown.paused
});
const mapDispatchToProps = dispatch => ({pauseToggle: () => dispatch(pauseToggle())});
export default connect(mapStateToProps, mapDispatchToProps)(Display);
