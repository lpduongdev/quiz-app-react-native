import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const COLORS = {
  primary: '#252c4a',
  secondary: '1F90FF',
  accent: '#3498db',
  success: '#00C851',
  error: '#ff4444',
  black: '#171717',
  white: '#ffffff',
  background: '#252C4A',
  transparent: '#00000000',
};

export const SIZES = {
  base: 10,
  width,
  height,
};
