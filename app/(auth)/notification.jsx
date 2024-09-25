import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import { notification_data } from '../../components/Data';
import ThemeContext from '../../theme/ThemeContext';
import Dark_notify from '../../assets/images/dark_notification.svg';

const Notification = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const goback = () => {
        router.push('home');
    };
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
        <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Back />
                </TouchableOpacity>
                <Text style={[styles.heading, {color: theme.color}]}>Notification</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.tab_container}>
                {
                    notification_data.map((d) => (
                        <TouchableOpacity style={[styles.tab, {backgroundColor: theme.cardbg}]} key={d.id}>
                            { darkMode ? <Dark_notify /> : d.image}
                            <Text style={[styles.tab_text, {color: theme.color}]}>{d.text}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            </ScrollView>
    </View>
  )
}

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginTop: '15%',
      },
      heading: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: '700',
        color: '#151515',
        position: 'absolute',
        left: '35%',
      },
    tab_container: {
        gap: 10,
        marginVertical: 30,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 12,
        },
    tab_text: {
        fontSize: 12,
        lineHeight: 19,
        fontWeight: '400',
        color: '#4C4C4C',
        maxWidth: 285,
        paddingHorizontal: 10,
    }
})