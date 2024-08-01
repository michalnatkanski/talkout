import {StyleSheet} from 'react-native';
import {colors, spacings, typography} from '../../styles';

export default StyleSheet.create({
  container: {
    padding: spacings.SCALE_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.MAIN_COLORS.SECONDARY,
  },
});
