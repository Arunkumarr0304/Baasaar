import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView, Image } from 'react-native'
import React, { useState, useRef, useContext } from 'react'
import Swiper from 'react-native-swiper';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import Location from "../../assets/images/red_location.svg";
import Line from "../../assets/images/line.svg";
import RedLine from "../../assets/images/red_line.svg";
import Pay from "../../assets/images/red-pay.svg";
import Tick from "../../assets/images/tick.png";
import { pay_types, payment_data, price_data } from '../../components/Data';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Button from '../../components/Button/Button';
import ThemeContext from '../../theme/ThemeContext';

const Payment = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [isSelected, setSelection] = useState(false);
    const [scaleAnim] = useState(new Animated.Value(1));

    const add = () => {
        router.push('add_new');
    };
    const order = () => {
        router.push('order_confirm');
    }
    const handleCardZoom = (index) => {
        Animated.spring(scaleAnim, {
            toValue: index === 1 ? 1.1 : 1, 
            useNativeDriver: true,
        }).start();
    };

    const goback = () => {
        router.push('checkout');
    };

    const toggleCheckbox = () => {
        setSelection(!isSelected);
    };

    const Checkbox = ({ checked, onPress }) => (
        <TouchableOpacity style={styles.checkbox} onPress={onPress}>
            {checked ? (
                <FontAwesomeIcon icon={faCheckSquare} size={24} color="#48C33E" />
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
                <Text style={[styles.heading, {color: theme.color}]}>payment</Text>
            </View>
            <View style={styles.row}>
                <Location />
                <RedLine />
                <Pay />
                <Line />
                <Image source={Tick} alt='image' style={styles.tick} />
            </View>
            <ScrollView>
            <View style={styles.choose_row}>
                <Text style={[styles.choose, {color: theme.text}]}>Choose Your Card</Text>
                <TouchableOpacity onPress={add}><Text style={styles.add}>Add New+</Text></TouchableOpacity>
            </View>
            <View style={{minHeight: 220, height: 220, maxHeight: 220}}>
            <Swiper
                style={styles.swiper}
                showsPagination={false}
                onIndexChanged={handleCardZoom}
                loop={false}
                height={220}
            >
                {
                    payment_data.map((d, index) => (
                        <Animated.View
                            style={[styles.card, { transform: [{ scale: scaleAnim }] }]}
                            key={d.id}
                        >
                            <View style={styles.image_box}>
                              <Image source={d.image} alt='image' style={styles.image} />
                            </View>
                            <View style={styles.card_content}>
                                <Text style={styles.number}>{d.cardno}</Text>
                                <View style={styles.row1}>
                                    <Text style={styles.head1}>{d.head1}</Text>
                                    <Text style={styles.name}>{d.name}</Text>
                                </View>
                                <View style={styles.row2}>
                                    <Text style={styles.head1}>{d.head2}</Text>
                                    <Text style={styles.name}>{d.date}</Text>
                                </View>
                            </View>
                        </Animated.View>
                    ))
                }
            </Swiper>
            </View>
            <Text style={[styles.or, {color: theme.text}]}>Or checkout with</Text>
                <ScrollView horizontal={true} style={styles.pay_container}>
                    {
                        pay_types.map((d) => (
                            <TouchableOpacity style={styles.slide_images} key={d.id} >
                                {d.image}
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            <View style={styles.price_container}>
                {
                    price_data.map((d) => (
                        <View style={styles.price_row} key={d.id}>
                            <Text style={styles.price_heading}>{d.heading}</Text>
                            <Text style={[styles.value, {color: theme.text}]}>{d.value}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={styles.total_row}>
                <Text style={[styles.sub, {color: theme.text}]}>Subtotal</Text>
                <Text style={[styles.total, {color: theme.text}]}>$110</Text>
            </View>
            <View style={styles.billing_check}>
                    <Checkbox checked={isSelected} onPress={toggleCheckbox} />
                    <Text style={[styles.bill, {color: theme.text}]}>I agree to Terms & conditions</Text>
                </View>
                </ScrollView>
                <View style={styles.button_box}>
                <Button buttonText="Place My Order" onPress={order} />
                </View>
        </View>
    )
}

export default Payment;

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
        left: '38%',
      },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 24,
    },
    tick: {
        width: 24,
        height: 24,
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
    },
    swiper: {
        paddingTop: 24,
        maxHeight: 220,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 220,
        width: '100%',
    },
    image_box: {
        position: 'relative',
        maxHeight: 220,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '90%',
        borderRadius: 15,
    },
    card_content: {
        position: 'absolute',
        bottom: 10,
        width: '70%',
    },
    number: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '400',
        color: '#ffffff',
        textAlign: 'center',
    },
    row1: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 25,
    },
    row2: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    head1: {
        fontSize: 9,
        lineHeight: 11,
        fontWeight: '800',
        color: '#ffffff',
    },
    name: {
        color: '#ffffff',
        fontSize: 9,
        lineHeight: 11,
        fontWeight: '800',
    },
    or: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '600',
        color: '#151515',
    },
    price_container: {
        marginTop: 30,
        gap: 15,
    },
    price_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price_heading: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        color: '#8A8A8F',
    },
    value: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        color: '#151515',
    },
    total_row: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginTop: 20,
    },
    sub: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        color: '#151515',
    },
    total: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '400',
        color: '#151515',
    },
    billing_check: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 25,
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
    pay_container: {
        flexDirection: 'row',
        maxHeight: 40,
        marginTop: 20,
    },
    slide_images: {
        marginRight: 20,
    },
    button_box: {
        marginBottom: '10%',
    }
});
