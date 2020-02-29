import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, TouchableHighlight, View, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/countdownform';
import { setSeconds } from '../store/actions';

class CountdownForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { setSeconds, play } = this.props;
    const { minutes } = this.state;
    setSeconds(parseInt(minutes * 60, 10));
    setTimeout(() => { play(); }, 1000);
  }

  render() {
    const { minutes } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Countdown:</Text>
        <TextInput
          style={styles.input}
          placeholder="(min)"
          value={minutes}
          onChangeText={text => this.setState({ minutes: text.replace(/[^0-9]/g, '') })}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleClick}
        >
          <Text style={styles.buttonText}>START</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSeconds: seconds => dispatch(setSeconds(seconds)),
});

CountdownForm.propTypes = {
  setSeconds: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CountdownForm);
