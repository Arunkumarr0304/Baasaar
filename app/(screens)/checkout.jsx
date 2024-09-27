import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import Back from "../../assets/images/back.svg";
import Location from "../../assets/images/red_location.svg";
import Line from "../../assets/images/line.svg";
import Pay from "../../assets/images/pay.svg";
import Tick from "../../assets/images/tick.png";
import CountryDropdown from '../../components/CountryDropdown/CountryDropdown';
import { input_datas, shipping_method } from '../../Data/Data';
import Paycheck from '../../components/paycheck/Paycheck';
import Button from '../../components/Button/Button';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ThemeContext from '../../theme/ThemeContext';
import { Kalam_400Regular } from '@expo-google-fonts/kalam';

const Checkout = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [isSelected, setSelection] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState(null);

    const payment = () => {
        router.push('(screens)/payment');
    };

    const handlePress = (id) => {
        setSelectedMethod(id);
    };

    const goback = () => {
        router.push('(screens)/cart');
    };

    const toggleCheckbox = () => {
        setSelection(!isSelected);
    };

    const Checkbox = ({ checked, onPress }) => (
        <TouchableOpacity style={styles.checkbox} onPress={onPress}>
            {checked ? (
                <FontAwesomeIcon icon={faCheckSquare} size={24} color="#FF0000" />
            ) : (
                <View style={styles.uncheckedBox}>
                    <FontAwesomeIcon icon={faSquare} size={24} color="#ffffff" />
                </View>
            )}
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Back />
                </TouchableOpacity>
                <Text style={[styles.heading, {color: theme.color}]}>Checkout</Text>
            </View>
            <View style={styles.row}>
                <Location />
                <Line />
                <Pay />
                <Line />
                <Image source={Tick} alt='image' style={styles.image} />
            </View>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false} >
                <Text style={[styles.shipping, {color: theme.color}]}>Shipping</Text>
                <View style={styles.inputs_container}>
                    {
                        input_datas.map((d) => (
                        <View style={styles.name_input} key={d.id}>
                            <Text style={[styles.label, {color: theme.text}]}>{d.label}</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType={d.label === 'ZIP Code' ? 'numeric' : (d.label === 'Phone Number' ? 'phone-pad' : 'default')}
                                maxLength={d.label === 'ZIP Code' ? 5 : undefined}
                                placeholder={d.placeholder}
                            />
                        </View>
                        ))
                    }
                        
                    
                    <View style={styles.name_input}>
                        <Text style={[styles.label2, {color: theme.text}]}>Country</Text>
                        <CountryDropdown />
                    </View>
                </View>
                <Text style={[styles.method, {color: theme.color}]}>Shipping method</Text>
                <View style={styles.shipping_container}>
                    {shipping_method.map((d) => (
                        <View style={styles.checkmethod_box} key={d.id}>
                            <Paycheck
                                checked={selectedMethod === d.id}
                                onPress={() => handlePress(d.id)}
                            />
                            <View style={styles.checkout_container}>
                                <View style={styles.top_content}>
                                    <Text style={[styles.left_content, {color: theme.color}]}>{d.method}</Text>
                                    <Text style={[styles.right_content, {color: theme.text2}]}>{d.to}</Text>
                                </View>
                                <Text style={[styles.timing, {color: theme.text3}]}>{d.time}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <Text style={[styles.billing, {color: theme.color}]}>Billing Address</Text>
                <View style={styles.billing_check}>
                    <Checkbox checked={isSelected} onPress={toggleCheckbox} />
                    <Text style={[styles.bill, {color: theme.text}]}>Copy address data from shipping</Text>
                </View>
                <Button buttonText="Continue" onPress={payment} />
            </ScrollView>
        </View>
    );
};


export default Checkout;

const styles = StyleSheet.create({
    container: {
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
        left: '35%',
      },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 24,
    },
    image: {
        width: 24,
        height: 24,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    shipping: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Kalam_400Regular',
        color: '#1D1F22',
        textTransform: 'capitalize',
        marginVertical: 10,
    },
    inputs_container: {
        marginTop: 10,
    },
    name_input: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '600',
        color: '#070C18',
        padding: 5,
        marginBottom: 5,
        textTransform: 'capitalize',
    },
    label2: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '600',
        color: '#070C18',
        padding: 5,
        marginBottom: 5,
        textTransform: 'capitalize',
    },
    input: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 15,
        paddingVertical: 13,
        paddingLeft: 20,
        paddingRight: 55,
        backgroundColor: '#f6f6f6',
    },
    method: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Kalam_400Regular',
        color: '#000000',
        textTransform: 'capitalize',
        marginTop: 10,
    },
    shipping_container: {
        gap: 20,
        marginTop: 24,
    },
    checkmethod_box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    checkout_container: {},
    top_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    left_content: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '600',
        color: '#151515',
    },
    right_content: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        color: '#737680',
    },
    timing: {
        fontSize: 12,
        lineHeight: 22,
        fontWeight: '400',
        color: '#A3A5AD',
    },
    billing: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Kalam_400Regular',
        color: '#1D1F22',
        marginVertical: 24,
    },
    billing_check: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
    },
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    uncheckedBox: {
        width: 24,
        height: 24,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    bill: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        color: '#1D1F22',
    },
});
