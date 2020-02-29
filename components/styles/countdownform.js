import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    padding: 10,
    height: 35,
    width: 100,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#141414',
  },
  button: {
    backgroundColor: '#57baa1',
    height: 35,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'sans-serif',
  },
});
export default styles;
