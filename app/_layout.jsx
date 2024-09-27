// _layout.jsx
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '../theme/ThemeContext';

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(screens)/search' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/all_products' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/product_details' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/cart' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/checkout' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/payment' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/order_confirm' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/notification' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/myorder' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/my_profile' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/order_details' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/track' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/add_new' options={{headerShown: false}} />
        <Stack.Screen name='(screens)/payment_method' options={{headerShown: false}} />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
