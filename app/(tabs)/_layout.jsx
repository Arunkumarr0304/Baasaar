import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';


const TabIcon = ({ icon, color }) => {
  return (
    <FontAwesome
      name={icon}
      size={24}
      color={color}
    />
  );
};

const TabBarButton = ({ children, onPress, accessibilityState }) => {
  const isSelected = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.activeTabButton : null
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
 
  return (
    <View style={styles.main_tab}>
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#474747',
        tabBarButton: (props) => (
          <TabBarButton {...props} />
        ),
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon="home" color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="category" 
        options={{
          title: 'Category',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon="ticket" color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="wishlist" 
        options={{
          title: 'Wishlist',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon="bookmark" color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon="user" color={color} />
          ),
        }} 
      />
    </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  main_tab: {
    flex: 1,
  },
  tabBar: {
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#f1f1f1',
    paddingVertical: 5,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
    maxWidth: 45,
    minWidth: 45,
    marginRight: 25,
  },
  activeTabButton: {
    backgroundColor: '#3C4E9B',
  },
});

export default TabsLayout;
