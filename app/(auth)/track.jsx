import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import { details_data2 } from '../../components/Data';
import { router } from 'expo-router';
import Line from "../../assets/images/vertical_line.svg";
import Cart2 from "../../assets/images/cart_img2.svg";
import Van from "../../assets/images/van.svg";

const Track = () => {
    const goback = () => {
        router.push('order_details');
    };
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={goback}>
        <Back />
      </TouchableOpacity>
      <Text style={styles.heading}>Track Order</Text>
    </View>
    <View style={styles.details_container}>
        {
          details_data2.map((d) => (
            <View style={styles.row} key={d.id}>
                <View style={styles.row_header}>
                    {d.icon}
              <Text style={styles.row_heading}>{d.heading}</Text>
              </View>
              <Text style={styles.row_value}>{d.value}</Text>
            </View>
          ))
        }
    </View>
    <View style={styles.stack_container}>
          <View style={styles.stack_box}>
            <Cart2 />
            <View style={styles.details}>
              <Text style={styles.name}>Long Sleeve Dress</Text>
              <View style={styles.optional_row}>
                <Text style={styles.option}>Size:</Text>
                <Text style={styles.option}>XL</Text>
              </View>
              <View style={styles.main_row}>
                <View>
              <Text style={styles.delivery}>Free Delivery</Text>
              
              <View style={styles.price_row}>
                <Text style={styles.dashed}>$280</Text>
                <Text style={styles.price}>/ $200</Text>
              </View>
              </View>
              <Van />
              </View>
            </View>
          </View>
    
      </View>
    </View>
  )
}

export default Track;

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
      details_container: {
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        padding: 16,
        gap: 15,
      },
      main_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      row_header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
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
      stack_container: {
        gap: 24,
        marginTop: 24,
      },
      stack_box: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        borderRadius: 20,
        gap: 10,
        padding: 10,
      },
      details: {
        flex: 1,
        padding: 5,
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
        color: '#FFB709',
      },
      price_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
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
})