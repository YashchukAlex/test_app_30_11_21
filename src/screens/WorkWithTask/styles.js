import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../constants/index';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 2,
    height: windowHeight / 20,
    fontSize: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  pickTime: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    borderRadius: 8,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: windowHeight / 20,
    marginTop: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#ffffff',
  },
});
