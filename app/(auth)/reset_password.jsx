import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import { Redirect, router, useRouter } from "expo-router";
import Success from "../../assets/images/successful.svg";
import { useFonts, Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';
import ThemeContext from '../../theme/ThemeContext';
import Back from '../../assets/images/back.svg'; 

const Reset = () => {
 
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const goback= () => {
    router.push('verification');
  }

  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Kalam_700Bold,
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const handleConfirm = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (modalVisible) {
      const timer = setTimeout(() => {
        setModalVisible(false);
        router.push('home');
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, [modalVisible, router]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#C42072" />;
  }

  return (
    <View style={[styles.reset_page, {backgroundColor: theme.background}]}>
      <View style={styles.column}>
      <View style={styles.header}>
      <View style={styles.main_header}>
        <TouchableOpacity onPress={goback}>
      <Back />
      </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}>Reset <Text style={styles.red}>Password</Text></Text>
       </View>
        <Text style={[styles.header_text, {color: theme.text}]}>Enter your new password, Remember this time!</Text>
      </View>
      <View style={styles.input_container}>
        <View style={styles.name_input}>
          <Text style={[styles.label, {color: theme.text}]}>old Password</Text>
          <TextInput
            style={[styles.password_input, styles.passwordInput]}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.name_input}>
          <Text style={[styles.label, {color: theme.text}]}>Password</Text>
          <TextInput
            style={[styles.password_input, styles.passwordInput]}
            secureTextEntry={!passwordVisible1}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility1}
            style={styles.eyeIcon}
          >
            <FontAwesomeIcon
              icon={passwordVisible1 ? faEye : faEyeSlash}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <View>
      <View style={styles.button_box}>
        <Button buttonText="continue" onPress={handleConfirm} />
      </View>
      <Text style={[styles.terms_condition, {color: theme.text}]}>By continuing, you agree to Baasaar <Text style={styles.terms}>Terms and Conditions
        Use</Text> and<Text style={styles.terms}> Privacy Policy.</Text></Text>
        </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.overlay}>
          <View style={[styles.modalContainer, {backgroundColor:theme.cardbg}]}>
            <View style={styles.close_container}>
              <Text style={[styles.close, {color:theme.color}]} onPress={closeModal}>X</Text>
            </View>
            <View style={styles.content}>
              <Success />
              <Text style={[styles.modalhead, {color:theme.color}]}>New password set
                Successfully</Text>
              <Text style={[styles.modaltext, {color:theme.color2}]}>Your password has been created.</Text>
              <View style={styles.loading_container}>
                <ActivityIndicator size="large" color="#C42072" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Reset;

const styles = StyleSheet.create({
  reset_page: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'space-between',
  },
  main_header: {
    flexDirection:'row',
    alignItems: 'center',
    gap: 20,
    marginTop: '15%',
  },
  header: {
    gap: 10,
  },
  heading: {
    fontSize: 30,
    lineHeight: 46,
    fontFamily: 'Kalam_700Bold',
  },
  red: {
    color: '#FF0000',
  },
  header_text: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '400',
    color: '#4C4C4C',
    maxWidth: 308,
  },
  input_container: {
    marginTop: 31,
    gap: 20,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
    color: '#070C18',
    padding: 5,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  input: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 15,
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 55,
    backgroundColor: '#f6f6f6',
  },
  password_input: {
    position: 'relative',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 15,
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 55,
    backgroundColor: '#f6f6f6',
  },
  passwordInput: {
    paddingRight: 60,
  },
  eyeIcon: {
    position: 'absolute',
    bottom: 15,
    right: 18,
  },
  button_box: {
    marginBottom: 40,
  },
  terms_condition: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    color: '#4C4C4C',
    textAlign: 'center',
    marginBottom: '10%',
  },
  terms: {
    color: '#FFB709',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  close_container: {
    alignItems: 'flex-end',
  },
  close: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: '600',
    padding: 6,
  },
  content: {
    alignItems: 'center',
  },
  modalhead: {
    fontSize: 28,
    lineHeight: 38,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Kalam_700Bold',
  },
  modaltext: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#474747',
    textAlign: 'center',
  },
  loading_container: {
    marginTop: 20,
  },
});
