import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Filter from "../../assets/images/Filter.svg";
import { products_data } from '../../Data/Data';
import Star from "../../assets/images/small_star";
import { router } from 'expo-router';
import ThemeContext from '../../theme/ThemeContext';

const All_products = () => {

  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const goback = () => {
        router.push('home');
      }
      const details = () => {
        router.push('(screens)/product_details');
      }
  return (
    <View style={[styles.all_products_page, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <View style={styles.left_content}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
          <Text style={[styles.heading, {color: theme.color}]}>all products</Text>
        </View>
        <View style={styles.filter_box}>
          <Filter />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.results, {color: theme.text}]}>Found 152 Results</Text>
        <View style={styles.products_container}>
          {products_data.map((d) => (
            <TouchableOpacity style={[styles.product_box, {backgroundColor: theme.cardbg}]} key={d.id} onPress={details}>
              <View style={styles.image_box}>
               <Image source={d.image} alt='image' style={styles.image} />
              </View>
              <View style={styles.box_body}>
                <View style={styles.name_flex}>
                  <Text style={[styles.name, {color: theme.color}]}>{d.Name}</Text>
                  <View style={styles.rating_box}>
                    <Star />
                    <Text style={styles.rating}>{d.rating}</Text>
                  </View>
                </View>
                <Text style={styles.brand}>{d.brand}</Text>
                <View style={styles.price_row}>
                  <Text style={[styles.dashed, {color: theme.color}]}>{d.dashed}</Text>
                  <Text style={styles.price}>${d.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default All_products;

const styles = StyleSheet.create({
  all_products_page: {
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15%',
  },
  left_content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  heading: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
    color: '#151515',
    textTransform: 'capitalize',
  },
  filter_box: {
    borderRadius: 10,
    padding: 11.5,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_box: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  results: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '600',
    color: '#4C4C4C',
    marginVertical: 25,
    paddingLeft: 5,
  },
  products_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    gap: 10,
    alignItems: 'center',
    paddingBottom: 80,
  },
  product_box: {
    width: '48%', 
    backgroundColor: '#ffffff',
    marginBottom: 15, 
    padding: 8,
    borderRadius: 16,
    minHeight: 215,
    maxHeight: 215,
  },
  box_body: {},
  name_flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    lineHeight: 26,
    fontWeight: '700',
    color: '#151515',
    maxWidth: 100,
  },
  rating_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    gap: 1,
    backgroundColor: '#EADDFF',
    borderRadius: 3,
    padding: 4,
  },
  rating: {
    fontSize: 7,
    lineHeight: 8,
    fontWeight: '500',
    color: '#4C4C4C',
  },
  brand: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: '#BABABA',
  },
  price_row: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  dashed: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    color: '#151515',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    color: '#FF0000',
  }
});
