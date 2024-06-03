import { View, Text } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";



const AuthLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='login' options={{headerShown: false}} />
    <Stack.Screen name='register' options={{headerShown: false}} />
    <Stack.Screen name='forget_password' options={{headerShown: false}} />
    <Stack.Screen name='verification' options={{headerShown: false}} />
    <Stack.Screen name='reset_password' options={{headerShown: false}} />
    <Stack.Screen name='search' options={{headerShown: false}} />
    <Stack.Screen name='all_products' options={{headerShown: false}} />
    <Stack.Screen name='product_details' options={{headerShown: false}} />
    <Stack.Screen name='cart' options={{headerShown: false}} />
    <Stack.Screen name='checkout' options={{headerShown: false}} />
    <Stack.Screen name='payment' options={{headerShown: false}} />
    <Stack.Screen name='order_confirm' options={{headerShown: false}} />
    <Stack.Screen name='notification' options={{headerShown: false}} />
    <Stack.Screen name='myorder' options={{headerShown: false}} />
    <Stack.Screen name='my_profile' options={{headerShown: false}} />
    <Stack.Screen name='order_details' options={{headerShown: false}} />
    <Stack.Screen name='track' options={{headerShown: false}} />
    <Stack.Screen name='add_new' options={{headerShown: false}} />
    <Stack.Screen name='payment_method' options={{headerShown: false}} />
   </Stack>
  )
}

export default AuthLayout