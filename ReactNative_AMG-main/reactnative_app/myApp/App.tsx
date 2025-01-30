import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import Home from './app/screens/Home';
import { CartProvider } from "./app/context/CartContext";
import { useFonts, Jost_400Regular } from '@expo-google-fonts/jost';
import { RubikGlitch_400Regular } from '@expo-google-fonts/rubik-glitch';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    RubikGlitch_400Regular
  });

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar hidden={true} />
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {user ? (
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </>
  );
}
