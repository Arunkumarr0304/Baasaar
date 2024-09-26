import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React, { useContext } from 'react';
import { collection_data, recommend_data } from '../Data';
import Collection from "../../assets/images/top_collection.png";
import Right from "../../assets/images/top_collection_group.svg";
import {Link} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Recommend = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.recommend_section}>
      <View style={styles.header}>
        <Text style={[styles.heading, {color: theme.color}]}>Recommended</Text>
        <Link style={[styles.show, {color: theme.text}]} href="/all_products">show all</Link>
      </View>
      <ScrollView horizontal={true} style={styles.stack_container} showsHorizontalScrollIndicator={false}>
        {recommend_data.map((d) => (
          <View style={styles.stack_box} key={d.id}>
            {d.image}
            <View style={styles.stack_body}>
              <Text style={styles.stack_heading}>{d.heading}</Text>
              <Text style={styles.stack_price}>{d.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.header}>
        <Text style={[styles.heading, {color: theme.color}]}>Top Collection</Text>
        <Link style={[styles.show, {color: theme.text}]} href="/all_products">show all</Link>
      </View>
      <View style={styles.image_box}>
        <Image style={styles.image} source={Collection} alt='image' />
        <View style={styles.image_content}>
          <View style={styles.left_content}>
            <Text style={styles.left_head}>NEW COLLECTION</Text>
            <Text style={styles.left_text}>HANG OUT & PARTY</Text>
          </View>
          <Right />
        </View>
      </View>
      <View style={styles.collection_container}>
        {collection_data.map((d) => (
          <View style={styles.image_box2} key={d.id}>
           <Image source={d.image} alt='image' style={styles.image2} />
            <View
              style={[
                styles.image_content2,
                d.id === 1 ? styles.right_position : styles.left_position
              ]}
            >
              <Text style={styles.heading_content2}>{d.heading}</Text>
              <Text style={styles.text_content2}>{d.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Recommend;

const styles = StyleSheet.create({
  recommend_section: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  stack_container: {
    marginTop: 16,
    marginBottom: 25,
  },
  stack_box: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingRight: 15,
  },
  stack_body: {},
  stack_heading: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    color: '#151515',
  },
  stack_price: {
    fontSize: 14,
    lineHeight: 24,
    color: '#151515',
    fontWeight: '400',
  },
  image_box: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
    paddingLeft: 20,
  },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  image2: {
    width: '100%',
    borderRadius: 10,
    height: 214,
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
  collection_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 30,
  },
  image_box2: {
    position: 'relative',
    width: '48%',
  },
  image_content2: {
    position: 'absolute',
    top: 30,
  },
  left_position: {
    left: 10,
  },
  right_position: {
    right: 10,
  },
  heading_content2: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
    color: '#FFB709',
  },
  text_content2: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
    color: '#ffffff',
    maxWidth: 50,
    marginTop: 23,
  },
});
