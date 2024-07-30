import {scaleFont} from './mixins';
import {TextStyle} from 'react-native';

export const FONT_FAMILY_BOLD = 'Poppins-Bold';
export const FONT_FAMILY_SEMI_BOLD = 'Poppins-SemiBold';
export const FONT_FAMILY_REGULAR = 'Poppins-Regular';
export const FONT_FAMILY_MEDIUM = 'Poppins-Medium';
export const FONT_FAMILY_LIGHT = 'Poppins-Light';

export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_28 = scaleFont(28);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_SEMI_BOLD = '600';
export const FONT_WEIGHT_REGULAR = '500';
export const FONT_WEIGHT_MEDIUM = '400';
export const FONT_WEIGHT_LIGHT = '300';

export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_22 = scaleFont(22);
export const LINE_HEIGHT_16 = scaleFont(16);
export const LINE_HEIGHT_14 = scaleFont(14);

export const FONT_BOLD: TextStyle = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
  lineHeight: LINE_HEIGHT_24,
};

export const FONT_SEMI_BOLD: TextStyle = {
  fontFamily: FONT_FAMILY_SEMI_BOLD,
  fontWeight: FONT_WEIGHT_SEMI_BOLD,
};

export const FONT_REGULAR: TextStyle = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  lineHeight: LINE_HEIGHT_22,
};

export const FONT_MEDIUM: TextStyle = {
  fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FONT_WEIGHT_MEDIUM,
  lineHeight: LINE_HEIGHT_20,
};

export const FONT_LIGHT: TextStyle = {
  fontFamily: FONT_FAMILY_LIGHT,
  fontWeight: FONT_WEIGHT_LIGHT,
  lineHeight: LINE_HEIGHT_16,
};
