import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator, View, KeyboardAvoidingView, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/logo.jpg")}/>
      <KeyboardAvoidingView behavior='padding' style={styles.formContainer}>
        <Text style={styles.title}>AMG.</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder='Email'
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          placeholder='Password'
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity onPress={signIn} style={styles.button}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
              <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    marginTop: 100
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 45,
    marginBottom: 15,
    paddingLeft: 20,
    fontFamily: "Jost_400Regular"
  },
  button: {
    borderWidth: 2,
    alignItems: 'center',
    marginBottom: 10

  },
  buttonText: {
    padding: 15,
    fontFamily: "Jost_400Regular"
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: "RubikGlitch_400Regular",
    textAlign: 'center',
  },
});