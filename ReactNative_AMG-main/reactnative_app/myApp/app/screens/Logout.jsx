import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

function Logout() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/logo.jpg")}
      style={styles.img} />
      <Text style={styles.title} >AMG.</Text>
        <TouchableOpacity style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
  export default Logout;

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
    button: {
      borderWidth: 2,
      alignItems: 'center',
      marginTop: 10,
      width: "80%"
    },
    buttonText: {
      padding: 15,
      fontFamily: "Jost_400Regular"
    },
    title: {
      fontSize: 50,
      fontFamily: "RubikGlitch_400Regular",
      textAlign: 'center',
    },
  });