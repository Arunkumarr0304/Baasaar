import React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

const CategoryIcon = ({ color }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
      <Rect x="1" y="1" width="10" height="10"   fill={color} />
      <Circle cx="18" cy="6" r="5" fill={color} />
      <Rect x="13" y="13" width="10" height="10" fill={color} />
      <Circle cx="6" cy="18" r="5" fill={color} />
    </Svg>
  );
};

export default CategoryIcon;
