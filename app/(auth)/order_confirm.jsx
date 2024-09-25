import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import Location from "../../assets/images/red_location.svg";
import Line from "../../assets/images/line.svg";
import RedLine from "../../assets/images/red_line.svg";
import Pay from "../../assets/images/red-pay.svg";
import Tick from "../../assets/images/red-tick.png";
import Confirm from "../../assets/images/confirm_tick.svg";
import Button from '../../components/Button/Button';
import ThemeContext from '../../theme/ThemeContext';

const Order = () => {
    const continues = () => {
        router.push('home');
    }
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const goback = () => {
        router.push('payment');
    };
  return (
    <View style={[styles.order_page, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Back />
                </TouchableOpacity>
                <Text style={[styles.heading, {color: theme.color}]}>Order Confirm</Text>
            </View>
            <View style={styles.row}>
                <Location />
                <RedLine />
                <Pay />
                <RedLine />
                <Image source={Tick} style={styles.icon} />
            </View>
            <View style={styles.Content}>
                <Confirm />
                <Text style={[styles.Complete, {color: theme.color}]}>Order Completed</Text>
                <Text style={[styles.complete_text, {color: theme.text}]}>Thank you for your purchase.
        You can view your order in ‘My Orders’ section.</Text>
            </View>
            <Button buttonText="Continue Shopping" onPress={continues} />
    </View>
  )
}

export default Order;

const styles = StyleSheet.create({
    order_page: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginTop: '15%',
      },
      heading: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: '700',
        color: '#151515',
        position: 'absolute',
        left: '30%',
      },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 24,
    },
    icon: {
        width: 24,
        height: 24,
    },
    Content: {
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 100,
    },
    Complete: {
        textAlign: 'center',
        fontSize: 26,
        lineHeight: 36,
        color: '#151515',
        fontWeight: '700',
    },
    complete_text: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '400',
        color: '#4C4C4C',
        maxWidth: 250,
        marginTop: 20,
        marginBottom: 130,
    }

})