import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import Location from "../../assets/images/red_location.svg";
import Line from "../../assets/images/line.svg";
import RedLine from "../../assets/images/red_line.svg";
import Pay from "../../assets/images/red-pay.svg";
import Tick from "../../assets/images/tick.svg";

const Payment = () => {

    const goback = () => {
        router.push('checkout');
    };
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
            <Back />
        </TouchableOpacity>
        <Text style={styles.heading}>payment</Text>
    </View>
    <View style={styles.row}>
                <Location />
                <RedLine />
                <Pay />
                <Line />
                <Tick />
            </View>
            <View style={styles.choose_row}>
                <Text style={styles.choose}>Choose Your Card</Text>
                <Text style={styles.add}>Add New+</Text>
            </View>
    </View>
  )
}

export default Payment;

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
        gap: 75,
    },
    heading: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: '700',
        color: '#151515',
        marginLeft: 20,
        textTransform: 'capitalize',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 24,
    },
    choose_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    choose: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '600',
        color: '#151515',
    },
    add: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        color: '#FF0000',
    }
})