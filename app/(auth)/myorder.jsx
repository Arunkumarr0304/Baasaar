import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import { router } from 'expo-router';
import Order from "../../assets/images/order_stack_img.svg";
import Delivered from "../../assets/images/delivered_stack_img.svg";
import { ordered_data } from '../../components/Data';
import Arrow from "../../assets/images/right_arrow.svg";

const Myorder = () => {
    const goback = () =>{
        router.push('profile');
    };
    const details = () => {
        router.push('order_details');
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.heading}> my order</Text>
      </View>
      <TouchableOpacity style={styles.processing_box}>
        <Text style={styles.process}>Processing</Text>
      </TouchableOpacity>
      <View style={styles.order_container}>
        {
            ordered_data.map((d) => (
                <TouchableOpacity style={styles.order_box} key={d.id} onPress={details}>
                    <View style={styles.left_content}>
                        <Order />
                        <View style={styles.left_text}>
                            <Text style={styles.left_text1}>{d.name}</Text>
                            <Text style={styles.left_text2}>{d.items}</Text>
                        </View>
                    </View>
                    <Arrow />
                </TouchableOpacity>
            ))
        }
      </View>
      <TouchableOpacity style={styles.delivered_box}>
        <Text style={styles.process}>Delivered</Text>
      </TouchableOpacity>
      <View style={styles.order_container}>
        {
            ordered_data.map((d) => (
                <TouchableOpacity style={styles.order_box} key={d.id}>
                    <View style={styles.left_content}>
                        <Delivered />
                        <View style={styles.left_text}>
                            <Text style={styles.left_text1}>{d.name}</Text>
                            <Text style={styles.left_text2}>{d.items}</Text>
                        </View>
                    </View>
                    <Arrow />
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Myorder;

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
      processing_box: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#FFB709',
        maxWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      process: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '600',
        color: '#F8F8F8',
        textTransform: 'capitalize',
      },
      order_container: {
        gap: 15,
        marginTop: 16,
      },
      order_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 15,
      },
      left_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      left_text: {

      },
      left_text1: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '500',
        color: '#151515',
      },
      left_text2: {
        fontSize: 12,
        lineHeight: 22,
        fontWeight: '400',
        color: '#4C4C4C',
      },
      delivered_box: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#FF0000',
        maxWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      }
})