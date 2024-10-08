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
   </Stack>
  )
}

export default AuthLayout