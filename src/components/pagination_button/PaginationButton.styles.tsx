import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.MAIN_COLORS.SECONDARY,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  arrow: {
    position: 'absolute',
  },
  textButton: {
    color: colors.MAIN_COLORS.WHITE,
    fontSize: 16,
    position: 'absolute',
  },
});
