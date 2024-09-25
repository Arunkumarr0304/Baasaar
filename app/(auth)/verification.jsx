import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect, useContext } from 'react';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../../theme/ThemeContext';
import Back from '../../assets/images/back.svg'; 
import {Redirect, router} from "expo-router";

const Verification = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(110); 
  const otpInputs = useRef([]);

  const goback= () => {
    router.push('forget_password');
  }

  const confirm = () => {
    navigation.navigate('reset_password');
}

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index] !== '') {
        newOtp[index] = '';
        setOtp(newOtp);
        return;
      }
      if (index > 0) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        otpInputs.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [timer]);

  // Format the timer value into minutes:seconds
  const formatTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <View style={[styles.Verification_page, {backgroundColor: theme.background}]}>
      <View style={styles.column}>
      <View style={styles.header}>
      <View style={styles.main_header}>
      <TouchableOpacity onPress={goback} >
      <Back />
      </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}>OTP <Text style={styles.red}>Verification</Text></Text>
       </View>
        <Text style={[styles.header_text, {color: theme.text}]}>Please check your email/phone to see the verification code 📨</Text>
      </View>

      <View style={styles.name_input}>
        <Text style={[styles.label, {color: theme.text}]}>OTP code</Text>
        <View style={styles.otp_block}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleOtpChange(index, value)}
              onKeyPress={(event) => handleBackspace(index, event)}
              value={digit}
              ref={(ref) => otpInputs.current[index] = ref}
            />
          ))}
        </View>
      </View>
      <Button buttonText="Verify" onPress={confirm} />
      <View style={styles.resend_timer}>
        <Text style={[styles.resend, {color: theme.text}]}>Resend code in</Text>
        <View style={styles.timer_container}>
          <Text style={styles.timer}>{formatTimer(timer)}</Text>
        </View>
      </View>
      </View>
      <Text style={[styles.terms_condition, {color: theme.text}]}>Wrong email address? <Text style={styles.terms}>Change Email</Text></Text>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  Verification_page: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#ffffff',
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
  name_input: {
    marginTop: 100,
    marginBottom: 50,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    color: '#151515',
    padding: 5,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: 70,
    height: 60,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 30,
    color: '#000000',
    fontWeight: '700',
    backgroundColor: '#f6f6f6',
    borderColor: 'transparent',
  },
  otp_block: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  resend_timer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  resend: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    color: '#4C4C4C',
  },
  timer_container: {
    borderWidth: 1,
    borderRadius: 10,
    width: 70,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  timer: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    color: '#4C4C4C',
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
  }
});
