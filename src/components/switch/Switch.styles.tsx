import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  switchWrapper: {
    width: 150,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#fbeded',
  },
  switch: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    left: 0,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#fff',
  },
  square: {
    position: 'absolute',
    height: 55,
    width: 55,
    borderRadius: 15,
    shadowOpacity: 0.8,
    shadowRadius: 25,
    elevation: 8,
  },
});
