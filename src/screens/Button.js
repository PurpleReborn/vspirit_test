import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Styles';

export default function Button(props) {
  const {
    color,
    btnText,
    btnTextColor,
    disable = false,
    elevation,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={[
        styles.btn,
        elevation && styles.elevation,
        {backgroundColor: color},
      ]}>
      <Text style={{color: btnTextColor}}>{btnText}</Text>
    </TouchableOpacity>
  );
}
