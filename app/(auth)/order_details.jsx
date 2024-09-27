import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import { cart_data, details_data } from '../../components/Data';
import Arrow from "../../assets/images/right_arrow.svg";
import ThemeContext from '../../theme/ThemeContext';
import Dark_arrow from '../../assets/images/dark_right_arrow.svg';
import Van from "../../assets/images/van2.svg";

const Order_details = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const goback = () => {
        router.push('myorder');
    };
    const track = () => {
      router.push('track');
    };
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
    <View style={styles.header}>
      <TouchableOpacity onPress={goback}>
        <Back />
      </TouchableOpacity>
      <Text style={[styles.heading, {color: theme.color}]}>Order Detail</Text>
    </View>
    <View style={[styles.details_container, {backgroundColor: theme.card}]}>
    <View style={styles.details_container2}>
        {
          details_data.map((d) => (
            <View style={styles.row} key={d.id}>
              <Text style={[styles.row_heading, {color:theme.color}]}>{d.heading}</Text>
              <Text style={[styles.row_value, {color:theme.color}]}>{d.value}</Text>
            </View>
          ))
        }
    </View>
    <View style={styles.row2}></View>
    <View style={styles.row}>
              <Text style={[styles.row_heading, {color: theme.color}]}>Cancel Order</Text>
            {darkMode ? <Dark_arrow /> :  <Arrow />}
            </View>
    </View>
    <Text style={[styles.shipping, {color:theme.color}]}>Shipping Details</Text>

    <View style={styles.stack_container}>
        {cart_data.map((d, index) => (
          <View style={[styles.stack_box, {backgroundColor: theme.cardbg}]} key={d.id}>
            {d.image}
            <View style={styles.details}>
              <Text style={[styles.name, {color: theme.color}]}>{d.name}</Text>
              <View style={styles.optional_row}>
                {d.option && <Text style={[styles.option, {color: theme.color}]}>{d.option}</Text>}
                {d.size && <Text style={[styles.option, {color: theme.color}]}>{d.size}</Text>}
              </View>
              <View style={styles.row3}>
                <View style={styles.row4}>
              <Text style={[styles.delivery]}>{d.delivery}</Text>
              <View style={styles.price_row}>
                <Text style={[styles.dashed, {color: theme.color}]}>{d.dashed}</Text>
                <Text style={[styles.price, {color: theme.color}]}>/ ${d.price}</Text>
              </View>
              </View>
              <Van />
              </View>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.track_row} onPress={track}>
        <Text style={[styles.track, {color: theme.color}]}>Track Order</Text>
      { darkMode ? <Dark_arrow /> : <Arrow />}
      </TouchableOpacity>
    </View>
  )
}

export default Order_details;

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
        left: '30%',
      },
      details_container: {
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        padding: 16,
        marginTop: 30,
      },
      details_container2: {
        gap: 15,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      row_heading: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '500',
        color: '#151515',
        textTransform: 'capitalize',
      },
      row_value: {
        fontSize: 12,
        lineHeight:  22,
        fontWeight: '400',
        color: '#4C4C4C',
      },
      row2: {
        borderTopWidth: 1,
        borderColor: '#BABABA',
        marginVertical: 30,
      },
      shipping: {
        fontSize: 16,
        lineHeight: 28,
        fontWeight: '700',
        color:'#000000',
        marginTop: 30,
        marginBottom: 20,
      },
      stack_container: {
        gap: 24,
        marginTop: 24,
      },
      stack_box: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        gap: 10,
        padding: 10,
      },
      details: {
        flex: 1,
      },
      name: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '700',
        color: '#151515',
        textTransform: 'capitalize',
      },
      optional_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginVertical: 5,
      },
      option: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '500',
        color: '#151515',
        textTransform: 'capitalize',
      },
      delivery: {
        fontSize: 10,
        lineHeight: 14,
        fontWeight: '500',
        color: '#E6006E',
        marginTop: 10,
      },
      row3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      row4: {
        flexDirection: 'column',
        gap: 3,
      },
      price_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginTop: 5,
      },
      dashed: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        color: '#151515',
        textDecorationLine: 'line-through',
      },
      price: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        color: '#151515',
      },
      track_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 25,
      },
      track: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '700',
        color: '#151515',
        textTransform: 'capitalize',
      }
})