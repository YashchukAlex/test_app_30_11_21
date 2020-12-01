import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../constants/index';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: 'gray',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: windowHeight * 0.12,
    width: windowWidth * 0.9,
    borderRadius: 5,
    marginTop: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    justifyContent: 'space-evenly',
  },
});
