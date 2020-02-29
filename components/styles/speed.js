import { StyleSheet } from 'react-native';

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
    padding: 10,
    marginLeft: 10,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonActive: {
    backgroundColor: '#666666',
  },
  buttonTextActive: {
    color: '#fff',
  },

});
export default styles;
