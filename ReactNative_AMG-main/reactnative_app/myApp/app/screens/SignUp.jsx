import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator, View, KeyboardAvoidingView } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log(response);
      alert('WELCOME');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      alert('Sign up failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity onPress={signUp} style={styles.button}>
            <Text style={styles.buttonText}>CREATE ACOUNT</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}> GO BACK</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 45,
    marginBottom: 15,
    paddingLeft: 20,
    fontFamily: 'Jost_400Regular',
  },
  button: {
    borderWidth: 2,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    padding: 15,
    fontFamily: 'Jost_400Regular',
  },
  formContainer: {
    width: '80%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: 'RubikGlitch_400Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SignUp;
