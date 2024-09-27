import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import { cart_data } from '../../components/Data';
import Button from '../../components/Button/Button';
import ThemeContext from '../../theme/ThemeContext';
import Coupon from "../../assets/images/coupon.svg";

const Cart = () => {
  const { theme } = useContext(ThemeContext);
  const [cartData, setCartData] = useState(cart_data);
  const [promoCode, setPromoCode] = useState("");

  const goback = () => {
    router.push('product_details');
  }
  const continues = () => {
    router.push('checkout');
  }
  const handleChangeText = (value) => {
    setPromoCode(value);
  };

  const handleApplyPromoCode = () => {
    console.log("Applying promo code:", promoCode);
    setPromoCode("");
  };

  const incrementCount = (index) => {
    const updatedCart = [...cartData];
    updatedCart[index].count++;
    setCartData(updatedCart);
  };

  const decrementCount = (index) => {
    const updatedCart = [...cartData];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count--;
      setCartData(updatedCart);
    }
  };

  return (
    <View style={[styles.cartpage, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.color }]}>My Cart</Text>
      </View>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.items_row}>
          <Text style={[styles.items, { color: theme.color }]}>Items ({cartData.length})</Text>
          <Text style={[styles.remove, { color: theme.text }]}>Remove all</Text>
        </View>
        <View style={styles.stack_container}>
          {cartData.map((d, index) => (
            <View style={[styles.stack_box, { backgroundColor: theme.cardbg }]} key={d.id}>
              {d.image}
              <View style={styles.details}>
                <Text style={[styles.name, { color: theme.color }]}>{d.name}</Text>
                <View style={styles.optional_row}>
                  {d.option && <Text style={[styles.option, { color: theme.color }]}>{d.option}</Text>}
                  {d.size && <Text style={[styles.option1]}>{d.size}</Text>}
                </View>
                <Text style={styles.delivery}>{d.delivery}</Text>
                <View style={styles.price_row}>
                  <Text style={[styles.dashed, { color: theme.color }]}>{d.dashed}</Text>
                  <Text style={[styles.price, { color: theme.color }]}>/ ${d.price}</Text>
                </View>
              </View>
              <View style={styles.counter}>
                <TouchableOpacity onPress={() => decrementCount(index)}>
                  <Text style={styles.counterButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.count}>{d.count}</Text>
                <TouchableOpacity onPress={() => incrementCount(index)}>
                  <Text style={styles.counterButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.total_price}>
          <Text style={[styles.total, { color: theme.color }]}>Total Price :</Text>
          <Text style={styles.totalprice}>$400</Text>
        </View>
        <View style={styles.promo}>
          <Coupon style={styles.coupon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Coupon Code"
            value={promoCode}
            onChangeText={handleChangeText}
          />
          <TouchableOpacity onPress={handleApplyPromoCode} style={styles.send_box}>
            <Text style={styles.apply}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.button_box}>
          <Button buttonText="continue" onPress={continues} />
        </View>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  cartpage: {
    flex: 1,
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
    left: '40%',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 40,
  },
  items_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  items: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#151515',
  },
  remove: {
    fontSize: 16,
    lineHeight: 24,
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
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,  
    elevation: 5,        
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
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderRadius: 10,
    backgroundColor: '#FF0000',
    padding: 10,
    marginLeft: -35,
    marginTop: 20,
  },
  counterButton: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    paddingHorizontal: 5,
  },
  count: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  total_price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  total: {
    fontSize: 14,
    lineHeight: 28,
    fontWeight: '600',
    color: '#151515',
    textTransform: 'capitalize',
  },
  totalprice: {
    backgroundColor: '#FFB709',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    lineHeight: 28,
    fontWeight: '600',
    color: '#F8F8F8',
  },
  promo: {
  
  },
  coupon: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 100,
  },
  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 40,
    position: 'relative',
  },
  send_box: {
    maxWidth: 66,
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  apply: {
    color: '#ffffff',
    backgroundColor: '#FF0000',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: 'center',
  },
  button_box: {
    marginBottom: '10%',
  }
});
