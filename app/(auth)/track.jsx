import { StyleSheet, Text, View, TouchableOpacity, Platform, Image } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import { details_data2 } from '../../components/Data';
import { router } from 'expo-router';
import Line from "../../assets/images/lines.svg";
import Cart2 from "../../assets/images/cart_img2.svg";
import Van from "../../assets/images/van.svg";
import ThemeContext from '../../theme/ThemeContext';

const Track = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const goback = () => {
        router.push('order_details');
    };
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}>Track Order</Text>
      </View>
      <View>
        <View style={[styles.details_container, {backgroundColor: theme.card}]}>
          {
            details_data2.map((d, index) => (
              <View key={d.id}>
                <View style={styles.row}>
                  <View style={styles.row_header}>
                    <Image source={d.icon} alt='image' style={styles.icons} />
                    <Text style={[styles.row_heading, {color: theme.color}]}>{d.heading}</Text>
                  </View>
                  <Text style={[styles.row_value, {color: theme.color}]}>{d.value}</Text>
                </View>
                {index < details_data2.length - 1 && <Line style={styles.line} />}
              </View>
            ))
          }
        </View>
      </View>
      <View style={styles.stack_container}>
        <View style={[styles.stack_box, styles.shadowProp, {backgroundColor: theme.cardbg}]}>
          <Cart2 />
          <View style={styles.details}>
            <Text style={[styles.name, {color: theme.color}]}>Long Sleeve Dress</Text>
            <View style={styles.optional_row}>
              <Text style={[styles.option, {color: theme.color}]}>Size:</Text>
              <Text style={[styles.option1]}>XL</Text>
            </View>
            <View style={styles.main_row}>
              <View>
                <Text style={styles.delivery}>Free Delivery</Text>
                <View style={styles.price_row}>
                  <Text style={[styles.dashed, {color: theme.color}]}>$280</Text>
                  <Text style={[styles.price, {color: theme.color}]}>/ $200</Text>
                </View>
              </View>
              <Van />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Track;

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
    paddingHorizontal: 16,
    paddingBottom: 30,
    paddingTop: 40,
    gap: 15,
    marginTop: 30,
    position: 'relative',
  },
  main_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -15,
  },
  row_header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  icon: {
    position: 'relative',
    zIndex: 200,
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
  line: {
    left: '3%',
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
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    }),
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
  option1: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: '#151515',
    textTransform: 'capitalize',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  delivery: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '500',
    color: '#E6006E',
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
});
