import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import { notification_data } from '../../components/Data';


const Notification = () => {
    
    const goback = () => {
        router.push('home');
    };
  return (
    <View style={styles.container}>
        <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.heading}>Notification</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.tab_container}>
                {
                    notification_data.map((d) => (
                        <TouchableOpacity style={styles.tab} key={d.id}>
                            {d.image}
                            <Text style={styles.tab_text}>{d.text}</Text>
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