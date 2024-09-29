import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Pressable, Image } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Back from "../../assets/images/back.svg";
import Filter from "../../assets/images/Filter.svg";
import Feather from 'react-native-vector-icons/Feather';
import Trash from "../../assets/images/Trash.svg";
import Close from "../../assets/images/Close.svg";
import { feature_data } from '../../Data/Data';
import { router } from 'expo-router';
import Filters from '../../components/Filter_content/Filter_content';
import ThemeContext from '../../theme/ThemeContext';

const Search = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [sessionSearchHistory, setSessionSearchHistory] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const details = () => {
    router.push('(screens)/product_details');
  }

  const goback = () => {
    router.push('home');
  }

  useEffect(() => {
    const loadSearchHistory = async () => {
      try {
        const history = await AsyncStorage.getItem('searchHistory');
        if (history) {
          setSearchHistory(JSON.parse(history));
        }
      } catch (error) {
        console.error('Failed to load search history', error);
      }
    };

    loadSearchHistory();
  }, []);

  useEffect(() => {
    const saveSearchHistory = async () => {
      try {
        const updatedHistory = [...searchHistory, ...sessionSearchHistory];
        await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      } catch (error) {
        console.error('Failed to save search history', error);
      }
    };

    return () => {
      saveSearchHistory();
    };
  }, [sessionSearchHistory]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setSessionSearchHistory([...sessionSearchHistory, searchTerm]);
    }
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = feature_data.filter((feature) =>
        feature.heading.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFeatures(filtered);
    } else {
      setFilteredFeatures([]);
    }
  }, [searchTerm]);

  const removeSearchItem = async (index) => {
    const isSessionItem = index >= searchHistory.length;
    const updatedHistory = isSessionItem
      ? sessionSearchHistory.filter((_, i) => i !== index - searchHistory.length)
      : searchHistory.filter((_, i) => i !== index);

    if (isSessionItem) {
      setSessionSearchHistory(updatedHistory);
    } else {
      setSearchHistory(updatedHistory);
      try {
        await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      } catch (error) {
        console.error('Failed to save updated search history', error);
      }
    }
  };

  return (
    <View style={[styles.search_page, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
        <View style={styles.searchSection}>
          <Feather name="search" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search "
            value={searchTerm}
            onChangeText={setSearchTerm}
            onSubmitEditing={handleSearch}
          />
        </View>
        <TouchableOpacity style={styles.filter_box} onPress={() => setModalVisible(true)}>
          <Filter />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.recent}>
          <Text style={[styles.recent_head, { color: theme.color }]}>Recent Search</Text>
          <Trash />
        </View>
        <View style={styles.searchHistory}>
          {searchHistory.concat(sessionSearchHistory).map((item, index) => (
            <View key={index} style={styles.searchItem}>
              <Text style={styles.searchText}>{item}</Text>
              <TouchableOpacity onPress={() => removeSearchItem(index)}>
                <Close />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.Popular}>
          <Text style={[styles.recent_head, { color: theme.color }]}>Popular this week</Text>
          <Text style={[styles.show, { color: theme.text }]}>Show all</Text>
        </View>
        <ScrollView horizontal={true} style={styles.featureContainer}>
          {filteredFeatures.map((d) => (
            <TouchableOpacity style={styles.feature_box} key={d.id} onPress={details} >
             <Image source={d.image} alt='image' style={styles.image} />
              <View style={styles.box_body}>
                <Text style={[styles.box_heading, { color: theme.text }]}>{d.heading}</Text>
                <Text style={styles.price}>${d.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContainer, { backgroundColor: theme.cardbg }]}>

            <View style={styles.full_view}>
              <Filters />
              <View style={styles.buttons_container}>
                <TouchableOpacity style={styles.closeModal} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closemodal_text1}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeModal2} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closemodal_text2} >Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search_page: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '15%',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  filter_box: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 11,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  recent_head: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    color: '#151515',
    textTransform: 'capitalize',
  },
  searchHistory: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 8,
    marginVertical: 5,
    maxWidth: 120,
  },
  searchText: {
    fontSize: 16,
    color: '#474747',
  },
  Popular: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  show: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: '#4C4C4C',
  },
  featureContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  feature_box: {
    marginRight: 10,
  },
  image: {
    width: 126,
    height: 172,
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
  modalOverlay: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  modalContainer: {
    width: '80%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  full_view: {
    justifyContent: 'space-between',
    flex: 1,
  },
  closeModal: {
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    backgroundColor: '#D6D6D6',
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closemodal_text1: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    color: '#4C4C4C',
  },
  closeModal2: {
    marginTop: 20,
    borderRadius: 5,
    borderColor: '#D6D6D6',
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closemodal_text2: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    color: '#ffffff',
  },
  buttons_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
