import {StyleSheet} from 'react-native';
import {colors, typography} from '../../styles';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 120,
    zIndex: 2,
  },
  itemTitle: {
    ...typography.FONT_BOLD,
    fontSize: typography.FONT_SIZE_32,
    textAlign: 'center',
    marginBottom: 10,
    color: colors.MAIN_COLORS.WHITE,
  },
  itemSubtitle: {
    ...typography.FONT_LIGHT,
    textAlign: 'center',
    color: colors.MAIN_COLORS.WHITE,
    fontSize: typography.FONT_SIZE_16,
    marginBottom: 40,
    marginHorizontal: 40,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
