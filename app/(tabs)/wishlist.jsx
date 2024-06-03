import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { router } from 'expo-router';
import Back from "../../assets/images/back.svg";
import { wishlist_data } from '../../components/Data';
import ThemeContext from '../../theme/ThemeContext';

const Wishlist = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const goback = () => {
    router.push('home');
};
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
       <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Back />
                </TouchableOpacity>
                <Text style={[styles.heading, {color: theme.color}]}>Wishlist</Text>
            </View>
            <View style={styles.list_container}>
              {
                wishlist_data.map((d) => (
                  <View style={styles.list_box} key={d.id}>
                  {d.image}
                  <View style={styles.card_body}>
                    <Text style={[styles.list_heading, {color: theme.color}]}>{d.heading}</Text>
                    <Text style={[styles.about_text, {color: theme.text}]}>{d.text}</Text>
                    <Text style={styles.price}>{d.price}</Text>
                  </View>
                  </View>
                ))
              }
            </View>
    </View>
  )
}

export default Wishlist;

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
    gap: 55,
},
heading: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#151515',
    marginLeft: 20,
},
list_container: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 15,
  justifyContent: 'center',
},
list_box:{
  
},
card_body: {
  maxWidth: 150,
  gap: 3,
},
list_heading: {
  fontSize: 16,
  lineHeight: 26,
  fontWeight: '700',
  color: '#151515',
},
about_text: {
  fontSize: 12,
  lineHeight: 16,
  fontWeight: '400',
  color: '#000000',
},
price: {
  fontSize: 16,
  lineHeight: 26,
  fontWeight: '700',
  color: '#FF0000',
}
})