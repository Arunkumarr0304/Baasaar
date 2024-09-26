import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Animated, Image  } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import Card from "../../assets/images/card1.png";
import ThemeContext from '../../theme/ThemeContext';
import Button from "../../components/Button/Button";
import Swiper from 'react-native-swiper';
import { payment_data } from '../../components/Data';

const Add_new = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [scaleAnim] = useState(new Animated.Value(1));
    const goback = () => {
        router.push('payment');
    };
    const handleCardZoom = (index) => {
        Animated.spring(scaleAnim, {
            toValue: index === 1 ? 1.1 : 1, 
            useNativeDriver: true,
        }).start();
    };
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Back />
                </TouchableOpacity>
                <Text style={[styles.heading, {color: theme.color}]}>Add New Card</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.main_swiper}>
            <Swiper
                style={styles.swiper}
                showsPagination={false}
                onIndexChanged={handleCardZoom}
                loop={true}
            >
                {
                    payment_data.map((d, index) => (
                        <Animated.View
                            style={[styles.card]}
                            key={d.id}
                        >
                              <Image source={d.image} alt='image' style={styles.image} />
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
            <View style={styles.input_container}>
                <View style={styles.name_input}>
                    <Text style={[styles.label, {color: theme.color}]}>Cardholder Name</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder='Minato Namikaza'
                    />
                </View>
                <View style={styles.name_input}>
                    <Text style={[styles.label, {color: theme.color}]}>Card Number</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="phone-pad"
                        placeholder='5412363272837284'
                    />
                </View>
                <View style={styles.input_row}>
                <View style={styles.name_input}>
                    <Text style={[styles.label, {color: theme.color}]}>Expires</Text>
                    <TextInput
                        style={styles.inputs}
                        keyboardType="phone-pad"
                        placeholder='08/26'
                    />
                </View>
                <View style={styles.name_input}>
                    <Text style={[styles.label, {color: theme.color}]}>CVV</Text>
                    <TextInput
                        style={styles.inputs}
                        keyboardType="phone-pad"
                        placeholder='678'
                    />
                </View>
                </View>
            </View> 
            </ScrollView>
            <View style={styles.button_box}>
            <Button buttonText="Add Card" />
            </View>
        </View>
    )
}

export default Add_new;

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
        gap: 30,
    },
    heading: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: '700',
        color: '#151515',
        marginLeft: 20,
        textTransform: 'capitalize',
    },
    main_swiper: {
        height: 230,
    },
    swiper: {
        height: '100%',
        gap: 0,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
    },
    image: {
        position: 'relative',
        resizeMode:'contain',
        width: '100%',
        minHeight: '100%',
    },
    card_content: {
        position: 'absolute',
        bottom: '18%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '400',
        color: '#ffffff',
        textAlign: 'center',
        width: '100%',
    },
    row1: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 25,
        width: '85%',
    },
    row2: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        width: '85%',
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
    input_container: {
        marginTop: 31,
        gap: 10,
    },
    name_input: {
        marginBottom: 0,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '600',
        color: '#070C18',
        padding: 5,
        marginBottom: 5,
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
    inputs: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 15,
        paddingVertical: 13,
        paddingLeft: 20,
        paddingRight: 55,
        backgroundColor: '#f6f6f6',
        minWidth: 140,
    },
    input_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    button_box: {
        marginBottom: '10%',
    }
})