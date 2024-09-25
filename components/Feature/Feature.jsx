import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import { feature_data } from '../Data';
import Collection from "../../assets/images/collection.png";
import Right from "../../assets/images/collection_group.svg";
import {Link, router} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';


const Feature = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
   const details = () => {
    router.push('product_details');
   }
  return (
    <View style={styles.feature_section}>
      <View style={styles.header}>
        <Text style={[styles.heading, {color: theme.color}]}>Feature Products</Text>
        <Link style={[styles.show, {color: theme.text}]} href="/all_products">show all</Link>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        {feature_data.map((d) => (
          <TouchableOpacity style={styles.feature_box} key={d.id} onPress={details}>
            {d.image}
            <View style={styles.box_body}>
              <Text style={[styles.box_heading, {color: theme.text}]}>{d.heading}</Text>
              <Text style={styles.price}>${d.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.image_box}>
        <Image source={Collection} alt='image' style={styles.image} />
        <View style={styles.image_content}>
          <View style={styles.left_content}>
            <Text style={styles.left_head}>NEW COLLECTION</Text>
            <Text style={styles.left_text}>HANG OUT & PARTY</Text>
          </View>
          <Right />
        </View>
      </View>
    </View>
  )
}

export default Feature;

const styles = StyleSheet.create({
  feature_section: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  heading: {
    fontSize: 18,
    lineHeight: 21,
    color: '#151515',
    fontWeight: '700',
  },
  show: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: '#4C4C4C',
  },
  container: {
    marginTop: 25,
  },
  feature_box: {
    marginRight: 10,
  },
  box_body: {
    gap: 3,
    padding: 5,
  },
  box_heading: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
    color: '#151515',
  },
  price: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
    color: '#FF0000',
  },
  image_box: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
  },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  image_content: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,
    paddingHorizontal: 20,
    width: '100%',
  },
  left_content: {
    flexDirection: 'column',
  },
  left_head: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
    color: '#FFB709',
    borderLeftColor: '#FF0000',
    borderLeftWidth: 1,
    paddingLeft: 10,
  },
  left_text: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '300',
    maxWidth: 120,
    color: '#ffffff',
    marginTop: 10,
  },
});
