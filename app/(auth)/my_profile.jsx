import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, {useContext, useState} from 'react';
import { router } from 'expo-router';
import Back from "../../assets/images/back.svg";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../theme/ThemeContext';


const My_profile = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const goback = () => {
        router.push('profile');
      };
      const [passwordVisible, setPasswordVisible] = useState(false);
      const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
      
      const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
        };
        const togglePasswordVisibility2 = () => {
            setPasswordVisible2(!passwordVisible2);
          };
          const togglePasswordVisibility1 = () => {
            setPasswordVisible1(!passwordVisible1);
          };
        
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}> my profile</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[styles.main_label, {color: theme.color}]}>Profile Details</Text>
      <View style={styles.input_container}>
            <View style={styles.name_input}>
              <Text style={[styles.label, {color: theme.text}]}>User Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={styles.name_input}>
              <Text style={[styles.label, {color: theme.text}]}>Password</Text>
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
            <Text style={[styles.label, {color:theme.text}]}>Contact</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>
          </View>
          <View style={styles.password_containers}>
          <Text style={[styles.main_label, {color:theme.color}]}>Change Password</Text>
          <View style={styles.input_container}>
        <View style={styles.name_input}>
          <Text style={[styles.label, {color: theme.text}]}>new Password</Text>
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
        <View style={styles.name_input}>
          <Text style={[styles.label, {color: theme.text}]}>confirm Password</Text>
          <TextInput
            style={[styles.password_input, styles.passwordInput]}
            secureTextEntry={!passwordVisible2}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility2}
            style={styles.eyeIcon}
          >
            <FontAwesomeIcon
              icon={passwordVisible2 ? faEye : faEyeSlash}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default My_profile;

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
        gap: 50,
      },
      heading: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: '700',
        color: '#151515',
        marginLeft: 20,
        textTransform: 'capitalize',
      },
      main_label: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '600',
        color: '#151515',
        textTransform: 'capitalize',
      },
      input_container: {
        marginVertical: 31,
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
    password_containers: {
        paddingBottom: 50,
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
})