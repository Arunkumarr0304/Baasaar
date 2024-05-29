import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';

const Reset = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible1, setPasswordVisible1] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
      const togglePasswordVisibility1 = () => {
        setPasswordVisible1(!passwordVisible1);
      };
  return (
    <View style={styles.reset_page}>
       <View style={styles.header}>
            <Text style={styles.heading}>Reset <Text style={styles.red}>Password</Text></Text>
            <Text style={styles.header_text}>Enter your new password, Remember this time!</Text>

        </View>
        <View style={styles.input_container}>
        <View style={styles.name_input}>
              <Text style={styles.label}>old Password</Text>
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
            <Button buttonText="continue" />
          </View>
          <Text style={styles.terms_condition}>By continuing, you agree to Baasaar <Text style={styles.terms}>Terms and Conditions
Use</Text> and<Text style={styles.terms}> Privacy Policy.</Text></Text>
  
    </View>
  )
}

export default Reset;

const styles = StyleSheet.create({
    reset_page: {
        paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#ffffff',
    flex: 1,
    },
    header: {
        gap: 10,
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
        marginTop: 160,
      },
      terms_condition: {
        fontSize: 12,
        lineHeight: 22,
        fontWeight: '400',
        color: '#4C4C4C',
        textAlign: 'center',
        marginTop: 40,
      },
      terms: {
        color: '#FFB709',
      }
})