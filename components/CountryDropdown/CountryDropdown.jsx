import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList } from 'react-native';
import Drop from "../../assets/images/dropdown.svg"; // Ensure this path is correct

const countries = [
    { label: 'United States', value: 'US' },
    { label: 'Spain', value: 'ES' },
    { label: 'France', value: 'FR' },
    { label: 'China', value: 'CN' },
    { label: 'Germany', value: 'DE' },
    { label: 'Italy', value: 'IT' },
    { label: 'Portugal', value: 'PT' },
    { label: 'Russia', value: 'RU' },
    { label: 'Japan', value: 'JP' },
    { label: 'South Korea', value: 'KR' },
    { label: 'Saudi Arabia', value: 'SA' },
    { label: 'India', value: 'IN' },
    { label: 'Bangladesh', value: 'BD' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Indonesia', value: 'ID' },
    { label: 'Vietnam', value: 'VN' },
    { label: 'Turkey', value: 'TR' },
    { label: 'Iran', value: 'IR' },
    { label: 'Kenya', value: 'KE' },
    { label: 'Sri Lanka', value: 'LK' },
    { label: 'Philippines', value: 'PH' },
    { label: 'South Africa', value: 'ZA' },
    { label: 'Brazil', value: 'BR' },
    { label: 'Mexico', value: 'MX' },
];

const CountryDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.dropdownText}>{selectedLanguage ? selectedLanguage.label : 'Select a country'}</Text>
        <Drop style={styles.drop} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => selectLanguage(item)}>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#f6f6f6',
    paddingLeft: 20,
    paddingRight: 40,
    paddingVertical: 18,
    position: 'relative',
  },
  dropdownText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  drop: {
    position: 'absolute',
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 15,
    marginBottom: 25,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default CountryDropdown;
