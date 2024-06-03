import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import Back from "../../assets/images/back.svg";
import { category_data, category_tab } from '../../components/Data';
import Dropdown from "../../assets/images/dropdown.svg";
import Dropup from "../../assets/images/red_dropup.svg";

const Category = () => {
  const [activeTab, setActiveTab] = useState(category_tab[0].id);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const goback = () => {
    router.push('home');
  };

  const handleTabPress = (id) => {
    setActiveTab(id);
  };

  const toggleDropdown = (id) => {
    setOpenDropdowns(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.heading}>Category</Text>
      </View>
      <ScrollView style={styles.vertical_scrollview} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} style={styles.tabContainer} showsHorizontalScrollIndicator={false}>
          {category_tab.map((d) => (
            <TouchableOpacity 
              style={[styles.tab, activeTab === d.id && styles.activeTab]} 
              key={d.id} 
              onPress={() => handleTabPress(d.id)}
            >
              <Text style={styles.tabName}>{d.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.dropdownContainer}>
          {category_data.map((d) => (
            <View key={d.id}>
              <TouchableOpacity 
                style={styles.dropdownBox} 
                onPress={() => toggleDropdown(d.id)}
              >
                {d.image}
                <Text style={styles.dropdownText}>{d.name}</Text>
                {openDropdowns[d.id] ? <Dropup /> : <Dropdown />}
              </TouchableOpacity>
              {openDropdowns[d.id] && (
                <View style={styles.dropdownContent}>
                  {d.content.map((item) => (
                    <View style={styles.tabs_container} key={item.id}>
                      <Text style={styles.tabs}>{item.content1}</Text>
                      <Text style={styles.tabs}>{item.content2}</Text>
                      <Text style={styles.tabs}>{item.content3}</Text>
                      <Text style={styles.tabs}>{item.content4}</Text>
                      <Text style={styles.tabs}>{item.content5}</Text>
                      <Text style={styles.tabs}>{item.content6}</Text>
                      <Text style={styles.tabs}>{item.content7}</Text>
                      <Text style={styles.tabs}>{item.content8}</Text>
                      <Text style={styles.tabs}>{item.content9}</Text>
                      <Text style={styles.tabs}>{item.content10}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;

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
  tabContainer: {
    flexDirection: 'row',
    maxHeight: 36,
  },
  tab: {
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: 'transparent',
    marginRight: 5,
    maxHeight: 36,
  },
  activeTab: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: '#FF0000',
  },
  tabName: {
    color: '#151515',
  },
  dropdownContainer: {
    marginVertical: 20,
    paddingBottom: 30,
  },
  dropdownBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    color: '#151515',
  },
  dropdownContent: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabs_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tabs: {
    borderWidth: 2,
    borderColor: '#FFB709',
    borderRadius: 25,
    paddingVertical: 7,
    paddingHorizontal: 45,
    maxWidth: 150,
    minWidth: 150,
    maxHeight: 40,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '600',
    color: '#202020',
  },
  vertical_scrollview: {
    paddingBottom: 30,
  }
});
