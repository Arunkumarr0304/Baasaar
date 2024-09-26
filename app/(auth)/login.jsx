import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import { login_items } from '../../components/Data';
import {Link} from "expo-router";
import {Redirect, router} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import Back from "../../assets/images/back.svg";
import { Kalam_700Bold } from '@expo-google-fonts/kalam';

const Login = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const login = () => {
      router.push('home');
  }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
    
  return (
    <View style={[styles.login_page, {backgroundColor: theme.background}]}>
      <StatusBar
        backgroundColor="transparent" 
        barStyle={darkMode ? "light-content" : "dark-content"} 
        translucent 
      />
     
        <View style={styles.header}>
            <Text style={[styles.heading, {color: theme.color}]}>Welcome <Text style={styles.red}>Back!</Text></Text>
            <Text style={[styles.header_text, {color: theme.text}]}>Hello there, please login first 👋</Text>
        </View>
    
        <View style={styles.input_container}>
            <View style={styles.name_input}>
              <Text style={[styles.label, {color: theme.text}]}>Email/Phone</Text>
              <TextInput
                style={[styles.input]}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='minatonami@example.com'
              />
            </View>
            <View style={styles.name_input}>
              <Text style={[styles.label, {color: theme.text}]}>Password</Text>
              <TextInput
                style={[styles.password_input, styles.passwordInput]}
                secureTextEntry={!passwordVisible}
                placeholder='Password'
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
          </View>
          <Link style={styles.forget} href="/forget_password">Forgot password</Link>
          <Button buttonText="login" onPress={login} />
          <View style={styles.login_items}>
            <Text style={styles.log_text}>Login with account</Text>
            <View style={styles.login_items_container}>
                {
                    login_items.map((d) => (
                        <View style={styles.image_box} key={d.id}>
                                {d.image}
                        </View>
                    ))
                }
            </View>
          </View>
          <Text style={[styles.bottom_text, {color: theme.color}]}>Don’t have an account yet? <Link style={styles.register} href="/register"> Register</Link></Text>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    login_page: {
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        flex: 1,
    },
    header: {
        gap: 10,
        marginTop: '15%',
    },
    heading: {
        fontSize: 30,
        lineHeight: 46,
        fontFamily: 'Kalam_700Bold',
        color:'#070C18',
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
      forget: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '500',
        color: '#727A83',
        textAlign: 'right',
        marginTop: 25,
        marginBottom: 50,
      },
      login_items: {
        marginTop: 60,
        alignItems:'center',
       
      },
      log_text: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        color: '#BABABA',
      },
      login_items_container: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 15,
        alignItems: 'center',
        justifyContent:'center',
      },
      bottom_text: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        color: '#070C18',
        marginTop: 30,
      },
      register: {
        color: '#FFB709',
      }
    
})