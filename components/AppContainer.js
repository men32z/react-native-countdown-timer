import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import CountdownForm from './CountdownForm';
import Display from './Display';
import Speed from './Speed';
import Message from './Message';
import { decrease } from '../store/actions';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play() {
    const {
      decrease, seconds, speed, paused,
    } = this.props;

    if (seconds > 0 && !paused) decrease();

    setTimeout(() => {
      if (seconds > 0 && !paused) this.play();
    }, parseInt(1000 / speed, 10));
  }

  render() {
    return (
      <View style={styles.container}>
        <CountdownForm play={this.play} />
        <Message />
        <Display play={this.play} />
        <Speed />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  seconds: state.countdown.seconds,
  speed: state.countdown.speed,
  paused: state.countdown.paused,
});
const mapDispatchToProps = dispatch => ({
  decrease: () => dispatch(decrease()),
});

AppContainer.propTypes = {
  seconds: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  paused: PropTypes.bool.isRequired,
  decrease: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
