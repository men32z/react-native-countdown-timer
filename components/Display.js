import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { pauseToggle } from '../store/actions';
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
  },
});

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blinkedText: '#ff0000',
      showText: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.blinkText = this.blinkText.bind(this);
  }

  componentDidMount() {
    this.blinkText();
  }

  handleClick() {
    const { pauseToggle, play } = this.props;
    pauseToggle();
    setTimeout(() => { play(); }, 100);
  }

  blinkText() {
    const { time } = this.props;
    const { showText } = this.state;
    setTimeout(() => {
      if (time <= 10 && time !== 0) {
        this.setState({
          blinkedText: showText ? '#ff0000' : 'transparent',
          showText: !showText,
        });
      }
      this.blinkText();
    }, parseInt(showText ? 50 : 250, 10));
  }


  render() {
    const { time, paused, startSeconds } = this.props;
    const { blinkedText } = this.state;
    return (
      <View style={styles.container}>
        <Text style={[
          styles.time,
          time <= 20 && startSeconds !== 0 ? { color: '#ff0000' } : {},
          time <= 10 && time !== 0 ? { color: blinkedText } : {},
        ]}
        >
          {timer.getMinutes(time)}
        </Text>
        <Icon
          name={`${paused ? 'play' : 'pause'}-circle-outline`}
          size={55}
          color="#000"
          onPress={this.handleClick}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  startSeconds: state.countdown.startSeconds,
  time: state.countdown.seconds,
  paused: state.countdown.paused,
});
const mapDispatchToProps = dispatch => ({ pauseToggle: () => dispatch(pauseToggle()) });

Display.propTypes = {
  startSeconds: PropTypes.number.isRequired,
  pauseToggle: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
