import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Paycheck = ({ size = 18, color = '#FF0000', checked, onPress }) => {
    const innerCircleSize = size - 8; 

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[
                styles.outerCircle, 
                { 
                    width: size, 
                    height: size, 
                    borderColor: color, 
                    backgroundColor: checked ? color : '#FFFFFF',
                    borderWidth: checked ? 5.5 : 1
                }
            ]}>
                {checked && <View style={[
                    styles.innerCircle, 
                    { 
                        width: innerCircleSize, 
                        height: innerCircleSize, 
                        backgroundColor: '#FFFFFF' 
                    }
                ]} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    outerCircle: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        borderRadius: 50,
    },
});

export default Paycheck;
