import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { forget_data } from '../../components/Data';
import CheckCircle from '../../components/Check_Circle/Check_Circle';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const Forget = () => {
  const navigation = useNavigation();
  const [activeBox, setActiveBox] = useState(forget_data[0]?.id || null);

  const handleBoxPress = (id) => {
    setActiveBox(id);
  };

  const confirm = () => {
      navigation.navigate('verification');
  }
  return (
    <View style={styles.forget_password_page}>
      <View style={styles.header}>
            <Text style={styles.heading}>Forgot <Text style={styles.red}>Password</Text></Text>
            <Text style={styles.header_text}>Enter your Email then we will send you OTP to reset new password.</Text>
        </View>

        <View style={styles.stackContainer}>
            {forget_data.map((d) => (
              <TouchableOpacity
                key={d.id}
                style={[styles.stackBox, activeBox === d.id && styles.activeStackBox]}
                onPress={() => handleBoxPress(d.id)}
              >
                <View style={styles.stackHead}>
                  {d.image}
                  <View style={styles.stackContent}>
                    <Text style={styles.stackHeading}>{d.heading}</Text>
                    <Text style={styles.stackText}>{d.text}</Text>
                  </View>
                </View>
                <CheckCircle
                  checked={activeBox === d.id}
                  onPress={() => handleBoxPress(d.id)}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.help}>Need Help ?</Text>
          <View style={styles.button_box}>
            <Button buttonText="confirm" onPress={confirm} />
          </View>
          <Text style={styles.terms_condition}>By continuing, you agree to Baasaar <Text style={styles.terms}>Terms and Conditions
Use</Text> and<Text style={styles.terms}> Privacy Policy.</Text></Text>
    </View>
  )
}

export default Forget;

const styles = StyleSheet.create({
  forget_password_page: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#ffffff',
  },
  header: {
    gap: 10,
},
heading: {
    fontSize: 30,
    lineHeight: 46,
    fontWeight: '700',
    fontStyle: 'italic',
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
    maxWidth: 308,
},
stackContainer: {
  marginTop: 30,
  gap: 20,
},
stackBox: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 10,
  borderColor: 'transparent',
  padding: 15,
  backgroundColor: '#F4F4F4',
},
activeStackBox: {
  borderColor: '#3C4E9B',
},
stackHead: {
  gap: 20,
  flexDirection: 'row',
  alignItems: 'center',
},
stackContent: {
  gap: 8,
},
stackHeading: {
  fontSize: 16,
  lineHeight: 30,
  fontWeight: '700',
  color: '#000000',
},
stackText: {
  fontSize: 14,
  lineHeight: 24,
  fontWeight: '400',
  color: '#474747',
},
help: {
  fontSize: 14,
  lineHeight: 24,
  fontWeight: '400',
  color: '#000000',
  textAlign: 'center',
  marginTop: 30,
  marginBottom: 260,
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