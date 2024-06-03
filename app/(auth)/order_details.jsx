import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';

const Order_details = () => {
    const goback = () => {
        router.push('myorder');
    };
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={goback}>
        <Back />
      </TouchableOpacity>
      <Text style={styles.heading}>Order Detail</Text>
    </View>
    <View style={styles.details_container}>
        
    </View>
    </View>
  )
}

export default Order_details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 30,
        paddingHorizontal: 20,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        gap: 50,
      },
      heading: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: '700',
        color: '#151515',
        marginLeft: 20,
        textTransform: 'capitalize',
      },
})