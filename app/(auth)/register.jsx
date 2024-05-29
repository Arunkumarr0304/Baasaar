import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LanguageDropdown from '../../components/LanguageDropdown/LanguageDropdown'; // Ensure this path is correct
import Button from '../../components/Button/Button';
import {Link} from "expo-router";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  return (
    <View style={styles.register_page}>
      <View style={styles.header}>
        <Text style={styles.heading}>Register<Text style={styles.red}> Account</Text></Text>
        <Text style={styles.header_text}>Hello there, please login first 👋</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.input_container}>
          <View style={styles.name_input}>
            <Text style={styles.label}>Language</Text>
            <LanguageDropdown />
          </View>
          <View style={styles.name_input}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.name_input}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.name_input}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.name_input}>
            <Text style={styles.label}>Password</Text>
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
            <Text style={styles.label}>Password</Text>
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
        <View style={styles.button_box}>
            <Button buttonText="create" />
        </View>
        <Text style={styles.bottom_text}>Already have an account? <Link style={styles.register} href="/login"> Login</Link></Text>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  register_page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 30,
    lineHeight: 46,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#070C18',
  },
  red: {
    color: '#FF0000',
  },
  header_text: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '400',
    color: '#4C4C4C',
  },
  input_container: {
    marginTop: 31,
    gap: 10,
  },
  name_input: {
    marginBottom: 0,
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
    marginTop: 45,
  },
  bottom_text: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#070C18',
    marginVertical: 30,
  },
  register: {
    color: '#FFB709',
  }
});
