import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LanguageDropdown from '../../components/LanguageDropdown/LanguageDropdown'; // Ensure this path is correct
import Button from '../../components/Button/Button';
import {Link, router} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import Back from "../../assets/images/back.svg";

const Register = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const home = () => {
    router.push('home');
  }

  const goback = () => {
    router.push('login');
  }
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  return (
    <View style={[styles.register_page, {backgroundColor: theme.background}]}>
       
      <View style={styles.header}>
      <View style={styles.main_header}>
        <TouchableOpacity onPress={goback}>
      <Back />
      </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}>Register<Text style={styles.red}> Account</Text></Text>
        </View>
        <Text style={[styles.header_text, {color: theme.text}]}>Hello there, please login first 👋</Text>
      
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
        <View style={styles.input_container}>
          <View style={styles.name_input}>
            <Text style={[styles.label, {color: theme.text}]}>Language</Text>
            <LanguageDropdown />
          </View>
          <View style={styles.name_input}>
            <Text style={[styles.label, {color: theme.text}]}>Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder='John Doe'
            />
          </View>
          <View style={styles.name_input}>
            <Text style={[styles.label, {color: theme.text}]}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder='minatonami@example.com'
            />
          </View>
          <View style={styles.name_input}>
            <Text style={[styles.label, {color: theme.text}]}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder='enter mobile number'
            />
          </View>
          <View style={styles.name_input}>
            <Text style={[styles.label, {color: theme.text}]}>Password</Text>
            <TextInput
              style={[styles.password_input, styles.passwordInput]}
              secureTextEntry={!passwordVisible}
              placeholder='password'
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
            <Text style={[styles.label, {color: theme.text}]}> confirm Password</Text>
            <TextInput
              style={[styles.password_input, styles.passwordInput]}
              secureTextEntry={!passwordVisible1}
              placeholder='confirm password'
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
            <Button buttonText="create" onPress={home} />
        </View>
        <Text style={[styles.bottom_text, {color: theme.text}]}>Already have an account? <Link style={styles.register} href="/login"> Login</Link></Text>
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
  main_header: {
    flexDirection:'row',
    alignItems: 'center',
    gap: 20,
    marginTop: '15%',
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
