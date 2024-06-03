import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import Profiles from "../../assets/images/Profile.svg";
import Dp from "../../assets/images/Dp.svg";
import Arrow from "../../assets/images/profile_arrow.svg";
import { profile_data, profile_data2, profile_data3 } from '../../components/Data';
import CustomSwitch from '../../components/Switch/Custom_switch';
import Logout from "../../assets/images/logout.svg";

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const edit = () => {
    router.push('my_profile');
  };
  const order = () => {
    router.push('myorder');
  };
  const method = () => {
    router.push('payment_method');
  };
  const goback = () => {
    router.push('home');
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const handleLogoutPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.heading}>profile</Text>
      </View>
      <View style={styles.profile_container}>
        <TouchableOpacity style={styles.profile}>
          <Profiles />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dp}>
          <Dp />
        </TouchableOpacity>
      </View>
      <View style={styles.edit_row}>
        <View style={styles.profile_content}>
          <Text style={styles.name}>Minato Namikaza</Text>
          <Text style={styles.email}>minatnami@gmail.com</Text>
          <Text style={styles.number}>(208) 555-0112</Text>
        </View>
        <TouchableOpacity style={styles.edit_box} onPress={edit}>
          <Text style={styles.edit}>edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profile_lines}>
        {profile_data.map((d) => (
          <TouchableOpacity
            style={styles.line_box}
            key={d.id}
            onPress={d.name === 'My Orders' ? order : d.name === 'Payments Methods' ? method : null}
          >
            <View style={styles.left_line}>
              {d.icon}
              <Text style={styles.line_text}>{d.name}</Text>
            </View>
            <Arrow />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.profile_lines2}>
        {profile_data2.map((d) => (
          <TouchableOpacity style={styles.line_box} key={d.id}>
            <View style={styles.left_line}>
              {d.icon}
              <Text style={styles.line_text}>{d.name}</Text>
            </View>
            {d.id === 1 ? (
              <CustomSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
            ) : (
              <CustomSwitch isEnabled={isEnabled2} toggleSwitch={toggleSwitch2} />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.profile_lines3}>
        {profile_data3.map((d) => (
          <TouchableOpacity 
            style={styles.line_box} 
            key={d.id} 
            onPress={d.name === 'Logout' ? handleLogoutPress : null}
          >
            <View style={styles.left_line}>
              {d.icon}
              <Text style={styles.line_text}>{d.name}</Text>
            </View>
            <Arrow />
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal_overlay}>
          <View style={styles.modal_view}>
            <View style={styles.image_box}>
              <Logout />
            </View>
            <Text style={styles.modal_text}>Are you sure want to logout?</Text>
            <View style={styles.modal_buttons}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonLogout]}
                onPress={() => {
                  // Handle logout logic here
                  setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle2}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

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
    gap: 65,
  },
  heading: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#151515',
    marginLeft: 20,
    textTransform: 'capitalize',
  },
  profile_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    position: 'relative',
    maxWidth: 114,
  },
  dp: {
    position: 'absolute',
    bottom: 0,
    right: 120,
  },
  edit_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  profile_content: {
    gap: 3,
  },
  name: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    color: '#151515',
    textTransform: 'capitalize',
  },
  email: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    color: '#4C4C4C',
  },
  number: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: '500',
    color: '#4C4C4C',
  },
  edit_box: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: '#FF0000',
  },
  edit: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  profile_lines: {
    gap: 20,
    marginTop: 36,
  },
  profile_lines2: {
    marginVertical: 10,
  },
  profile_lines3: {
    gap: 20,
  },
  line_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left_line: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  line_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    color: '#4C4C4C',
  },
  modal_overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal_view: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal_text: {
    marginVertical: 25,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: '#000000',
  },
  modal_buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 2,
    backgroundColor: '#EEEEEE',
    width: '48%',
    alignItems: 'center',
  },
  buttonLogout: {
    backgroundColor: '#FF3B30',
  },
  textStyle: {
    color: '#4C4C4C',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '500',
    textAlign: 'center',
  },
  textStyle2: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '500',
    textAlign: 'center',
  },
});

