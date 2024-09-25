import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import CategoryIcon from '../../components/CategoryIcon';  
import ThemeContext from '../../theme/ThemeContext';

const TabIcon = ({ icon, color, custom, library }) => {
  if (custom) {
    return custom;
  }
  const IconComponent = library === 'FontAwesome' ? FontAwesome : MaterialIcons;
  return (
    <IconComponent
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
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.main_tab, {backgroundColor: theme.color}]}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#474747',
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          ),
          tabBarStyle: [styles.tabBar, {backgroundColor:theme.color}],
        })}
      >
        <Tabs.Screen 
          name="home" 
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon="home" color={color} library="FontAwesome" />
            ),
          }} 
        />
        <Tabs.Screen 
          name="category" 
          options={{
            title: 'Category',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon custom={<CategoryIcon color={color} />} />
            ),
          }} 
        />
        <Tabs.Screen 
          name="wishlist" 
          options={{
            title: 'Wishlist',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon="favorite-border" color={color} library="MaterialIcons" />
            ),
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon="user" color={color} library="FontAwesome" />
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
    width: '100%',
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#151515',
    paddingBottom: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    minHeight: 48,
  },
  activeTabButton: {
    backgroundColor: '#FF0000',
    minHeight: 58,
    marginTop: -25,
    minWidth: 58,
    maxWidth: 58,
  },
});

export default TabsLayout;
