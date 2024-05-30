import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { feature_data } from '../Data';
import Collection from "../../assets/images/collection.svg";

const Feature = () => {
  return (
    <View style={styles.feature_section}>
      <View style={styles.header}>
        <Text style={styles.heading}>Feature Products</Text>
        <Text style={styles.show}>show all</Text>
      </View>

      <ScrollView horizontal={true} style={styles.container}>
        {feature_data.map((d) => (
          <View style={styles.feature_box} key={d.id}>
            {d.image}
            <View style={styles.box_body}>
              <Text style={styles.box_heading}>{d.heading}</Text>
              <Text style={styles.price}>{d.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.image_box}>
        <Collection />
        </View>
    </View>
  )
}

export default Feature

const styles = StyleSheet.create({
  feature_section: {
    paddingVertical: 30,
    marginBottom: 30,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  }
})
