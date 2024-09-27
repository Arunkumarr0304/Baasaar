import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated, Image } from 'react-native';
import React, {useContext, useState} from 'react';
import Swiper from 'react-native-swiper';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import { pay_types, payment_data, payment_data2 } from '../../components/Data';
import ThemeContext from '../../theme/ThemeContext';


const Payment_method = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [scaleAnim] = useState(new Animated.Value(1));
    const goback = () =>{
        router.push('profile');
    };
    const add = () => {
        router.push('add_new');
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
      <Text style={[styles.heading, {color: theme.color}]}>payment method</Text>
    </View>
    <View style={styles.choose_row}>
                <Text style={[styles.choose, {color: theme.color}]}>Card Management</Text>
                <TouchableOpacity onPress={add}><Text style={styles.add}>Add New+</Text></TouchableOpacity>
            </View>
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
            <Text style={[styles.or, {color:theme.color}]}>Or checkout with</Text>
                <ScrollView horizontal={true} style={styles.pay_container}>
                    {
                        pay_types.map((d) => (
                            <TouchableOpacity style={styles.slide_images} key={d.id} >
                                {d.image}
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
    </View>
  )
}

export default Payment_method;

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
        position: 'relative',
    },
    heading: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: '700',
        color: '#151515',
        marginLeft: 20,
        textTransform: 'capitalize',
        position: 'absolute',
        left: '25%',
    },
    choose_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
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
    pay_container: {
        flexDirection: 'row',
        maxHeight: 40,
        marginTop: 20,
    },
    slide_images: {
        marginRight: 20,
    },
    or: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '600',
        color: '#151515',
        marginTop: 30,
    },
})