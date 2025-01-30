import { StyleSheet, Text, View, TextInput} from 'react-native';

export const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.message}>ENVIOS GRATIS A TODA ESPAÑA</Text>
        <Text style={styles.titulo}>AMG.</Text>
      </View>
    )
  }
  const styles = StyleSheet.create({
      headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black"
      },
      titulo: {
        fontSize: 30,
        fontFamily: "RubikGlitch_400Regular",
        textAlign: 'center',
        color: "white",
        padding: 25
      },
      message: {
        backgroundColor: "#E60026",
        color: "white",
        width: "100%",
        padding: 5,
        textAlign: "center",
        fontFamily: "Jost_400Regular"
      }
})