import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image  } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import Card from "../../assets/images/card3.png";
import ThemeContext from '../../theme/ThemeContext';
import Button from "../../components/Button/Button";

const Add_new = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const goback = () => {
        router.push('payment');
    }
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Back />
                </TouchableOpacity>
                <Text style={[styles.heading, {color: theme.color}]}>Add New Card</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <View style={styles.image_box}>
                    <Image source={Card} alt='image' style={styles.image} />
                </View>
                <View style={styles.card_content}>
                    <Text style={styles.number}>**** **** **** ****</Text>
                    <View style={styles.row1}>
                        <Text style={styles.head1}>CARDHOLDER NAME</Text>
                        <Text style={styles.name}>VALID EXPIRY</Text>
                    </View>
                    <View style={styles.row2}>
                        <Text style={styles.head1}>NAME</Text>
                        <Text style={styles.name}>MM/YY</Text>
                    </View>
                </View>
            </View>
            <View style={styles.input_container}>
                <View style={styles.name_input}>
                    <Text style={[styles.label, {color: theme.color}]}>Cardholder Name</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.name_input}>
                    <Text style={[styles.label, {color: theme.color}]}>Card Number</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.input_row}>
                <View style={styles.name_input}>
                    <Text style={[styles.label, {color: theme.color}]}>Expires</Text>
                    <TextInput
                        style={styles.inputs}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.name_input}>
                    <Text style={[styles.label, {color: theme.color}]}>CVV</Text>
                    <TextInput
                        style={styles.inputs}
                        keyboardType="phone-pad"
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
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 220,
    },
    image_box: {
        position: 'relative',
        maxHeight: 220,
    },
    image: {
        width: '100%',
    },
    card_content: {
        position: 'absolute',
        left: 20,
        top: 70,
        width: '80%',
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
    },
    row2: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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