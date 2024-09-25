import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import ThemeContext from '../../theme/ThemeContext';

const PriceSlider = ({ onValuesChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const handleValuesChange = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
    onValuesChange(values);
  };

  const renderThumbComponent = () => (
    <View style={styles.thumbContainer}>
      <View style={styles.thumb}>
        <Text style={styles.thumbText}>{minPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.thumb}>
        <Text style={styles.thumbText}>{maxPrice.toFixed(2)}</Text>
      </View>
    </View>
  );

  const calculateThumbValue = (value) => {
    // Calculate the thumb value based on the position of the thumb
    const range = maxPrice - minPrice;
    const calculatedValue = minPrice + (value / 100) * range;
    return calculatedValue.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        values={[minPrice, maxPrice]}
        onValuesChange={handleValuesChange}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FF0000"
        thumbStyle={styles.thumbStyle}
        renderThumbComponent={renderThumbComponent}
      />
      <Text style={[styles.thumbValue, {color:theme.color}]}>${calculateThumbValue(minPrice)}</Text>
    </View>
  );
};

export default PriceSlider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  slider: {
    width: '100%',
  },
  thumbContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    top: -25,
  },
  thumb: {
    backgroundColor: 'transparent',
  },
  thumbText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  thumbStyle: {
    borderColor: '#007AFF',
    borderWidth: 2,
    borderRadius: 50,
  },
  thumbValue: {
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#151515',
  },
});
