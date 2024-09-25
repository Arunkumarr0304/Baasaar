import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, StatusBar, Animated, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { pages } from "../components/Data";
import { router } from "expo-router";
import Button from "../components/Button/Button";
import Pagination from "../components/Pagination/Pagination";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';
import ThemeContext from "../theme/ThemeContext";

const { width, height } = Dimensions.get('window');

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const totalPages = pages.length;
  const [activePageIndex, setActivePageIndex] = useState(0);

  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Kalam_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const headingOpacity = useRef(new Animated.Value(1)).current;
  const heading2Opacity = useRef(new Animated.Value(1)).current;
  const descriptionOpacity = useRef(new Animated.Value(1)).current;
  const paginationOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (fontsLoaded) {
      animateContent();
    }
  }, [activePageIndex, fontsLoaded]);

  const animateContent = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(heading2Opacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(paginationOpacity, { toValue: 0, duration: 200, useNativeDriver: true })
      ]),
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(heading2Opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(paginationOpacity, { toValue: 1, duration: 200, useNativeDriver: true })
      ])
    ]).start();
  };

  const handleImageScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActivePageIndex(pageIndex);
  };

  const handleNextPress = () => {
    const nextIndex = Math.min(activePageIndex + 1, totalPages - 1);
    swiperRef.current.scrollTo({ x: nextIndex * width, animated: true });
    setActivePageIndex(nextIndex);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }} onLayout={onLayoutRootView}>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={swiperRef}
        onScroll={handleImageScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ width: width * totalPages }}
        style={{ flex: 1 }}
      >
        {pages.map((page, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <View style={styles.imageContainer}>
             <Image source={page.image} alt="image" style={styles.image} />
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.onboard_content}>
        <Animated.Text style={[styles.heading, { opacity: headingOpacity, fontFamily: 'Kalam_400Regular' }]}>
          {pages[activePageIndex].heading}
        </Animated.Text>
        <Animated.Text style={[styles.heading2, { opacity: heading2Opacity, fontFamily: 'Kalam_400Regular' }]}>
          {pages[activePageIndex].heading2}
        </Animated.Text>
        <Animated.Text style={[styles.description, { opacity: descriptionOpacity }]}>
          {pages[activePageIndex].Text}
        </Animated.Text>
        
        <View style={styles.page_button_container}>
          <Animated.View style={{ opacity: paginationOpacity }}>
            <Pagination activePageIndex={activePageIndex} totalPages={totalPages} />
          </Animated.View>
          {activePageIndex === totalPages - 1 ? (
            <View style={{ paddingTop: 15 }}>
              <Button buttonText="Get started"
                backgroundColor="#FF0000"
                textColor='#FFFFFF'  
                onPress={() => router.push('login')}
              />
            </View>
          ) : (
            <View style={{ paddingTop: 15 }}>
              <Button buttonText="Next" backgroundColor="#FF0000" textColor='#ffffff' onPress={handleNextPress} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  onboard_content: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 60,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heading: {
    fontSize: 42,
    lineHeight: 66,
    fontWeight: '690',
    color: '#ffffff',    
  },
  heading2: {
    fontSize: 42,
    lineHeight: 66,
    fontWeight: '600',
    color: '#FFB709',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '400',
    color: '#BABABA',
    fontStyle: 'normal',
    marginBottom: 20,
  },
  page_button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#3C4E9B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 20,
    maxHeight: 50,
    minHeight: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
