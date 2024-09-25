import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList } from 'react-native';
import Drop from "../../assets/images/dropdown.svg"; // Ensure this path is correct

const languages = [
    { label: 'English', value: 'EN' },
    { label: 'Spanish', value: 'ES' },
    { label: 'French', value: 'FR' },
    { label: 'Chinese', value: 'ZH' },
    { label: 'German', value: 'DE' },
    { label: 'Italian', value: 'IT' },
    { label: 'Portuguese', value: 'PT' },
    { label: 'Russian', value: 'RU' },
    { label: 'Japanese', value: 'JA' },
    { label: 'Korean', value: 'KO' },
    { label: 'Arabic', value: 'AR' },
    { label: 'Hindi', value: 'HI' },
    { label: 'Bengali', value: 'BN' },
    { label: 'Punjabi', value: 'PA' },
    { label: 'Urdu', value: 'UR' },
    { label: 'Indonesian', value: 'ID' },
    { label: 'Vietnamese', value: 'VI' },
    { label: 'Turkish', value: 'TR' },
    { label: 'Persian', value: 'FA' },
    { label: 'Swahili', value: 'SW' },
    { label: 'Tamil', value: 'TA' },
    { label: 'Telugu', value: 'TE' },
    { label: 'Marathi', value: 'MR' },
    { label: 'Malayalam', value: 'ML' },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.dropdownText}>{selectedLanguage ? selectedLanguage.label : 'Select a language'}</Text>
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
              data={languages}
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
    paddingVertical: 13,
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
    height: '50%',
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
    color: '#ffffff',
  },
});

export default LanguageDropdown;
