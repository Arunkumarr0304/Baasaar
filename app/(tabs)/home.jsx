import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import Category from '../../assets/images/category.svg';
import Cart from '../../assets/images/bag.svg';
import Notification from '../../assets/images/notification.svg';
import Logo from '../../assets/images/logo.svg';
import Feather from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper';
import { scroll_slider, slider_data } from '../../components/Data';
import Arrows from "../../assets/images/slider_arrow.svg";

const Home = () => {
  return (
    <View style={styles.Homepage}>
      <View style={styles.header}>
        <Category />
        <Logo />
        <View style={styles.right_header}>
          <Cart />
          <View style={styles.image_box}>
            <Notification />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.searchSection}>
          <Feather name="search" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search product name"
            placeholderTextColor="#999999"
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
              {d.background_image}
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

        <View style={styles.scroll_container}>
          {
            scroll_slider.map((d) => (
              <View style={styles.scroll_slider_box} key={d.id}>
                <View style={styles.image_circle}>
                  <View style={styles.inside_circle}>
                  {d.image}
                  </View>
                </View>
                <Text style={styles.scroll_text}>{d.text}</Text>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Homepage: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    borderRadius: 30,
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
  },
  slider_content: {
    position: 'absolute',
    flexDirection: 'row',
    
  },
  slider_left: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  slider_right: {
  
  },
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
    backgroundColor: '#FFB709',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  red: {
    color: '#FF0000',
  },
  scroll_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  scroll_slider_box: {
    alignItems: 'center',
    justifyContent:'center',
  },
  image_circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    minWidth: 50,
    maxWidth: 50,
    minHeight: 50,
    maxHeight:50,
    padding: 15,    
    borderWidth: 1,
  },
  inside_circle: {
    borderRadius: 100,
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight:40,
    padding: 15,   
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
