import { StyleSheet, Text, View, ScrollView, TextInput,Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Category from '../../assets/images/category.svg';
import Dark_cat from "../../assets/images/dark_category.svg";
import Cart from '../../assets/images/bag.svg';
import Dark_cart from "../../assets/images/dark_bag.svg";
import Notification from '../../assets/images/notification.svg';
import Dark_notify from '../../assets/images/dark_notification.svg';
import Logo from '../../assets/images/logo.svg';
import Dark_logo from '../../assets/images/dark_logo.svg';
import Feather from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper';
import { scroll_slider, slider_data } from '../../Data/Data';
import Arrows from "../../assets/images/slider_arrow.svg";
import Feature from '../../components/Feature/Feature';
import Recommend from '../../components/Recommend/Recommend';
import { router } from 'expo-router';
import ThemeContext from '../../theme/ThemeContext';


const Home = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [activeId, setActiveId] = useState(scroll_slider[0].id);
  const notification = () => {
    router.push('(screens)/notification');
  }

  return (
    <View style={[styles.Homepage, {backgroundColor: theme.background}]}>
      <StatusBar 
        backgroundColor="transparent" 
        barStyle={darkMode ? "light-content" : "dark-content"} 
        translucent 
      />
      <View style={styles.header}>
       {darkMode ? <Dark_cat /> : <Category /> } 
       {darkMode? <Dark_logo /> : <Logo />}
        <View style={styles.right_header}>
        { darkMode ? <Dark_cart /> : <Cart />}
          <TouchableOpacity style={styles.image_box} onPress={notification}>
          {darkMode ? <Dark_notify /> : <Notification />}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchSection}>
          <Feather name="search" style={styles.searchIcon} />
          <TextInput
  style={styles.searchInput}
  placeholder="Search Product Name"
  onPress={() => router.push('(screens)/search')}
/>
        </View>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={3}
          loop={true}
          dot={<View style={styles.dotStyle} />}
          activeDot={<View style={styles.activeDotStyle} />}
          paginationStyle={{
            bottom: 10,
          }}
        >
          {slider_data.map((d) => (
            <View
              style={styles.slider_box} 
              key={d.id}
            >
              <View style={styles.slider_image_box}>
               <Image source={d.background_image} alt='image' style={styles.image} />
              </View>
              <View style={styles.slider_content}>
                <View style={styles.slider_left}>
                  <Text style={styles.left_text1}>{d.heading}</Text>
                  <Text style={styles.left_text2}>{d.heading2}<Text style={styles.red}>{d.percentage}</Text><Text style={styles.left_text2}>{d.heading3}</Text></Text>
                  <TouchableOpacity style={styles.shop_box}>
                    <Text style={styles.shop}>{d.shop}</Text>
                    <View style={styles.image_box}>
                      <Arrows />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.slider_right}>{d.right}</View>
              </View>
            </View>
          ))}
        </Swiper>

        <ScrollView horizontal={true} style={styles.scroll_container}>
          {scroll_slider.map((d) => (
            <TouchableOpacity
              style={[
                styles.scroll_slider_box, 
                activeId === d.id && styles.activeScrollSliderBox
              ]}
              key={d.id}
              onPress={() => setActiveId(d.id)}
            >
              <View style={[
                styles.image_circle, 
                activeId === d.id && styles.activeImageCircle
              ]}>
                <View style={[
                  styles.inside_circle,
                  activeId === d.id && styles.activeInsideCircle
                ]}>
                  {activeId === d.id ? d.active : d.image}
                </View>
              </View>
              <Text style={[styles.scroll_text, activeId === d.id && styles.activetext]}>{d.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Feature />
        <Recommend />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Homepage: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor:'#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '15%',
  },
  right_header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image_box: {
    paddingTop: 3,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchIcon: {
    fontSize: 20,
    color: '#999999',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
  wrapper: {
    height: 200,
    marginTop: 20,
  },
  slider_box: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '100%',
    width: '100%',
  },
  slider_image_box: {
    position: 'relative',
    width: '100%',
    borderRadius: 10,
  },
  image: {
    width:'100%',
    height: '80%',
    borderRadius: 10,
  },
  slider_content: {
    position: 'absolute',
    flexDirection: 'row',
  },
  slider_left: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  slider_right: {},
  left_text1: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#ffffff',
  },
  left_text2: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
    color: '#ffffff',
    maxWidth: 150,
  },
  shop_box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  shop: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '700',
    color: '#ffffff',
  },
  dotStyle: {
    backgroundColor: '#CCCCCC',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDotStyle: {
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  red: {
    color: '#FF0000',
  },
  scroll_container: {
    marginTop: 25,
  },
  scroll_slider_box: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  activeScrollSliderBox: {
    
  },
  image_circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    minWidth: 50,
    maxWidth: 50,
    minHeight: 50,
    maxHeight: 50,
    padding: 15,    
    borderWidth: 1,
    borderColor: 'transparent',
  },
  activeImageCircle: {
    borderColor: '#FF0000',
  },
  inside_circle: {
    borderRadius: 100,
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    padding: 15,   
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeInsideCircle: {
    backgroundColor: '#FF0000',
  },
  scroll_text: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#969696',
  },
  // activetext: {
  //   fontSize: 12,
  //   lineHeight: 16,
  //   fontWeight: '500',
  //   color: '#3A2C27',
  // }
});
