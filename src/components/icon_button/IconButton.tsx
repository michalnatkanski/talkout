import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './IconButton.styles.tsx';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import {colors} from '../../styles/index.ts';

MaterialIcons.loadFont();

type IconButtonProps = {
  handleClick: () => void;
  iconName: string;
};

export const IconButton = ({handleClick, iconName}: IconButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleClick}
      style={styles.container}>
      <MaterialIcons
        name={iconName}
        size={22}
        color={colors.MAIN_COLORS.WHITE}
      />
    </TouchableOpacity>
  );
};
