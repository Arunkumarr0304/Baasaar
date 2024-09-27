import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back.svg";
import Notification from "../../assets/images/notification.svg";
import Dark_Notify from "../../assets/images/dark_notification.svg";
import Details from "../../assets/images/details_img.svg";
import Star from "../../assets/images/Big_star";
import { circle_data2, details_review } from '../../Data/Data';
import Button from "../../components/Button/Button";
import Cart from "../../assets/images/Buy_cart.svg";
import {Redirect, router} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const ProductDetails = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [activeColor, setActiveColor] = useState(circle_data2[0].id);
  const [activeHeading, setActiveHeading] = useState(details_review[0].id);

  const cart = () =>{
    router.push('(screens)/cart');
  } 

  const goback = () =>{
    router.push('home');
  }
  const notification = () => {
    router.push('(screens)/notification');
  }

  return (
    <View style={[styles.details_page, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
        <Back />
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}>Smart Watch</Text>
        <TouchableOpacity style={styles.image_box} onPress={notification}>
        {darkMode ? <Dark_Notify /> : <Notification />}
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll_view} showsVerticalScrollIndicator={false}>
        <View style={styles.scrolls}>
        <View style={styles.details_content}>
          <View style={styles.image_box}>
            <Details />
          </View>
          <View style={styles.name_flex}>
            <Text style={[styles.name, {color: theme.color}]}>Apple Watch SE Gen 2</Text>
            <View style={[styles.rating_box, {backgroundColor:theme.card2}]}>
              <Star />
              <Text style={styles.rating}>4.9</Text>
            </View>
          </View>
          <Text style={[styles.brand, {color: theme.text}]}>( With solo loop )</Text>
          <Text style={[styles.color_head, {color: theme.text}]}>Colors</Text>
          <View style={styles.circle_box_container}>
            {circle_data2.map((circle) => (
              <TouchableOpacity
                key={circle.id}
                style={[
                  styles.color_box,
                  activeColor === circle.id && { borderColor: '#FFB709' }
                ]}
                onPress={() => setActiveColor(circle.id)}
              >
                <View
                  style={[
                    styles.circle,
                    { backgroundColor: circle.backgroundColor }
                  ]}
                />
                <Text style={[styles.color_text, {color: theme.text}]}>{circle.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.review_heading}>
            {details_review.map((d) => (
              <TouchableOpacity
                key={d.id}
                onPress={() => setActiveHeading(d.id)}
              >
                <Text
                  style={[
                    styles.detail_head,
                    activeHeading === d.id && styles.active_detail_head
                  ]}
                >
                  {d.heading}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.description_container}>
            {details_review.map((d) => (
              activeHeading === d.id && (
                <Text style={styles.description} key={d.id}>{d.description}</Text>
              )
            ))}
          </View>
        </View>
        </View>
      </ScrollView>
      <View style={styles.button_box}>
        <Button buttonText="Add to Cart | $349.99" onPress={cart} />
        <View style={styles.cart_box}>
        <Cart  />
        </View>
        </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  details_page: {
    flex: 1,  
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginTop: '15%',
  },
  heading: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
    color: '#33302E',
    textTransform: 'capitalize',
  },
  scroll_view: {
    flex: 1,  
  },
  details_content: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  image_box: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 20,
  },
  name_flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: '#151515',
  },
  rating_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    backgroundColor: '#EADDFF',
    borderRadius: 3,
    padding: 4,
  },
  rating: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: '#BABABA',
  },
  brand: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: '#9095A6',
    marginTop: 8,
  },
  color_head: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#100D25',
    textTransform: 'capitalize',
    marginTop: 24,
  },
  circle_box_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 21,
  },
  circle: {
    borderRadius: 60,
    width: 22,
    height: 22,
    marginRight: 5,
  },
  color_box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#DDDEE3',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  color_text: {
    fontSize: 12,
    fontWeight: '500',
    color: '#100D25',
    textTransform: 'capitalize',
    lineHeight: 14,
  },
  review_heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 23,
    marginTop: 24,
  },
  detail_head: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: '#DDDEE3',
    textTransform: 'capitalize',
  },
  active_detail_head: {
    color: '#FF0000',
    borderBottomColor: '#5B41FF',
    borderBottomWidth: 1,
  },
  description_container: {
    marginTop: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#9095A6',
  },
  button_box: {
    position: 'relative',
    marginTop: 30,
    marginBottom: '10%',
  },
  cart_box: {
    position: 'absolute',
    top: 16,
    left: 50,
  }
});
