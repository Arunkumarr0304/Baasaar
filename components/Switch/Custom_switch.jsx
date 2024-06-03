import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const CustomSwitch = ({ isEnabled, toggleSwitch }) => {
  return (
    <View style={styles.switchContainer}>
      <Switch
        trackColor={{ false: '#BBBBBB', true: '#FF0000' }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  switchContainer: {
    alignItems: 'flex-end',
  },
  switch: {
    width: 40,
  }
})
export default CustomSwitch;